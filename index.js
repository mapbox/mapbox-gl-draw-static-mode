var StaticMode = module.exports = {};

StaticMode.onSetup = function() {
  this.setActionableState(); // default actionable state is false for all actions
  return {};
};

StaticMode.toDisplayFeatures = function(state, geojson, display) {
  display(geojson);
};
