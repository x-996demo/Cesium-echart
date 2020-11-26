function loadShapfile(url, viewer) {
  let promise = Cesium.GeoJsonDataSource.load(url);
  promise.then((dataSource) => {
    viewer.dataSources.add(dataSource);
    let entities = dataSource.entities.values;
    for (var i = 0; i < entities.length; i++) {
      var entity = entities[i];
      entity.polygon.outline = false;
      entity.polygon.extrudedHeight = 101;
    }
  });
}

function loaderMapbox(url, viewer) {
  let promise = Cesium.GeoJsonDataSource.load(url, {
    camera: viewer.scene.camera,
    canvas: viewer.scene.canvas,
    clampToGround: true,
  });

  promise.then((dataSource) => {
    viewer.dataSources.add(dataSource);
    let entities = dataSource.entities.values;
    for (var i = 0; i < entities.length; i++) {
      var entity = entities[i];
      entity.polygon.material = Cesium.Color.BLUEVIOLET.withAlpha(0.3);
      entity.polygon.outline = false;
      entity.polygon.extrudedHeight = 100;
    }
  });
}

export { loadShapfile, loaderMapbox };
