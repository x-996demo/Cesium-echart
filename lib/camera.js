function setView(viewer, lon, lat, height, pitch) {
  viewer.camera.setView({
    destination: Cesium.Cartesian3.fromDegrees(lon, lat, height),
    orientation: {
      heading: Cesium.Math.toRadians(0.0),
      pitch: Cesium.Math.toRadians(pitch), // 倾斜角度
      roll: 0
    }
  });
}

function flyTo(viewer, lon, lat, height) {
  viewer.scene.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(lon, lat, height)
  });
}

function flyToBound(viewer, boundingSphere, options) {
  viewer.camera.flyToBoundingSphere(boundingSphere, options);
}

export { setView, flyTo, flyToBound };
