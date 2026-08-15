# Operator quickstart

**Three things here run offline, one page renders with no network at all, and the
worker that would answer the appview's requests is not the one that deploys.**

26 tracked files. Unlike most of the migrated appviews, this repository has real
content in three places: a TypeScript registry with validators and a test, a BPMN
process definition, and a self-contained review page.

Steps marked ✅ were run against this tree on 2026-08-15. ⚠ items were measured.

---

## 1. The validators run with nothing installed ✅

`kotoba/src/types.ts` has **no imports** — only exported type guards and identifier
builders — so Node runs it directly. Walked on Node v26.3.0, where
`--experimental-strip-types` is a no-op (default from Node 23) and required on
22.6–22.x:

```bash
cd kotoba

cat > /tmp/robotwalk.mjs <<'EOF'
const t = await import(process.argv[2]);
for (const [label, got] of [
  ["isUint(3)",                 t.isUint(3)],
  ["isUint(-1)",                t.isUint(-1)],
  ["isUint(1.5)",               t.isUint(1.5)],
  ["isPositiveInt(0)",          t.isPositiveInt(0)],
  ["isDecimalString('12.50')",  t.isDecimalString("12.50")],
  ["isDecimalString('abc')",    t.isDecimalString("abc")],
  ["productRkey('R-1')",        t.productRkey("R-1")],
  ["productDidFor('R-1')",      t.productDidFor("R-1")],
]) console.log(" ", label, "->", JSON.stringify(got));
EOF

node --experimental-strip-types /tmp/robotwalk.mjs "$PWD/src/types.ts"
```

Actual output:

```
  isUint(3) -> true
  isUint(-1) -> false
  isUint(1.5) -> false
  isPositiveInt(0) -> false
  isDecimalString('12.50') -> true
  isDecimalString('abc') -> false
  productRkey('R-1') -> "prod-r-1"
  productDidFor('R-1') -> "did:web:robot.etzhayyim.com:prod:r-1"
```

`isUint` rejecting `1.5` and `isPositiveInt` rejecting `0` are the two worth keeping:
they are the checks a caller is most likely to assume rather than test.

## 2. The BPMN is a real process definition ✅

```bash
python3 -c "
import xml.etree.ElementTree as ET
from collections import Counter
r = ET.parse('bpmn/robot-control.bpmn').getroot()
print('root:', r.tag.split('}')[-1])
print(dict(Counter(e.tag.split('}')[-1] for e in r.iter()).most_common(6)))
"
```

It parses, and its shape is `{'sequenceFlow': 16, 'process': 8, 'startEvent': 8,
'serviceTask': 8, 'extensionElements': 8, 'taskDefinition': 8}` — eight processes,
each with a start event, a service task and a task definition. So this is a
dispatcher-ready definition rather than a diagram stub.

## 3. The review page renders with no network ✅

`appview/robotics-kami-review/index.html` is 9,162 bytes and **self-contained**:

```bash
grep -coE 'src="https?://|href="https?://|@import|fetch\(' \
  appview/robotics-kami-review/index.html      # 0
```

Zero external references and no fetch: its favicon is an inline `data:` SVG and its
data is an inline `plan` object covering sales → engineering → manufacturing →
quality → transport → finance with named approval gates. **Open it in a browser
from disk and it works.** For a repository whose other pages need a build and a
router, that is the one artefact you can show someone today.

## 4. ⚠ The worker that answers the appview is not the one that deploys

The familiar divergence, present here:

```bash
grep '"main"' appview/robot-mcp-component/wrangler.jsonc
#     "main": "svelte/.svelte-kit/cloudflare/_worker.js",
grep -c '"/health"' appview/robot-mcp-component/src/app.ts        # 1
rg -c health appview/robot-mcp-component/svelte/src/              # no match
grep -c 'catch(() => ({}))' \
  appview/robot-mcp-component/svelte/src/routes/xrpc/*/+server.ts # 1
```

So `/health` exists only in the undeployed `src/app.ts`, and the deployed route
turns a malformed body into `{}` and calls the tool with empty arguments. Fleet-wide
this is 89 and 58 repositories respectively, out of the 329 carrying a
`wrangler.jsonc`; the standing check is `:verify-appview-facade` in
`manifest/orgs-detectors.edn`. **Do not health-check this service at `/health`.**

## 5. ⚠ Two of the three real things above are invisible to the maturity instrument

Worth knowing if you are reading this repository's score rather than its contents.

- **The test does not count.** `kotoba/test/robot.test.ts` exists, and the scan
  counts test bytes only under a **top-level** `test/`. So `axis-test` reads 0bp.
  Fleet-wide 387 repositories are measured as zero src AND zero test while having
  code (ADR-2608052000).
- **The demo does not count.** `:surface/demo-file-count` matches only
  `^(docs|samples|public|demo)/.*\.html$`, and §3's page lives under `appview/`. So
  `axis-surface` gets nothing for the one artefact that renders offline.

On the second, an honest bound rather than a headline: 144 of the 1,308 repositories
with a zero demo count have HTML outside those paths — but many of those files are
`svelte/src/app.html`, which is SvelteKit's **template**, not a demo. Counting them
as demos would be wrong, so 144 is an upper bound on missed demos and not a count of
them. That is unlike the ingest gap in the same instrument, where the 648 repositories
hold unambiguous source URLs.

## 6. What is not here ⚠

`MIGRATION-TODO.md` says this is a thin-edge dispatcher whose business logic runs in
the dispatcher and a pod-side LangServer, with a substrate-boundary codemod still
**pending** per ADR-2605172000 / 2605172100. None of that logic is in this tree, and
the appview build is NOT WALKED here — no lockfile, no `node_modules`, so it needs a
network install. Through the resource governor if you run it:

```bash
node <root>/scripts/resource-guard.mjs run build -- \
  npm --prefix appview/robot-mcp-component/svelte run build
```

`kotoba/`'s vitest suite is also not walked: it resolves `@etzhayyim/sdk` from a git
URL, which needs the network.
