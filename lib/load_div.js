export default class Css3Renderer {
  constructor(elements, isBackHide, viewer) {
    this.scratch = new Cesium.Cartesian2();
    this.scene = viewer.scene;
    this.camera = viewer.camera;
    this.container = null;
    this.elements = elements;
    this.isBackHide = isBackHide;
  }

  init() {
    let { scratch, scene, camera } = this;
    const container = document.createElement("div");
    this.container = document.body.appendChild(container);
    this.elements.forEach((e) => {
      container.insertAdjacentHTML("beforeend", e.element);
    });
    scene.preRender.addEventListener(() => {
      for (let i = 0; i < this.elements.length; i++) {
        const p = Cesium.Cartesian3.fromDegrees(
          this.elements[i].position[0],
          this.elements[i].position[1],
          this.elements[i].position[2] || 0
        );
        const canvasPosition = scene.cartesianToCanvasCoordinates(p, scratch);
        if (Cesium.defined(canvasPosition)) {
          container.children[i].style.left =
            parseFloat(canvasPosition.x) +
            parseFloat(this.elements[i].offset[0]) +
            "px";
          container.children[i].style.top =
            parseFloat(canvasPosition.y) +
            parseFloat(this.elements[i].offset[1]) +
            "px";
          if (this.isBackHide) {
            let j = camera.position,
              n = scene.globe.ellipsoid.cartesianToCartographic(j).height;
            if (
              !((n += 1 * scene.globe.ellipsoid.maximumRadius),
              Cesium.Cartesian3.distance(j, p) > n)
            ) {
              container.children[i].style.display = "block";
            } else {
              container.children[i].style.display = "none";
            }
          }
        }
      }
    });
  }

  remove(id) {
    this.elements = this.elements.filter((e) => e.id !== id);
    this.container.removeChild(document.getElementById(id));
  }

  append(object) {
    this.elements.push(object);
    this.container.insertAdjacentHTML("beforeend", object.element);
  }
}
