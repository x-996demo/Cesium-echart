/**
 * 请求获取当前的报警的状态在地图中显示
 */
// import CircleRipple from "./lib/circle_ripple";
// import Css3Renderer from "./lib/load_div";

export default function getAlarmState(access_callback_drawing) {
  function uuid() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";
    var uuid = s.join("");
    return uuid;
  }

  $.ajax({
    url: "http://39.100.75.193:8080/warn/map",
    type: "GET",
    dataType: "JSON",
    headers: {
      Authorization:
        "eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjYzMGU5NjM1LTA5MTktNDkzOS05OGQ5LWIwMDFjZTg5ODE5NyJ9.wEWGe4whW4ujyixmkaRK4GzZD9ollhpXSfy9lEh0CPlXMhohJzScjDfXQTDj2AJzlQuFqoWE2cgfg8HcB8NT7A",
    },
    success: function (res) {
      if (res.code == "200") {
        if (res.data.length > 0) {
          var imgUrl1, imgUrl2, infos, jd, wd, id1, id2;
          console.log("q123");
          console.log(res.data);
          for (var i = 0; i < res.data.length; i++) {
            if (res.data[i].warnGradeName === "准备转移") {
              imgUrl1 = "./assets/img/dot_600_orange.png";
              imgUrl2 = "./assets/img/dot_600_orange.png";
              infos =
                "<p style='color:#ffb606;font-size:18px;margin-top:5px'>准备转移</p><p style='color:#ffb606;margin-top:7px;font-size:16px'>" +
                res.data[i].stnm +
                "</p><p style='color:#ffb606;font-size:16px'>水位" +
                res.data[i].z +
                "M</p>";
              jd = res.data[i].lgtd;
              wd = res.data[i].lttd;
              id1 = uuid();
              id2 = uuid();
              access_callback_drawing(
                jd,
                wd,
                imgUrl1,
                imgUrl2,
                id1,
                id2,
                infos
              );
            } else if (res.data[i].warnGradeName === "立即转移") {
              imgUrl1 = "./assets/img/dot_600_red.png";
              imgUrl2 = "./assets/img/dot_600_red.png";
              infos =
                "<p style='color:#c63f50;font-size:18px;margin-top:5px'>立即转移</p><p style='color:#c63f50;margin-top:7px;font-size:16px'>" +
                res.data[i].stnm +
                "</p><p style='color:#c63f50;font-size:16px'>水位" +
                res.data[i].z +
                "M</p>";
              jd = res.data[i].lgtd;
              wd = res.data[i].lttd;
              id1 = uuid();
              id2 = uuid();
              access_callback_drawing(
                jd,
                wd,
                imgUrl1,
                imgUrl2,
                id1,
                id2,
                infos
              );
            } else if (res.data[i].warnGradeName === "已响应") {
              imgUrl1 = "./assets/img/dot_600_green.png";
              imgUrl2 = "./assets/img/dot_600_green.png";
              infos =
                "<p style='color:#03e278;font-size:18px;margin-top:5px'>已响应</p><p style='color:#03e278;margin-top:7px;font-size:16px'>" +
                res.data[i].stnm +
                "</p><p style='color:#03e278;font-size:16px'>水位" +
                res.data[i].z +
                "M</p>";
              jd = res.data[i].lgtd;
              wd = res.data[i].lttd;
              id1 = uuid();
              id2 = uuid();
              access_callback_drawing(
                jd,
                wd,
                imgUrl1,
                imgUrl2,
                id1,
                id2,
                infos
              );
            }
          }
        }
      }
    },
    err: function (re) {
      console.log(re);
    },
  });
}

function addWaringInfoInMap(jd, wd, imgUrl1, imgUrl2, id1, id2, infos) {
  let cir = new CircleRipple(this.viewer);
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
  let css3Renderer = new Css3Renderer(
    [
      {
        id: "box1",
        position: [jd, wd, 0],
        element: `<div class="box" id="box1">"+infos+"</div>`,
        offset: [10, -60],
      },
    ],
    true,
    this.viewer
  );
  css3Renderer.init();
}
