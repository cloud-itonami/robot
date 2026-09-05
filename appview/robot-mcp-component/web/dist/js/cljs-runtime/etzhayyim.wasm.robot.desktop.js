goog.provide('etzhayyim.wasm.robot.desktop');
if((typeof etzhayyim !== 'undefined') && (typeof etzhayyim.wasm !== 'undefined') && (typeof etzhayyim.wasm.robot !== 'undefined') && (typeof etzhayyim.wasm.robot.desktop !== 'undefined') && (typeof etzhayyim.wasm.robot.desktop.root !== 'undefined')){
} else {
etzhayyim.wasm.robot.desktop.root = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
etzhayyim.wasm.robot.desktop.mount_BANG_ = (function etzhayyim$wasm$robot$desktop$mount_BANG_(){
var el = document.getElementById("app");
if(cljs.core.truth_(cljs.core.deref(etzhayyim.wasm.robot.desktop.root))){
} else {
cljs.core.reset_BANG_(etzhayyim.wasm.robot.desktop.root,reagent.dom.client.create_root(el));
}

return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(etzhayyim.wasm.robot.desktop.root),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [etzhayyim.wasm.robot.ui.root], null));
});
etzhayyim.wasm.robot.desktop.init_BANG_ = (function etzhayyim$wasm$robot$desktop$init_BANG_(){
return etzhayyim.wasm.robot.desktop.mount_BANG_();
});

//# sourceMappingURL=etzhayyim.wasm.robot.desktop.js.map
