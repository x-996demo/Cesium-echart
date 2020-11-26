export default class CircleRipple {
  constructor(viewer) {
    this.viewer = viewer;
  }

  //一次删除一组闪烁
  removeDoubleCircleRipple(id_array) {
    if (id_array && id_array.length > 0) {
      let ets = this.viewer.entities.values;
      for (let index = 0; index < ets.length; index++) {
        let element = ets[index];
        if (element._id == id_array[0] || element._id == id_array[1]) {
          this.viewer.entities.remove(element);
        }
      }
    }
  }

  addDoubleCircleRipple(data) {
    let r1 = data.minR,
      r2 = data.minR;
    function changeR1() {
      r1 = r1 + data.deviationR;
      if (r1 >= data.maxR) {
        r1 = data.minR;
      }
      return r1;
    }

    function changeR2() {
      r2 = r2 + data.deviationR;
      if (r2 >= data.maxR) {
        r2 = data.minR;
      }
      return r2;
    }

    this.viewer.entities.add({
      name: "",
      id: data.id[0],
      position: Cesium.Cartesian3.fromDegrees(data.lon, data.lat, data.height),
      ellipse: {
        semiMinorAxis: new Cesium.CallbackProperty(changeR1, false),
        semiMajorAxis: new Cesium.CallbackProperty(changeR1, false),
        height: data.height,
        material: new Cesium.ImageMaterialProperty({
          image: data.imageUrl1,
          repeat: new Cesium.Cartesian2(1.0, 1.0),
          transparent: true,
          color: new Cesium.CallbackProperty(function () {
            return Cesium.Color.WHITE.withAlpha(1 - r1 / data.maxR);
          }, false),
        }),
      },
    });

    //只用于延时加载这个entite,以助于形成闪烁的间隔
    setTimeout(() => {
      this.viewer.entities.add({
        name: "",
        id: data.id[1],
        position: Cesium.Cartesian3.fromDegrees(
          data.lon,
          data.lat,
          data.height
        ),
        ellipse: {
          semiMinorAxis: new Cesium.CallbackProperty(changeR2, false),
          semiMajorAxis: new Cesium.CallbackProperty(changeR2, false),
          height: data.height,
          material: new Cesium.ImageMaterialProperty({
            image: data.imageUrl2,
            repeat: new Cesium.Cartesian2(1.0, 1.0),
            transparent: true,
            color: new Cesium.CallbackProperty(function () {
              return Cesium.Color.WHITE.withAlpha(1 - r1 / data.maxR);
            }, false),
          }),
        },
      });
    }, data.eachInterval);
  }
}
