goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__21600__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__21600 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21604__i = 0, G__21604__a = new Array(arguments.length -  0);
while (G__21604__i < G__21604__a.length) {G__21604__a[G__21604__i] = arguments[G__21604__i + 0]; ++G__21604__i;}
  args = new cljs.core.IndexedSeq(G__21604__a,0,null);
} 
return G__21600__delegate.call(this,args);};
G__21600.cljs$lang$maxFixedArity = 0;
G__21600.cljs$lang$applyTo = (function (arglist__21605){
var args = cljs.core.seq(arglist__21605);
return G__21600__delegate(args);
});
G__21600.cljs$core$IFn$_invoke$arity$variadic = G__21600__delegate;
return G__21600;
})()
);

(o.error = (function() { 
var G__21619__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__21619 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21640__i = 0, G__21640__a = new Array(arguments.length -  0);
while (G__21640__i < G__21640__a.length) {G__21640__a[G__21640__i] = arguments[G__21640__i + 0]; ++G__21640__i;}
  args = new cljs.core.IndexedSeq(G__21640__a,0,null);
} 
return G__21619__delegate.call(this,args);};
G__21619.cljs$lang$maxFixedArity = 0;
G__21619.cljs$lang$applyTo = (function (arglist__21665){
var args = cljs.core.seq(arglist__21665);
return G__21619__delegate(args);
});
G__21619.cljs$core$IFn$_invoke$arity$variadic = G__21619__delegate;
return G__21619;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
