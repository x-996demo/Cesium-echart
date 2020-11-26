import { viewerOption, GeoJsonAssets } from "./lib/config.js";
import { setView } from "./lib/camera.js";
import Css3Renderer from "./lib/load_div.js";
import { loadShapfile, loaderMapbox } from "./lib/loadGeojson.js";
import CircleRipple from "./lib/circle_ripple.js";
import getAlarmState from "./lib/network.js";

class index {
  //HTMLElement 承载cesium的div
  constructor(HTMLElement) {
    this.$el = HTMLElement;
    this.viewer = null;
  }

  init() {
    if (!this.viewer) {
      //加载cesium
      this.viewer = new Cesium.Viewer(this.$el, viewerOption);

      //加载shapfile数据
      // setView(this.viewer, 110.840405, 40.158168, 680000, -80); //相机初始角度
      setView(this.viewer, 125.32, 38.23, 680000, -80); //相机初始角度
      loadShapfile(GeoJsonAssets.包头市_高速, this.viewer);
      loadShapfile(GeoJsonAssets.包头市_国道, this.viewer);
      loadShapfile(GeoJsonAssets.包头市_省道, this.viewer);
      loadShapfile(GeoJsonAssets.包头市_市界, this.viewer);
      loadShapfile(GeoJsonAssets.包头市_县界, this.viewer);
      loadShapfile(GeoJsonAssets.包头市_水系, this.viewer);
      loaderMapbox(GeoJsonAssets.包头市_乡镇边界, this.viewer);

      let cir = new CircleRipple(this.viewer);
      let css3Renderer = new Css3Renderer([], true, this.viewer);
      css3Renderer.init();

      getAlarmState((jd, wd, imgUrl1, imgUrl2, id1, id2, infos) => {
        cir.addDoubleCircleRipple({
          id: [id1, id2],
          lon: jd,
          lat: wd,
          height: 101,
          maxR: 9500,
          minR: 0, //最好为0
          deviationR: 50, //差值 差值也大 速度越快
          eachInterval: 1000, //两个圈的时间间隔
          imageUrl1: imgUrl1,
          imageUrl2: imgUrl2,
        });

        css3Renderer.append({
          id: "boxxxx2",
          position: [jd, wd, 101],
          element: `<div class="boxxxxx">${infos}</div>`,
          offset: [-50, -100],
        });
      });

      //删除闪烁及面板的方法--记得去掉setTimeout 这里只为测试用
      // setTimeout(() => {
      //   cir.removeDoubleCircleRipple(["GUID3", "GUID4"]);
      //   css3Renderer.remove("boxxxx2");
      // }, 1200);
    }
  }
}

export { index };
