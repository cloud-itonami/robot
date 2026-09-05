goog.provide('byoubu.spec');
/**
 * Every backdrop names the same nine roles. A fixed vocabulary is what lets
 *   `byoubu.plate` build a plate for any entry without special-casing, and
 *   what lets two backdrops be compared.
 */
byoubu.spec.required_palette_keys = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sky-zenith","sky-zenith",-20065151),new cljs.core.Keyword(null,"sky-mid","sky-mid",106630624),new cljs.core.Keyword(null,"sky-horizon","sky-horizon",-157541617),new cljs.core.Keyword(null,"haze","haze",-1024870708),new cljs.core.Keyword(null,"ridge-far","ridge-far",762525090),new cljs.core.Keyword(null,"ridge-near","ridge-near",1102584738),new cljs.core.Keyword(null,"dune-lit","dune-lit",790638115),new cljs.core.Keyword(null,"dune-shadow","dune-shadow",423450330),new cljs.core.Keyword(null,"star","star",279424429)], null);
byoubu.spec.required_scene_keys = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sky","sky",1271496862),new cljs.core.Keyword(null,"atmosphere","atmosphere",523254734),new cljs.core.Keyword(null,"terrain","terrain",704966005),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"grade","grade",2117054771)], null);
byoubu.spec.textures = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"moderate","moderate",-1039163165),null,new cljs.core.Keyword(null,"calm","calm",-533989756),null,new cljs.core.Keyword(null,"busy","busy",-328286801),null], null), null);
byoubu.spec.missing = (function byoubu$spec$missing(m,ks){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__22789_SHARP_){
return cljs.core.contains_QMARK_(m,p1__22789_SHARP_);
}),ks);
});
/**
 * Vector of problem descriptions for one backdrop; empty means valid.
 */
byoubu.spec.problems = (function byoubu$spec$problems(backdrop){
var id = new cljs.core.Keyword("byoubu","id","byoubu/id",459733156).cljs$core$IFn$_invoke$arity$1(backdrop);
var palette = new cljs.core.Keyword("byoubu","palette","byoubu/palette",851879321).cljs$core$IFn$_invoke$arity$1(backdrop);
var band = new cljs.core.Keyword("byoubu","content-band","byoubu/content-band",-1665630238).cljs$core$IFn$_invoke$arity$1(backdrop);
var scene = new cljs.core.Keyword("byoubu","scene","byoubu/scene",1831525071).cljs$core$IFn$_invoke$arity$1(backdrop);
var pfx = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0)),": "].join('');
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__22790(s__22791){
return (new cljs.core.LazySeq(null,(function (){
var s__22791__$1 = s__22791;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22791__$1);
if(temp__5825__auto__){
var s__22791__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22791__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22791__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22793 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22792 = (0);
while(true){
if((i__22792 < size__5479__auto__)){
var k = cljs.core._nth(c__5478__auto__,i__22792);
if((cljs.core.get.cljs$core$IFn$_invoke$arity$2(backdrop,k) == null)){
cljs.core.chunk_append(b__22793,[pfx,"missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));

var G__22976 = (i__22792 + (1));
i__22792 = G__22976;
continue;
} else {
var G__23021 = (i__22792 + (1));
i__22792 = G__23021;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22793),byoubu$spec$problems_$_iter__22790(cljs.core.chunk_rest(s__22791__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22793),null);
}
} else {
var k = cljs.core.first(s__22791__$2);
if((cljs.core.get.cljs$core$IFn$_invoke$arity$2(backdrop,k) == null)){
return cljs.core.cons([pfx,"missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),byoubu$spec$problems_$_iter__22790(cljs.core.rest(s__22791__$2)));
} else {
var G__23022 = cljs.core.rest(s__22791__$2);
s__22791__$1 = G__23022;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("byoubu","id","byoubu/id",459733156),new cljs.core.Keyword("byoubu","title","byoubu/title",1943539519),new cljs.core.Keyword("byoubu","summary","byoubu/summary",1753941440),new cljs.core.Keyword("byoubu","tags","byoubu/tags",-743870735),new cljs.core.Keyword("byoubu","seed","byoubu/seed",841916191),new cljs.core.Keyword("byoubu","texture","byoubu/texture",1576630445),new cljs.core.Keyword("byoubu","accent","byoubu/accent",553460268),new cljs.core.Keyword("byoubu","palette","byoubu/palette",851879321),new cljs.core.Keyword("byoubu","content-band","byoubu/content-band",-1665630238),new cljs.core.Keyword("byoubu","scene","byoubu/scene",1831525071)], null));
})(),(((id instanceof cljs.core.Keyword))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[pfx,"id must be a keyword"].join('')], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core.int_QMARK_(new cljs.core.Keyword("byoubu","seed","byoubu/seed",841916191).cljs$core$IFn$_invoke$arity$1(backdrop)))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[pfx,"seed must be an integer \u2014 a backdrop nobody can re-render ","is an asset, not a spec"].join('')], null)),((cljs.core.contains_QMARK_(byoubu.spec.textures,new cljs.core.Keyword("byoubu","texture","byoubu/texture",1576630445).cljs$core$IFn$_invoke$arity$1(backdrop)))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[pfx,"texture must be one of ",clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.sort.cljs$core$IFn$_invoke$arity$1(byoubu.spec.textures))].join('')], null)),(function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__22794(s__22795){
return (new cljs.core.LazySeq(null,(function (){
var s__22795__$1 = s__22795;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22795__$1);
if(temp__5825__auto__){
var s__22795__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22795__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22795__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22797 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22796 = (0);
while(true){
if((i__22796 < size__5479__auto__)){
var k = cljs.core._nth(c__5478__auto__,i__22796);
cljs.core.chunk_append(b__22797,[pfx,"palette missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));

var G__23023 = (i__22796 + (1));
i__22796 = G__23023;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22797),byoubu$spec$problems_$_iter__22794(cljs.core.chunk_rest(s__22795__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22797),null);
}
} else {
var k = cljs.core.first(s__22795__$2);
return cljs.core.cons([pfx,"palette missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),byoubu$spec$problems_$_iter__22794(cljs.core.rest(s__22795__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(byoubu.spec.missing(palette,byoubu.spec.required_palette_keys));
})(),(function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__22798(s__22799){
return (new cljs.core.LazySeq(null,(function (){
var s__22799__$1 = s__22799;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22799__$1);
if(temp__5825__auto__){
var s__22799__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22799__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22799__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22801 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22800 = (0);
while(true){
if((i__22800 < size__5479__auto__)){
var vec__22802 = cljs.core._nth(c__5478__auto__,i__22800);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22802,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22802,(1),null);
if((byoubu.color.hex__GT_rgb(v) == null)){
cljs.core.chunk_append(b__22801,[pfx,"palette ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," is not a hex color: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))].join(''));

var G__23024 = (i__22800 + (1));
i__22800 = G__23024;
continue;
} else {
var G__23025 = (i__22800 + (1));
i__22800 = G__23025;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22801),byoubu$spec$problems_$_iter__22798(cljs.core.chunk_rest(s__22799__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22801),null);
}
} else {
var vec__22805 = cljs.core.first(s__22799__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22805,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22805,(1),null);
if((byoubu.color.hex__GT_rgb(v) == null)){
return cljs.core.cons([pfx,"palette ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," is not a hex color: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))].join(''),byoubu$spec$problems_$_iter__22798(cljs.core.rest(s__22799__$2)));
} else {
var G__23026 = cljs.core.rest(s__22799__$2);
s__22799__$1 = G__23026;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(palette);
})(),((cljs.core.contains_QMARK_(palette,new cljs.core.Keyword("byoubu","accent","byoubu/accent",553460268).cljs$core$IFn$_invoke$arity$1(backdrop)))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[pfx,"accent ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("byoubu","accent","byoubu/accent",553460268).cljs$core$IFn$_invoke$arity$1(backdrop)], 0))," is not a palette key"].join('')], null)),(function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__22808(s__22809){
return (new cljs.core.LazySeq(null,(function (){
var s__22809__$1 = s__22809;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22809__$1);
if(temp__5825__auto__){
var s__22809__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22809__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22809__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22811 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22810 = (0);
while(true){
if((i__22810 < size__5479__auto__)){
var vec__22812 = cljs.core._nth(c__5478__auto__,i__22810);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22812,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22812,(1),null);
if((!(cljs.core.contains_QMARK_(palette,k)))){
cljs.core.chunk_append(b__22811,[pfx,"content-band references unknown palette key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));

var G__23027 = (i__22810 + (1));
i__22810 = G__23027;
continue;
} else {
var G__23028 = (i__22810 + (1));
i__22810 = G__23028;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22811),byoubu$spec$problems_$_iter__22808(cljs.core.chunk_rest(s__22809__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22811),null);
}
} else {
var vec__22815 = cljs.core.first(s__22809__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22815,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22815,(1),null);
if((!(cljs.core.contains_QMARK_(palette,k)))){
return cljs.core.cons([pfx,"content-band references unknown palette key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),byoubu$spec$problems_$_iter__22808(cljs.core.rest(s__22809__$2)));
} else {
var G__23029 = cljs.core.rest(s__22809__$2);
s__22809__$1 = G__23029;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(band);
})(),(function (){var total = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,0.0,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,band));
var drift = (total - 1.0);
var drift__$1 = (((drift < (0)))?(- drift):drift);
if((drift__$1 > 0.001)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[pfx,"content-band weights sum to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(total),", not 1.0"].join('')], null);
} else {
return null;
}
})(),(function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__22822(s__22823){
return (new cljs.core.LazySeq(null,(function (){
var s__22823__$1 = s__22823;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22823__$1);
if(temp__5825__auto__){
var s__22823__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22823__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22823__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22826 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22825 = (0);
while(true){
if((i__22825 < size__5479__auto__)){
var k = cljs.core._nth(c__5478__auto__,i__22825);
cljs.core.chunk_append(b__22826,[pfx,"scene missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));

var G__23030 = (i__22825 + (1));
i__22825 = G__23030;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22826),byoubu$spec$problems_$_iter__22822(cljs.core.chunk_rest(s__22823__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22826),null);
}
} else {
var k = cljs.core.first(s__22823__$2);
return cljs.core.cons([pfx,"scene missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),byoubu$spec$problems_$_iter__22822(cljs.core.rest(s__22823__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(byoubu.spec.missing(scene,byoubu.spec.required_scene_keys));
})(),(function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__22833(s__22834){
return (new cljs.core.LazySeq(null,(function (){
var s__22834__$1 = s__22834;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22834__$1);
if(temp__5825__auto__){
var s__22834__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22834__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22834__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22836 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22835 = (0);
while(true){
if((i__22835 < size__5479__auto__)){
var vec__22841 = cljs.core._nth(c__5478__auto__,i__22835);
var tier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22841,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22841,(1),null);
if((byoubu.color.hex__GT_rgb(new cljs.core.Keyword(null,"content-color","content-color",1294205929).cljs$core$IFn$_invoke$arity$1(m)) == null)){
cljs.core.chunk_append(b__22836,[pfx,"measured ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tier)," content-color is not a hex color: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"content-color","content-color",1294205929).cljs$core$IFn$_invoke$arity$1(m)], 0))].join(''));

var G__23031 = (i__22835 + (1));
i__22835 = G__23031;
continue;
} else {
var G__23032 = (i__22835 + (1));
i__22835 = G__23032;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22836),byoubu$spec$problems_$_iter__22833(cljs.core.chunk_rest(s__22834__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22836),null);
}
} else {
var vec__22847 = cljs.core.first(s__22834__$2);
var tier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22847,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22847,(1),null);
if((byoubu.color.hex__GT_rgb(new cljs.core.Keyword(null,"content-color","content-color",1294205929).cljs$core$IFn$_invoke$arity$1(m)) == null)){
return cljs.core.cons([pfx,"measured ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tier)," content-color is not a hex color: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"content-color","content-color",1294205929).cljs$core$IFn$_invoke$arity$1(m)], 0))].join(''),byoubu$spec$problems_$_iter__22833(cljs.core.rest(s__22834__$2)));
} else {
var G__23033 = cljs.core.rest(s__22834__$2);
s__22834__$1 = G__23033;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.select_keys(new cljs.core.Keyword("byoubu","measured","byoubu/measured",-610808208).cljs$core$IFn$_invoke$arity$1(backdrop),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plate","plate",-1920178141),new cljs.core.Keyword(null,"poster","poster",-1616913550)], null)));
})(),(function (){var f = byoubu.facts.derive_facts(backdrop);
var ink = new cljs.core.Keyword("byoubu.facts","ink","byoubu.facts/ink",567836213).cljs$core$IFn$_invoke$arity$1(f);
var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__22854(s__22855){
return (new cljs.core.LazySeq(null,(function (){
var s__22855__$1 = s__22855;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22855__$1);
if(temp__5825__auto__){
var s__22855__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22855__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22855__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22857 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22856 = (0);
while(true){
if((i__22856 < size__5479__auto__)){
var vec__22861 = cljs.core._nth(c__5478__auto__,i__22856);
var tier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22861,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22861,(1),null);
var r = byoubu.color.contrast_ratio(ink,c);
if(((function (){var or__5002__auto__ = r;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return 0.0;
}
})() < byoubu.facts.wcag_aa_body)){
cljs.core.chunk_append(b__22857,[pfx,"recommended ink ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ink)," on the ",cljs.core.name(tier)," content band ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)," has contrast ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),", below AA body ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(byoubu.facts.wcag_aa_body)].join(''));

var G__23034 = (i__22856 + (1));
i__22856 = G__23034;
continue;
} else {
var G__23035 = (i__22856 + (1));
i__22856 = G__23035;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22857),byoubu$spec$problems_$_iter__22854(cljs.core.chunk_rest(s__22855__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22857),null);
}
} else {
var vec__22865 = cljs.core.first(s__22855__$2);
var tier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22865,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22865,(1),null);
var r = byoubu.color.contrast_ratio(ink,c);
if(((function (){var or__5002__auto__ = r;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return 0.0;
}
})() < byoubu.facts.wcag_aa_body)){
return cljs.core.cons([pfx,"recommended ink ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ink)," on the ",cljs.core.name(tier)," content band ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)," has contrast ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),", below AA body ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(byoubu.facts.wcag_aa_body)].join(''),byoubu$spec$problems_$_iter__22854(cljs.core.rest(s__22855__$2)));
} else {
var G__23036 = cljs.core.rest(s__22855__$2);
s__22855__$1 = G__23036;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(byoubu.facts.tier_colors(backdrop));
})()], 0)));
});
byoubu.spec.valid_QMARK_ = (function byoubu$spec$valid_QMARK_(backdrop){
return cljs.core.empty_QMARK_(byoubu.spec.problems(backdrop));
});

//# sourceMappingURL=byoubu.spec.js.map
