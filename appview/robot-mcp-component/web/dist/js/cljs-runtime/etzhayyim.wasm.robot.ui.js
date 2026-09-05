goog.provide('etzhayyim.wasm.robot.ui');
etzhayyim.wasm.robot.ui.css_text = "\n.rbt-app { min-height: 100vh; padding: 24px; background: var(--liquid-glass-bg, #11161d); color: var(--liquid-glass-fg, #eef4f8); font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif; }\n.rbt-top { margin-bottom: 18px; }\n.rbt-top p, .rbt-top span, .rbt-muted, .rbt-app h2, .rbt-facts span { color: #96a6b8; }\n.rbt-top p { margin: 0 0 8px; font-size: 12px; font-weight: 700; text-transform: uppercase; }\n.rbt-app h1, .rbt-app h2, .rbt-app p { margin: 0; }\n.rbt-app h1 { font-size: clamp(28px, 5vw, 48px); line-height: 1.05; }\n.rbt-top span { display: block; margin-top: 8px; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; overflow-wrap: anywhere; }\n.rbt-facts { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; margin-bottom: 12px; }\n.rbt-facts > div, .rbt-panel { border: 1px solid #2b3948; border-radius: 8px; background: #171f28; }\n.rbt-facts > div { padding: 14px; }\n.rbt-facts span { display: block; margin-bottom: 8px; font-size: 12px; }\n.rbt-facts strong { overflow-wrap: anywhere; }\n.rbt-panel { margin-bottom: 12px; padding: 16px; }\n.rbt-app h2 { margin-bottom: 12px; font-size: 13px; text-transform: uppercase; }\n.rbt-app ul { display: grid; gap: 8px; margin: 0; padding: 0; list-style: none; }\n.rbt-app li, .rbt-path p { border: 1px solid #263443; border-radius: 6px; background: #101720; padding: 9px 10px; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; overflow-wrap: anywhere; }\n.rbt-chips { grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); }\n@media (max-width: 760px) { .rbt-app { padding: 18px; } .rbt-facts { grid-template-columns: 1fr; } }\n";
etzhayyim.wasm.robot.ui.panel = (function etzhayyim$wasm$robot$ui$panel(title,body){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.rbt-panel","section.rbt-panel",-272708763),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),title], null),body], null);
});
etzhayyim.wasm.robot.ui.facts = (function etzhayyim$wasm$robot$ui$facts(app){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.rbt-facts","section.rbt-facts",-1011341358),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Project"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.Keyword(null,"project","project",1124394579).cljs$core$IFn$_invoke$arity$1(app)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Routes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.Keyword(null,"route-count","route-count",-1535759193).cljs$core$IFn$_invoke$arity$1(app)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"XRPC"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),(cljs.core.truth_(new cljs.core.Keyword(null,"xrpc?","xrpc?",938402752).cljs$core$IFn$_invoke$arity$1(app))?"enabled":"not configured")], null)], null)], null);
});
etzhayyim.wasm.robot.ui.public_routes = (function etzhayyim$wasm$robot$ui$public_routes(p__23763){
var map__23764 = p__23763;
var map__23764__$1 = cljs.core.__destructure_map(map__23764);
var routes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23764__$1,new cljs.core.Keyword(null,"routes","routes",457900162));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [etzhayyim.wasm.robot.ui.panel,"Public Routes",((cljs.core.seq(routes))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5480__auto__ = (function etzhayyim$wasm$robot$ui$public_routes_$_iter__23765(s__23766){
return (new cljs.core.LazySeq(null,(function (){
var s__23766__$1 = s__23766;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__23766__$1);
if(temp__5825__auto__){
var s__23766__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23766__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23766__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23768 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23767 = (0);
while(true){
if((i__23767 < size__5479__auto__)){
var r = cljs.core._nth(c__5478__auto__,i__23767);
cljs.core.chunk_append(b__23768,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),r], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),r], null)));

var G__23784 = (i__23767 + (1));
i__23767 = G__23784;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23768),etzhayyim$wasm$robot$ui$public_routes_$_iter__23765(cljs.core.chunk_rest(s__23766__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23768),null);
}
} else {
var r = cljs.core.first(s__23766__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),r], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),r], null)),etzhayyim$wasm$robot$ui$public_routes_$_iter__23765(cljs.core.rest(s__23766__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(routes);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.rbt-muted","p.rbt-muted",127648739),"No public route is declared next to this app surface."], null))], null);
});
etzhayyim.wasm.robot.ui.runtime_bindings = (function etzhayyim$wasm$robot$ui$runtime_bindings(p__23775){
var map__23776 = p__23775;
var map__23776__$1 = cljs.core.__destructure_map(map__23776);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23776__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [etzhayyim.wasm.robot.ui.panel,"Runtime Bindings",((cljs.core.seq(vars))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.rbt-chips","ul.rbt-chips",-221821865),(function (){var iter__5480__auto__ = (function etzhayyim$wasm$robot$ui$runtime_bindings_$_iter__23777(s__23778){
return (new cljs.core.LazySeq(null,(function (){
var s__23778__$1 = s__23778;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__23778__$1);
if(temp__5825__auto__){
var s__23778__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23778__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23778__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23780 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23779 = (0);
while(true){
if((i__23779 < size__5479__auto__)){
var k = cljs.core._nth(c__5478__auto__,i__23779);
cljs.core.chunk_append(b__23780,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),k], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));

var G__23785 = (i__23779 + (1));
i__23779 = G__23785;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23780),etzhayyim$wasm$robot$ui$runtime_bindings_$_iter__23777(cljs.core.chunk_rest(s__23778__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23780),null);
}
} else {
var k = cljs.core.first(s__23778__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),k], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),etzhayyim$wasm$robot$ui$runtime_bindings_$_iter__23777(cljs.core.rest(s__23778__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(vars);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.rbt-muted","p.rbt-muted",127648739),"No public vars are declared in the nearest wrangler config."], null))], null);
});
etzhayyim.wasm.robot.ui.source = (function etzhayyim$wasm$robot$ui$source(p__23781){
var map__23782 = p__23781;
var map__23782__$1 = cljs.core.__destructure_map(map__23782);
var relative_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23782__$1,new cljs.core.Keyword(null,"relative-path","relative-path",1848635172));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.rbt-panel.rbt-path","section.rbt-panel.rbt-path",-653342618),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Source"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),relative_path], null)], null);
});
etzhayyim.wasm.robot.ui.root = (function etzhayyim$wasm$robot$ui$root(){
var map__23783 = cljs.core.deref(etzhayyim.wasm.robot.state.state);
var map__23783__$1 = cljs.core.__destructure_map(map__23783);
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23783__$1,new cljs.core.Keyword(null,"app","app",-560961707));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),etzhayyim.wasm.robot.ui.css_text], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [appkit.core.panel,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.rbt-app","main.rbt-app",-1747560134),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.rbt-top","section.rbt-top",-1002365085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Cloudflare ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(app))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(app)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(app)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [etzhayyim.wasm.robot.ui.facts,app], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [etzhayyim.wasm.robot.ui.public_routes,app], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [etzhayyim.wasm.robot.ui.runtime_bindings,app], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [etzhayyim.wasm.robot.ui.source,app], null)], null)], null)], null);
});

//# sourceMappingURL=etzhayyim.wasm.robot.ui.js.map
