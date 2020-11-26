//天地图key
let TIANDITUKEY = "50c9e7345ebd95e8de8226f79716b86f";
let wgs84ImgTitleUrl = `http://t0.tianditu.gov.cn/img_w/wmts?tk=${TIANDITUKEY}`;
let wgs84ImgLabelUrl = `http://t0.tianditu.gov.cn/cia_w/wmts?tk=${TIANDITUKEY}`;

//资源文件url
let GeoJsonAssets = {
  包头市_高速: "../assets/geojson/包头市_高速.json",
  包头市_国道: "../assets/geojson/包头市_国道.json",
  包头市_省道: "../assets/geojson/包头市_省道.json",
  包头市_市界: "../assets/geojson/包头市_市界.json",
  包头市_县界: "../assets/geojson/包头市_县界.json",
  包头市_水系: "../assets/geojson/包头市_水系.json",
  包头市_乡镇边界: "../assets/geojson/包头市_乡镇边界.json",
};

let imageryProvider = new Cesium.WebMapTileServiceImageryProvider({
  url: wgs84ImgTitleUrl,
  layer: "img",
  style: "default",
  tileMatrixSetID: "w",
  format: "tiles",
  maximumLevel: 18,
});

let layerLabel = new Cesium.WebMapTileServiceImageryProvider({
  url: wgs84ImgLabelUrl,
  layer: "cia",
  style: "default",
  tileMatrixSetID: "w",
  format: "tiles",
  maximumLevel: 18,
});

const viewerOption = {
  imageryProvider: imageryProvider,
  geocoder: false,
  homeButton: false,
  timeline: false,
  navigationHelpButton: false,
  fullscreenButton: false,
  scene3DOnly: false,
  baseLayerPicker: false,
  shouldAnimate: false,
  selectionIndicator: false,
  sceneModePicker: false,
  infoBox: false,
  animation: false,
};

export { viewerOption, layerLabel, GeoJsonAssets };
