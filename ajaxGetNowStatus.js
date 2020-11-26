/**
 * 请求获取当前的报警的状态在地图中显示
 */
// import CircleRipple from "./lib/circle_ripple";
// import Css3Renderer from "./lib/load_div";

function ajaxGetNowWaringStatus() {
    $.ajax({
        url: "http://39.100.75.193:8080/warn/map",
        type: "GET",
        dataType: "JSON",
        headers: {
            Authorization: 'eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjYzMGU5NjM1LTA5MTktNDkzOS05OGQ5LWIwMDFjZTg5ODE5NyJ9.wEWGe4whW4ujyixmkaRK4GzZD9ollhpXSfy9lEh0CPlXMhohJzScjDfXQTDj2AJzlQuFqoWE2cgfg8HcB8NT7A'
        },
        success:function(res){
            if(res.code==="200"){
                if(res.data.length>0){
                    var imgUrl1,imgUrl2,infos,jd,wd,id1,id2;
                    console.log("q123");
                    console.log(res.data);
                    for(var i=0;i<res.data.length;i++){
                         if(res.data[i].warnGradeName==="准备转移"){
                             imgUrl1="./assets/img/dot_42_blue.png";
                             imgUrl2="./assets/img/dot_600_blue.png";
                             infos="<p>准备转移</p><p>"+res.data[i].stnm+"</p><p>水位"+res.data[i].z+"M</p>";
                             jd=res.data[i].lgtd;
                             wd=res.data[i].lttd;
                             id1='GUID'+i+1;
                             id2='GUID'+i+2;
                             addWaringInfoInMap(jd,wd,imgUrl1,imgUrl2,id1,id2,infos);
                         }else if(data[i].warnGradeName==="立即转移"){
                             imgUrl1="./assets/img/dot_42_red.png";
                             imgUrl2="./assets/img/dot_600_red.png";
                             infos="<p>立即转移</p><p>"+res.data[i].stnm+"</p><p>水位"+res.data[i].z+"M</p>";
                             jd=res.data[i].lgtd;
                             wd=res.data[i].lttd;
                             id1='GUID'+i+1;
                             id2='GUID'+i+2;
                             addWaringInfoInMap(jd,wd,imgUrl1,imgUrl2,id1,id2,infos);

                         }else if(data[i].warnGradeName==="已响应"){
                             imgUrl1="./assets/img/dot_42_green.png";
                             imgUrl2="./assets/img/dot_600_green.png";
                             infos="<p>已响应</p><p>"+res.data[i].stnm+"</p><p>水位"+res.data[i].z+"M</p>";
                             jd=res.data[i].lgtd;
                             wd=res.data[i].lttd;
                             id1='GUID'+i+1;
                             id2='GUID'+i+2;
                             addWaringInfoInMap(jd,wd,imgUrl1,imgUrl2,id1,id2,infos);

                         }
                    }
                }
            }
        },
        err:function (re) {}
    })
}


function addWaringInfoInMap(jd,wd,imgUrl1,imgUrl2,id1,id2,infos) {
    let cir = new CircleRipple(this.viewer);
    cir.addDoubleCircleRipple({
        id: [id1,id2],
        lon: jd,
        lat:wd,
        height: 101,
        maxR: 9500,
        minR: 0, //最好为0
        deviationR: 50, //差值 差值也大 速度越快
        eachInterval: 1000, //两个圈的时间间隔
        imageUrl1:imgUrl1,
        imageUrl2:imgUrl2
    });
    let css3Renderer = new Css3Renderer(
        [
            {
                id: "box1",
                position: [jd,wd,0],
                element: `<div class="box" id="box1">"+infos+"</div>`,
                offset: [10, -60],
            },
        ],
        true,
        this.viewer
    );
    css3Renderer.init();
}


class CircleRipple {
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


class Css3Renderer {
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
