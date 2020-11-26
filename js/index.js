// 年度预警玫瑰饼图
(function () {
  // 1. 初始化
  var myChart = echarts.init(document.getElementById('piefirst'));
  // 配置
  $.ajax({
    // url: "http://39.100.75.193:8080/warn/ad/history/statistic",
    url: "http://39.100.75.193:8080/warn/ad/history/statistic?type=year",

    
    //data:{DeptId:"E45B4C81-C467-41D6-BD27-97755592AF02"},
    type: "GET",
    dataType: "JSON",
    headers: {
        Authorization: 'eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjYzMGU5NjM1LTA5MTktNDkzOS05OGQ5LWIwMDFjZTg5ODE5NyJ9.wEWGe4whW4ujyixmkaRK4GzZD9ollhpXSfy9lEh0CPlXMhohJzScjDfXQTDj2AJzlQuFqoWE2cgfg8HcB8NT7A'//这里是Token
    }, 
    success:function(res){
      // console.log(res)
      let data = res.data.map(r=>{
        return {
          value:r.warnCount,
          name:r.adnm
        }
      }) 
      var option = {
        // 工具提示
        tooltip: {
          // 触发提示的条件  item放到图形触发  axis放到轴触发
          trigger: 'item',
          // {a} 使用series选项中的name
          // {b} 使用series选项中data中每一项数据的name
          // {c} 使用series选项中data中每一项数据的value
          // {d} 当前数据比上所有数据总和
    
        },
        // 图表数据和类型
        series: [
          {
            // 图表的名称
            name: '预警站点数',
            // 图表类型
            type: 'pie',
            // 图表半径  内圆 10%  外圆 70%
            radius: ['5%', '55%'],
            // 图表中心位置
            center: ['50%', '65%'],
            // 数据表现类型  使用的半径
            roseType: 'radius',
            // 图标数据
            data,
            // [
            //   { value: 12, name: '九原区' },
            //   { value: 11, name: '东河区' },
            //   { value: 8, name: '山东' },
            //   { value: 7, name: '固阳县' },
            //   { value: 6, name: '昆都仑区' },
            //   { value: 5, name: '达茂旗' },
            //   { value: 4, name: '白云' },
            //   { value: 5, name: '土右旗' },
            //   { value: 4, name: '青山' }
            // ],
            // 文字样式
            label: {
              fontSize: 3,
              normal: {
                formatter: '{b}\n{c}',
                textStyle : {
                  fontWeight : 'normal',
                  fontSize : 10
                  }
              },
            },
            // 引导线
            labelLine: {
              // 连接图形
              length: 5,
              // 连接文字
              length2: 10
            }
          }
        ],
        // 设置颜色
        color: ["#d34c57", "#fb8d37", "#01866E", "#2ED0EB", "#399EE2", "#3C6FE6", "#bbd436", "#67b62d", "#64b629", "#469e80", "#48a697"]
      };
      // 2. 使用配置
      myChart.setOption(option)
    }                
})
  
})();
// 当月预警玫瑰饼图
(function () {
  // 1. 初始化
  var myChart = echarts.init(document.getElementById('piesecond'));
  // 配置
  $.ajax({
    // url: "http://39.100.75.193:8080/warn/ad/history/statistic",
    url: "http://39.100.75.193:8080/warn/ad/history/statistic?type=year",

    
    //data:{DeptId:"E45B4C81-C467-41D6-BD27-97755592AF02"},
    type: "GET",
    dataType: "JSON",
    headers: {
        Authorization: 'eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjYzMGU5NjM1LTA5MTktNDkzOS05OGQ5LWIwMDFjZTg5ODE5NyJ9.wEWGe4whW4ujyixmkaRK4GzZD9ollhpXSfy9lEh0CPlXMhohJzScjDfXQTDj2AJzlQuFqoWE2cgfg8HcB8NT7A'//这里是Token
    }, 
    success:function(res){
      let data = res.data.map(r=>{
        return {
          value:r.warnCount,
          name:r.adnm
        }
      }) 
      var option = {
        // 工具提示
        tooltip: {
          // 触发提示的条件  item放到图形触发  axis放到轴触发
          trigger: 'item',
          // {a} 使用series选项中的name
          // {b} 使用series选项中data中每一项数据的name
          // {c} 使用series选项中data中每一项数据的value
          // {d} 当前数据比上所有数据总和
    
        },
        // 图表数据和类型
        series: [
          {
            // 图表的名称
            name: '预警站点数',
            // 图表类型
            type: 'pie',
            // 图表半径  内圆 10%  外圆 70%
            radius: ['5%', '55%'],
            // 图表中心位置
            center: ['50%', '65%'],
            // 数据表现类型  使用的半径
            roseType: 'radius',
            // 图标数据
            data,
            // : [
            //   { value: 12, name: '九原区' },
            //   { value: 11, name: '东河区' },
            //   { value: 8, name: '山东' },
            //   { value: 7, name: '固阳县' },
            //   { value: 6, name: '昆都仑区' },
            //   { value: 5, name: '达茂旗' },
            //   { value: 4, name: '白云' },
            //   { value: 5, name: '土右旗' },
            //   { value: 4, name: '青山' }
            // ],
            // 文字样式
            label: {
              // fontSize: 3,
              normal: {
                formatter: '{b}\n{c}',
                textStyle : {
                  fontWeight : 'normal',
                  fontSize : 10
                  }
              },
            },
            // 引导线
            labelLine: {
              // 连接图形
              length: 5,
              // 连接文字
              length2: 10
            }
          }
        ],
        // 设置颜色
        color: ["#d34c57", "#fb8d37", "#01866E", "#2ED0EB", "#399EE2", "#3C6FE6", "#bbd436", "#67b62d", "#64b629", "#469e80", "#48a697"]
      };
      // 2. 使用配置
      myChart.setOption(option)
    }                
})
  
})();
// 今日旗县预警柱状图
(function () {
  // 1. 初始化
  var myChart = echarts.init(document.getElementById('barfirst'));
  // 配置
  $.ajax({
    url: "http://39.100.75.193:8080/warn/ad/today/statistic",
    // url: "http://39.100.75.193:8080/warn/ad/history/statistic?type=year" 
    //data:{DeptId:"E45B4C81-C467-41D6-BD27-97755592AF02"},
    type: "GET",
    dataType: "JSON",
    headers: {
        Authorization: 'eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjYzMGU5NjM1LTA5MTktNDkzOS05OGQ5LWIwMDFjZTg5ODE5NyJ9.wEWGe4whW4ujyixmkaRK4GzZD9ollhpXSfy9lEh0CPlXMhohJzScjDfXQTDj2AJzlQuFqoWE2cgfg8HcB8NT7A'//这里是Token
    }, 
    success:function(res){
      var dateLists = res.data.map(function (item) {
        return item.adnm;
    });
    var dateimmed = res.data.map(function (item) {
      return item.immediateWarn;
  });
  var dateready = res.data.map(function (item) {
    return item.readyWarn;
});
    var option = {

      color: ['#d83924', '#feb605'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        top: '20%',
        bottom: '3%',
        containLabel: true
      },
      legend: {
        left: '45%',
        top: '2%',
        itemWidth: 20,  // 设置宽度
  
        itemHeight: 10, // 设置高度
        textStyle: { //图例文字的样式
          color: '#fff',
          fontSize: 10
        },
        data: ['立即转移', '准备转移']
      },
      xAxis: [
        {
          type: 'category',
          axisTick: {
            //y轴刻度线
            show: false
          },
          axisLine: {
            //y轴
            show: false
          },
  
          // data: ['九原', '青山', '土左', '达茂', '固阳', '石拐', '东河', '昆都区', '白云'],
          data:dateLists,
  
          axisLabel: {
            interval: 0,
            rotate: 40,
            textStyle: {
              color: '#fff',//坐标值得具体的颜色
              fontSize: '10',
            }
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          splitLine: {
            show: true,
            lineStyle: {
              color: ['#19348e'],
              width: 4,
              type: 'solid'
            }
          },
          axisTick: {
            //y轴刻度线
            show: false
          },
          axisLine: {
            //y轴
            show: false,
  
          },
          axisLabel: {
  
            textStyle: {
              color: '#fff',//坐标值得具体的颜色
              fontSize: '10',
  
            }
          }
        }
      ],
      series: [
        {
          name: '立即转移',
          type: 'bar',
          itemStyle: {
            normal: {
              barBorderRadius: 10,
            }
          },
          barGap: '0%',
          barWidth: 6,
          // data: [1, 2, 1, 2, 2, 1, 2, 2, 1]
          data:dateimmed
        },
  
        {
          name: '准备转移',
          type: 'bar',
          itemStyle: {
            normal: {
              barBorderRadius: 10,
            }
          },
          barWidth: 6,
          // data: [2, 3, 2, 1, 4, 2, 4, 5, 2]
          
          data:dateready
        }
      ]
    };
  
    // 2. 使用配置
    myChart.setOption(option)
    }                
})
  
})();
//今日预警

(function () {
  // 1. 初始化
  var myChart = echarts.init(document.getElementById('piethree'));
  // 配置

var category = [{
  value: 11,
  name: '立即转移'
},
{
  value: 44,
  name: '准备转移'
},
{
  value: 45,
  name: '已响应'
}
]; 
$.ajax({
  url: "http://39.100.75.193:8080/warn/statistic",
  // url: "http://39.100.75.193:8080/warn/ad/history/statistic?type=year" 
  //data:{DeptId:"E45B4C81-C467-41D6-BD27-97755592AF02"},
  type: "GET",
  dataType: "JSON",
  headers: {
      Authorization: 'eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjYzMGU5NjM1LTA5MTktNDkzOS05OGQ5LWIwMDFjZTg5ODE5NyJ9.wEWGe4whW4ujyixmkaRK4GzZD9ollhpXSfy9lEh0CPlXMhohJzScjDfXQTDj2AJzlQuFqoWE2cgfg8HcB8NT7A'//这里是Token
  }, 
  success:function(res){
    // category[0].value = res.data.warnImmediate
    // category[1].value = res.data.warnReady
    // category[2].value = res.data.warnResponsed
    var option = {
      color: ['#d83924','#feb605', '#48b054'],
      legend: {
        orient: 'horizontal',
        left: '45%',
        top: '25%',
        itemWidth: 30,  // 设置宽度
  
        itemHeight: 10, // 设置高度
        textStyle: { //图例文字的样式
          color: '#fff',
          fontSize: 15
        },
        data: ['立即转移', '准备转移', '已响应']
      },
  
      graphic: [
        {
          type: 'group',
  
          left: '30%',
          id: 'data',
  
        }
      ],
      series: [
        {
  
          type: 'pie',
          radius: ['30%', '60%'],
          center: ["25%", "53%"],
          avoidLabelOverlap: false,
          label: {
            show: true,
            position: 'inside',
            formatter: (params) => {
              return `${params.percent}%`
            }
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '16',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data:category
        }
      ]
    };
    // 2. 使用配置
    myChart.setOption(option)
  }                
})
 
})();
//列表无限滚动
(function () {
  $(' .contenthree .marquee').each(function () {
    // 给当前遍历的 容器追加10条row  克隆产生一个和原来一样的jquery对象但是是新的
    var $row = $(this).children().clone()
    $(this).append($row)
  })
  // 2. 写css动画（匀速 15s 无限执行） 效果：容器往上位移50%
})();
//当月预警雷达图
(function () {
  var mychart = echarts.init(document.getElementById('LD-echart'));
  var data = [235, 135, 35, 75, 95, 55, 35, 213,66];
  var indicatorname = ['土右', '东河', '右拐', '白云', '固阳', '昆都仑', '达茂', '青山','九原'];
  var maxdata = [250, 250, 250, 250, 250, 250, 250, 250];

  function contains(arrays, obj) {
    var i = arrays.length;
    while (i--) {
      if (arrays[i] === obj) {
        return i;
      }
    }
    return false;
  }

  var indicator = [];
  for (var i = 0; i < indicatorname.length; i++) {
    indicator.push({
      name: indicatorname[i],
      max: maxdata[i]
    })
  }

  function innerdata(i) {
    var innerdata = [];
    for (let j = 0; j < data.length; j++) {
      innerdata.push(100 - 20 * i)
    }
    return innerdata
  }

  optionData = getData(data)

  function getData(data) {
    var res = {
      series: [{
        type: 'radar',
        symbolSize: 10,
        symbol: "circle",
        areaStyle: {

          opacity: 0.3
        },
        lineStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: .8,
            color: '#ab7704'
          }, {
            offset: 1,
            color: '#ab7704'
          }], false),
          width: 3
        },
        itemStyle: {
          normal: {
            color: '#fff',
            lineStyle: {
              color: 'red',
            },
          },
        },
        label: {
          show: false,
        },
        data: [{
          value: data,
        }],
        z: 100
      },],
    };
    for (let i = 0; i < data.length; i++) {
      res.series.push({
        type: 'radar',
        data: [{
          value: innerdata(i),
        }],
        symbol: 'none',
        lineStyle: {
          width: 0
        },
        itemStyle: {
          color: '#fff'
        },

      });
    }
    return res;
  }
  var option = {
    grid: {
      position: 'center',
    },
    tooltip: {
      formatter: function () {
        var html = '';
        for (var i = 0; i < data.length; i++) {
          html += indicatorname[i] + ' : ' + data[i] + '<br>'
        }
        return html
      }
    },
    radar: {
      indicator: indicator,
      center: ['50%', '50%'], // 位置
      radius: 60, //大小

      splitArea: {

        areaStyle: {
          color: '#ab7704', // 图表背景的颜色

        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          width: 1,
          color: '#d7ae51', // 设置网格的颜色
        },
      },
      axisLine: {
        lineStyle: {
          color: '#e0a30f',
        },
      },
      axisLabel: {
        show: false
      },
      name: {
        textStyle: {
          rich: {
            a: {
              fontSize: '12',
              color: '#fff',

              lineHeight: '-10',

            },
            b: {
              fontSize: '12',
              color: '#fff',

            }
          },
        },

        formatter: function (params, index) {
          var i = contains(indicatorname, params);
          var percent = data[i];
          return '{b|' + params + '}' + '{a|' + percent + '}'
        },
      },
    },
    series: optionData.series
  };
  mychart.setOption(option);

})();
//当日预警雷达图
(function () {
  var mychart = echarts.init(document.getElementById('LD-echarttwo'));
  var data = [235, 135, 35, 75, 95, 55, 35, 213];
  var indicatorname = ['土右', '东河', '右拐', '白云', '固阳', '昆都仑', '达茂', '青山'];
  var maxdata = [250, 150, 50, 100, 100, 100, 50, 250];

  function contains(arrays, obj) {
    var i = arrays.length;
    while (i--) {
      if (arrays[i] === obj) {
        return i;
      }
    }
    return false;
  }

  var indicator = [];
  for (var i = 0; i < indicatorname.length; i++) {
    indicator.push({
      name: indicatorname[i],
      max: maxdata[i]
    })
  }

  function innerdata(i) {
    var innerdata = [];
    for (let j = 0; j < data.length; j++) {
      innerdata.push(100 - 20 * i)
    }
    return innerdata
  }

  optionData = getData(data)

  function getData(data) {
    var res = {
      series: [{
        type: 'radar',
        symbolSize: 10,
        symbol: "circle",
        areaStyle: {

          opacity: 0.3
        },
        lineStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: .8,
            color: '#ab7704'
          }, {
            offset: 1,
            color: '#ab7704'
          }], false),
          width: 3
        },
        itemStyle: {
          normal: {
            color: '#fff',
            lineStyle: {
              color: 'red',
            },
          },
        },
        label: {
          show: false,
        },
        data: [{
          value: data,
        }],
        z: 100
      },],
    };
    for (let i = 0; i < data.length; i++) {
      res.series.push({
        type: 'radar',
        data: [{
          value: innerdata(i),
        }],
        symbol: 'none',
        lineStyle: {
          width: 0
        },
        itemStyle: {
          color: '#fff'
        },

      });
    }
    return res;
  }
  var option = {
    grid: {
      position: 'center',
    },
    tooltip: {
      formatter: function () {
        var html = '';
        for (var i = 0; i < data.length; i++) {
          html += indicatorname[i] + ' : ' + data[i] + '<br>'
        }
        return html
      }
    },
    radar: {
      indicator: indicator,
      center: ['50%', '50%'], // 位置
      radius: 60, //大小

      splitArea: {

        areaStyle: {
          color: '#ab7704', // 图表背景的颜色

        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          width: 1,
          color: '#d7ae51', // 设置网格的颜色
        },
      },
      axisLine: {
        lineStyle: {
          color: '#e0a30f',
        },
      },
      axisLabel: {
        show: false
      },
      name: {
        textStyle: {
          rich: {
            a: {
              fontSize: '12',
              color: '#fff',

              lineHeight: '-10',

            },
            b: {
              fontSize: '12',
              color: '#fff',

            }
          },
        },

        formatter: function (params, index) {
          var i = contains(indicatorname, params);
          var percent = data[i];
          return '{b|' + params + '}' + '{a|' + percent + '}'
        },
      },
    },
    series: optionData.series
  };
  mychart.setOption(option);

})();
//各个站点统计
(function () {
  var mychart = echarts.init(document.getElementById('bar-echart'));
  $.ajax({
    url: "http://39.100.75.193:8080/station/statistic",
    // url: "http://39.100.75.193:8080/warn/ad/history/statistic?type=year",


    //data:{DeptId:"E45B4C81-C467-41D6-BD27-97755592AF02"},
    type: "GET",
    dataType: "JSON",
    headers: {
        Authorization: 'eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjYzMGU5NjM1LTA5MTktNDkzOS05OGQ5LWIwMDFjZTg5ODE5NyJ9.wEWGe4whW4ujyixmkaRK4GzZD9ollhpXSfy9lEh0CPlXMhohJzScjDfXQTDj2AJzlQuFqoWE2cgfg8HcB8NT7A'//这里是Token
    },
    success:function(res){
       if(res.code===200){
           var stationData =[];
           var normalData =[];
           var abnormalData=[];
          //  if(res.data.broadStation == null){
          //   stationData.push(0)
          //  }else{
          //   stationData.push(res.data.broadStation);
          //  }
          //  if(res.data.broadNormal== null){
          //   normalData.push(0)
          //  }else{
          //   stationData.push(res.data.broadNormal);
          //  }
          //  if(res.data.broadAbnormal == null){
          //   abnormalData.push(0)
          //  }else{
          //   abnormalData.push(res.data.broadAbnormal);
          //  }
          //  if(res.data.videoStation == null){
          //   stationData.push(0)
          //  }else{
          //   stationData.push(res.data.videoStation);
          //  }
          //  if(res.data.videoNormal== null){
          //   normalData.push(0)
          //  }else{
          //   stationData.push(res.data.videoNormal);
          //  }
          //  if(res.data.videoAbnormal == null){
          //   abnormalData.push(0)
          //  }else{
          //   abnormalData.push(res.data.videoAbnormal);
          //  }
           stationData.push(res.data.broadStation);
           stationData.push(res.data.rainStation);
           stationData.push(res.data.riverStation);
           stationData.push(res.data.rsvrStation);
           stationData.push(res.data.soilStation);
           stationData.push(res.data.videoStation);
           normalData.push(res.data.broadNormal);
           normalData.push(res.data.rainNormal);
           normalData.push(res.data.riverNormal);
           normalData.push(res.data.rsvrNormal);
           normalData.push(res.data.soilNormal);
           normalData.push(res.data.videoNormal);
           abnormalData.push(res.data.broadAbnormal);
           abnormalData.push(res.data.rainAbnormal);
           abnormalData.push(res.data.riverAbnormal);
           abnormalData.push(res.data.rsvrAbnormal);
           abnormalData.push(res.data.soilAbnormal);
           abnormalData.push(res.data.videoAbnormal);
          //  if(res.data.broadStation=='null'){
          //   res.data.broadStation=='0'
          //  }
          //  else{

          //  }
          // console.log(typeof(res.data.broadStation)==Number?res.data.broadStation:'0')
         $('.num1').html (res.data.broadStation==null?'--':res.data.broadStation)
         $('.num2').html (res.data.rainStation)
         $('.num3').html (res.data.riverStation)
         $('.num4').html (res.data.rsvrStation)
         $('.num5').html (res.data.soilStation)
         $('.num6').html (res.data.videoStation==null?'--':res.data.videoStation)

       }
      //  console.log(stationData)
      //  console.log(normalData)
      //  console.log(abnormalData)
      var option = {

        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "20%", //距离dom间距
          right: "30%",
          top: "20%",
          bottom: "0%"
        },
        legend: {
          data: [
            { name: "正常", icon: "bar" },
            { name: "异常", icon: "bar" },
    
    
          ],
          // 大小 和位置 文字样式
          itemWidth: 20,  // 设置宽度
    
          itemHeight: 10, // 设置高度
          itemGap: 12,
          left: 80,
          textStyle: {
            fontSize: 14,
            color: "#fff",
            fontFamily: "SourceHanSansCN-Regular"
          }
        },
        xAxis: [
          {
            type: "value",
            axisPointer: {
              type: "shadow"
            },
            // 横坐标 分割线等取消显示
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: "category",
            inverse: true,
            axisLabel: {
    
    
              padding: [0, 0, 0, 20],
              textStyle: {
                fontSize: 15,
                color: "#fff",
                fontFamily: "SourceHanSansCN-Regular"
              }
            },
            // 纵坐标数据
            data: [
              "广播站",
              "雨量站",
              "河道站",
              "水库站",
              "墒情站",
              "视频站",
    
            ],
            yAxisIndex: 0,
            // 横坐标 分割线等取消显示
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            }
          },
          {
            type: "category",
    
            // inverse: true,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: true,
              inside: false,
    
              // 位置 上右下左
              padding: [0, -20, 10, 10],
              lineHeight: "10",
              textStyle: {
                fontSize: 20,
                color: "#06c9f0",
                fontFamily: "SourceHanSansCN-Regular"
              }
            },
            // 统计的总量 用纵坐标模拟
    
            // data: stationData
          }
        ],
        series: [
    
          {
            name: "正常",
            label: {
              normal: {
                show: true,//是否显示
                position: 'top',//文字位置
                formatter: '{c}个',//c后面加单位
                textStyle: {
                  fontSize: 10,
                  color: '#47a695'
                },
    
              }
            },
    
            type: "bar",
            // 宽度
            barWidth: "16",
            // 堆叠
            stack: "总量",
            showBackground: false,
            // 全部背景
    
            data: normalData,
            itemStyle: {
              normal: {
                show: true,
    
    
                textStyle: {
                  fontSize: 16
                },
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  1,
                  0,
                  [
                    {
                      offset: 0,
                      color: "#47a695"
                    },
                    {
                      offset: 1,
                      color: "#45b055"
                    }
                  ],
                  false
                )
              }
            }
          },
          {
            name: "异常",
            label: {
              normal: {
                show: true,//是否显示
                position: 'top',//文字位置
                formatter: '{c}个',//c后面加单位
                textStyle: {
                  fontSize: 10,
                  color: '#f9c241'
                },
    
              }
            },
            type: "bar",
            // 宽度
            barWidth: "16",
            // 堆叠
            stack: "总量",
            showBackground: false,
            // 全部背景
    
            data: abnormalData,
            itemStyle: {
              normal: {
                show: false,
                textStyle: {
                  fontSize: 16
                },
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  1,
                  0,
                  [
                    {
                      offset: 0,
                      color: "#f9c241"
                    },
                    {
                      offset: 1,
                      color: "#f9c241"
                    }
                  ],
                  false
                )
              }
            }
          },
    
        ]
      };
      mychart.setOption(option);

    }
})
  

})();
//今日土壤墒情表无限滚动
(function () {
  $(' .content .marquee').each(function () {
    // 给当前遍历的 容器追加10条row  克隆产生一个和原来一样的jquery对象但是是新的
    var $row = $(this).children().clone()
    $(this).append($row)
  })
  // 2. 写css动画（匀速 15s 无限执行） 效果：容器往上位移50%
})();
//小时降雨柱状图
(function () {
  var mychart = echarts.init(document.getElementById('rain-echart'));
  $.ajax({
    url: "http://39.100.75.193:8080/rain/hour/statistic",
    // url: "http://39.100.75.193:8080/warn/ad/history/statistic?type=year",

    
    //data:{DeptId:"E45B4C81-C467-41D6-BD27-97755592AF02"},
    type: "GET",
    dataType: "JSON",
    headers: {
        Authorization: 'eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjYzMGU5NjM1LTA5MTktNDkzOS05OGQ5LWIwMDFjZTg5ODE5NyJ9.wEWGe4whW4ujyixmkaRK4GzZD9ollhpXSfy9lEh0CPlXMhohJzScjDfXQTDj2AJzlQuFqoWE2cgfg8HcB8NT7A'//这里是Token
    }, 
    success:function(res){
        // console.log(res)
        var dateList = res.data.map(function (item) {
          return item.adnm;
      });
      var arr = res.data.map(function(item){
        return item.rainValue;
      })
  // console.log(dateList)
  var option = {

    xAxis: {
      // data: ['九原', '青山', '土左', '达茂', '固阳', '右拐', '东河', '昆都仑', '白云'],
      data:dateList,
      // data:dateList,
      axisLine: {
        lineStyle: {
          color: '#3b4466',
          type: 'dashed'
        }
      },

      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#fff',
        fontSize: 12,
        rotate: 50
      }
    },
    yAxis: [
      {
        // name: "单位:次",
        nameTextStyle: {
          color: '#fff',
          fontSize: 10
        },
        axisLine: {

          show: false //y轴线消失

        },
        axisLabel: {
          color: '#fff',
          fontSize: 12
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#3b4466',
            type: 'dashed'
          }
        },
        min: 0,
        max: 7,
        interval: 1,

      },
      {
        // name: "单位:小时",
        nameTextStyle: {
          color: '#fff',
          fontSize: 12
        },
        axisLine: {
          show: false, //y轴线消失
          lineStyle: {
            color: '#3d5269'
          }
        },
        axisLabel: {
          color: '#04ac76',
          fontSize: 12
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#3b4466',
            type: 'dashed'
          }
        },

        min: 0,
        max: 140,
        interval: 20,

      },],
    series: [{
      type: 'bar',
      barWidth: 15,
      yAxisIndex: 1,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#5ef3ff'
          }, {
            offset: 1,
            color: '#06a4f4'
          }], false)
        }
      },
      label: {
        normal: {
          show: true,
          fontSize: 10,
          fontWeight: 'bold',
          color: '#ffffff',
          position: 'top',
        }
      },
      // data: [20, 60, 40, 20, 60, 40, 60, 88, 40]
      data:arr
    },
    {
      type: 'bar',

      yAxisIndex: 0,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#5ef3ff'
          }, {
            offset: 1,
            color: '#06a4f4'
          }], false)
        }
      },
      barMaxWidth: 0,

    }
    ]
  };
  mychart.setOption(option);
    }                
})
  

})();
//超预警图
// (function () {
//   var mychart = echarts.init(document.getElementById('more-echart'));

//   var category = [{
//     name: "超警戒",
//     value: 4
//   },
//   {
//     name: "超保证",
//     value: 12
//   },

//   ]; // 类别
//   var total = 20; // 数据总数
//   var datas = [];
//   category.forEach(value => {
//     datas.push(value.value);
//   });
//   $.ajax({
//     //url: "http://110.87.98.218:40001/Doctor/List",
//     url: "http://39.100.75.193:8080/station/statistic",

//     //data:{DeptId:"E45B4C81-C467-41D6-BD27-97755592AF02"},
//     type: "GET",
//     dataType: "JSON",
//     headers: {
//       Authorization: 'eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjYzMGU5NjM1LTA5MTktNDkzOS05OGQ5LWIwMDFjZTg5ODE5NyJ9.wEWGe4whW4ujyixmkaRK4GzZD9ollhpXSfy9lEh0CPlXMhohJzScjDfXQTDj2AJzlQuFqoWE2cgfg8HcB8NT7A'//这里是Token
//     },
//     success: function (res) {
//       // console.log(res.data.riverOverPromise)
//       category[1].value = res.data.riverOverPromise
//       category[0].value = res.data.riverOverWarn
//       var option = {
//         // backgroundColor: '#071347',
//         xAxis: {
//           max: total,
//           splitLine: {
//             show: false
//           },
//           axisLine: {
//             show: false
//           },
//           axisLabel: {
//             show: false
//           },
//           axisTick: {
//             show: false
//           },
//         },
//         grid: {
//           left: '35%',
//           top: '0%', // 设置条形图的边距
//           right: '25%',
//           bottom: '0%'
//         },
//         yAxis: [{
//           type: "category",
//           inverse: false,
//           data: category,
//           axisLine: {
//             show: false
//           },
//           axisTick: {
//             show: false
//           },
//           axisLabel: {
//             show: false
//           },


//         }],
//         series: [
//           {
//             // 内
//             type: "bar",
//             barWidth: 28,
//             silent: true,

//             label: {
//               normal: {
//                 formatter: "{b}",
//                 textStyle: {
//                   color: "#df4f1e",
//                   fontSize: 20
//                 },
//                 position: 'left',
//                 distance: 20, // 向右偏移位置
//                 show: true
//               }
//             },
//             data: category,
//             z: 1,
//             animationEasing: "elasticOut"
//           },

//           {
//             // 分隔
//             type: "pictorialBar",
//             itemStyle: {
//               normal: {
//                 color: "#07314a"
//               }
//             },
//             symbolRepeat: "fixed",
//             symbolMargin: 2,
//             symbol: "rect",
//             symbolClip: true,
//             symbolSize: [3, 28],
//             symbolPosition: "start",
//             symbolOffset: [3, -4],
//             symbolBoundingData: this.total,
//             data: [total, total, total, total],
//             z: 2,
//             animationEasing: "elasticOut",


//           },
//           {
//             // label
//             type: "pictorialBar",
//             symbolBoundingData: total,
//             itemStyle: {
//               normal: {
//                 color: "none"
//               }
//             },
//             label: {
//               normal: {
//                 formatter: "{c}",

//                 textStyle: {
//                   color: "#feb605",
//                   fontSize: 18
//                 },
//                 rich: {
//                   f: {
//                     color: "#feb605"
//                   }
//                 },
//                 position: 'right',
//                 distance: 30, // 向右偏移位置
//                 show: true
//               }
//             },
//             data: category,
//             z: 0,

//           },

//           {
//             name: "外框",
//             type: "bar",
//             barGap: "-130%", // 设置外框粗细
//             data: [total, total, total, total],
//             barWidth: 45,
//             itemStyle: {
//               normal: {
//                 barBorderRadius: [5, 5, 5, 5],
//                 color: "transparent", // 填充色
//                 barBorderColor: "#1588D1", // 边框色
//                 barBorderWidth: 3, // 边框宽度
//               }
//             },
//             z: 0
//           },
//           {
//             type: 'scatter',
//             name: '条形',
//             symbol: 'roundRect',
//             symbolSize: [7, 20],
//             symbolOffset: [3, -5],
//             symbolKeepAspect: true,
//             itemStyle: {
//               normal: {
//                 color: "#1588D1"
//               }
//             },
//             data: [total, total, total, total],
//           }

//         ]
//       }

//       mychart.setOption(option);
//     }
//   })



// })();
//超警戒
(function () {
  var mychart = echarts.init(document.getElementById('more-echartone'));

  var category = [{
    name: "超警戒",
    value: 4
  },

  ]; // 类别
  var total = 20; // 数据总数
  var datas = [];
  category.forEach(value => {
    datas.push(value.value);
  });
  $.ajax({
    //url: "http://110.87.98.218:40001/Doctor/List",
    url: "http://39.100.75.193:8080/station/statistic",

    //data:{DeptId:"E45B4C81-C467-41D6-BD27-97755592AF02"},
    type: "GET",
    dataType: "JSON",
    headers: {
      Authorization: 'eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjYzMGU5NjM1LTA5MTktNDkzOS05OGQ5LWIwMDFjZTg5ODE5NyJ9.wEWGe4whW4ujyixmkaRK4GzZD9ollhpXSfy9lEh0CPlXMhohJzScjDfXQTDj2AJzlQuFqoWE2cgfg8HcB8NT7A'//这里是Token
    },
    success: function (res) {
      // console.log(res.data.riverOverPromise)
      // category[1].value = res.data.riverOverPromise
      category[0].value = res.data.riverOverWarn
      var option = {
        // backgroundColor: '#071347',
        xAxis: {
            max: total,
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            },
        },
        grid: {
            left: 90,
            top: 0, // 设置条形图的边距
            right: 50,
            bottom: -10
        },
        yAxis: [{
            type: "category",
            inverse: false,
            data: category,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
    
    
        }],
        series: [
            {
                // 内
                type: "bar",
                barWidth: 24,
                silent: true,
                itemStyle:{
                    normal:{
                        color: new echarts.graphic.LinearGradient(
      0, 0, 1, 0,
      [{
        offset: 0,
        color: '#feb106'
      },
      {
        offset: 0.5,
        color: '#f3624a'
      },
      {
        offset: 1,
        color: '#f3624a'
      }]
    )
                    }
                },
                label: {
                    normal: {
                        formatter: "{b}",
                        textStyle: {
                            color: "#f3624a",
                            fontSize: 18
                        },
                        position: 'left',
                        distance: 20, // 向右偏移位置
                        show: true
                    }
                },
                data: category,
                z: 1,
                animationEasing: "elasticOut"
            },
    
            {
                // 分隔
                type: "pictorialBar",
                itemStyle: {
                    normal: {
                        color: "#07314a"
                    }
                },
                symbolRepeat: "fixed",
                symbolMargin: 2,
                symbol: "rect",
                symbolClip: true,
                symbolSize: [3, 28],
                symbolPosition: "start",
                symbolOffset: [3, -4],
                symbolBoundingData: this.total,
                data: [total, total, total, total],
                z: 2,
                animationEasing: "elasticOut",
    
    
            },
            {
                // label
                type: "pictorialBar",
                symbolBoundingData: total,
                itemStyle: {
                    normal: {
                        color: "none"
                    }
                },
                label: {
                    normal: {
                       formatter: "{c}",
                       
                        textStyle: {
                            color: "#f3624a",
                            fontSize: 18
                        },
                        rich: {
                            f: {
                                color: "#f3624a"
                            }
                        },
                        position: 'right',
                        distance: 30, // 向右偏移位置
                        show: true
                    }
                },
                data: category,
                z: 0,
    
            },
    
            {
                name: "外框",
                type: "bar",
                barGap: "-130%", // 设置外框粗细
                data: [total, total, total, total],
                barWidth: 38,
                itemStyle: {
                    normal: {
                        barBorderRadius: [5, 5, 5, 5],
                        color: "transparent", // 填充色
                        barBorderColor: "#1588D1", // 边框色
                        barBorderWidth: 3, // 边框宽度
                    }
                },
                z: 0
            },
             {
                type: 'scatter',
                name: '条形',
                symbol: 'roundRect',
                symbolSize: [7,20],
                symbolOffset: [3, -5],
                symbolKeepAspect: true,
                itemStyle: {
                    normal: {
                        color: "#1588D1"
                    }
                },
                data: [total, total, total, total],
            }
    
        ]
    }

      mychart.setOption(option);
    }
  })
})();
//超保证
(function () {
  var mychart = echarts.init(document.getElementById('more-echarttwo'));

  var category = [{
    name: "超保证",
    value: 12
  },

  ]; // 类别
  var total = 20; // 数据总数
  var datas = [];
  category.forEach(value => {
    datas.push(value.value);
  });
  $.ajax({
    //url: "http://110.87.98.218:40001/Doctor/List",
    url: "http://39.100.75.193:8080/station/statistic",

    //data:{DeptId:"E45B4C81-C467-41D6-BD27-97755592AF02"},
    type: "GET",
    dataType: "JSON",
    headers: {
      Authorization: 'eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjYzMGU5NjM1LTA5MTktNDkzOS05OGQ5LWIwMDFjZTg5ODE5NyJ9.wEWGe4whW4ujyixmkaRK4GzZD9ollhpXSfy9lEh0CPlXMhohJzScjDfXQTDj2AJzlQuFqoWE2cgfg8HcB8NT7A'//这里是Token
    },
    success: function (res) {
      // console.log(res.data.riverOverPromise)
      category[0].value = res.data.riverOverPromise
      // category[0].value = res.data.riverOverWarn
      var option = {
        // backgroundColor: '#071347',
        xAxis: {
            max: total,
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            },
        },
        grid: {
            left: 90,
            top: 0, // 设置条形图的边距
            right: 50,
            bottom: -10
        },
        yAxis: [{
            type: "category",
            inverse: false,
            data: category,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
    
    
        }],
        series: [
            {
                // 内
                type: "bar",
                barWidth: 24,
                silent: true,
                itemStyle:{
                    normal:{
                        color: new echarts.graphic.LinearGradient(
      0, 0, 1, 0,
      [{
        offset: 0,
        color: '#47ac55'
      },
      {
        offset: 0.5,
        color: '#feb604'
      },
      {
        offset: 1,
        color: '#feb604'
      }]
    )
                    }
                },
                label: {
                    normal: {
                        formatter: "{b}",
                        textStyle: {
                            color: "#feb604",
                            fontSize: 18
                        },
                        position: 'left',
                        distance: 20, // 向右偏移位置
                        show: true
                    }
                },
                data: category,
                z: 1,
                animationEasing: "elasticOut"
            },
    
            {
                // 分隔
                type: "pictorialBar",
                itemStyle: {
                    normal: {
                        color: "#07314a"
                    }
                },
                symbolRepeat: "fixed",
                symbolMargin: 2,
                symbol: "rect",
                symbolClip: true,
                symbolSize: [3, 28],
                symbolPosition: "start",
                symbolOffset: [3, -4],
                symbolBoundingData: this.total,
                data: [total, total, total, total],
                z: 2,
                animationEasing: "elasticOut",
    
    
            },
            {
                // label
                type: "pictorialBar",
                symbolBoundingData: total,
                itemStyle: {
                    normal: {
                        color: "none"
                    }
                },
                label: {
                    normal: {
                       formatter: "{c}",
                       
                        textStyle: {
                            color: "#feb604",
                            fontSize: 18
                        },
                        rich: {
                            f: {
                                color: "#feb604"
                            }
                        },
                        position: 'right',
                        distance: 30, // 向右偏移位置
                        show: true
                    }
                },
                data: category,
                z: 0,
    
            },
    
            {
                name: "外框",
                type: "bar",
                barGap: "-130%", // 设置外框粗细
                data: [total, total, total, total],
                barWidth: 38,
                itemStyle: {
                    normal: {
                        barBorderRadius: [5, 5, 5, 5],
                        color: "transparent", // 填充色
                        barBorderColor: "#1588D1", // 边框色
                        barBorderWidth: 3, // 边框宽度
                    }
                },
                z: 0
            },
             {
                type: 'scatter',
                name: '条形',
                symbol: 'roundRect',
                symbolSize: [7,20],
                symbolOffset: [3, -5],
                symbolKeepAspect: true,
                itemStyle: {
                    normal: {
                        color: "#1588D1"
                    }
                },
                data: [total, total, total, total],
            }
    
        ]
    }

      mychart.setOption(option);
    }
  })
})();
//水球图
(function () {
  var mychart = echarts.init(document.getElementById('piewater'));
  $.ajax({
    //url: "http://110.87.98.218:40001/Doctor/List",
    url: "http://39.100.75.193:8080/station/statistic",

    //data:{DeptId:"E45B4C81-C467-41D6-BD27-97755592AF02"},
    type: "GET",
    dataType: "JSON",
    headers: {
      Authorization: 'eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjYzMGU5NjM1LTA5MTktNDkzOS05OGQ5LWIwMDFjZTg5ODE5NyJ9.wEWGe4whW4ujyixmkaRK4GzZD9ollhpXSfy9lEh0CPlXMhohJzScjDfXQTDj2AJzlQuFqoWE2cgfg8HcB8NT7A'//这里是Token
    },
    success: function (res) {
      // console.log(res.data.rsvrOverFlood)

      var data = '1'
      var option = {
        series: [{
          type: 'liquidFill',
          name: 'Liquid Fill',
          radius: '90%',
          data: [{
            name: '超汛限',
            value: res.data.rsvrOverFlood
          }, 0.5, 0.4, 0.3],
          label: {
            normal: {
              formatter: '\n{c}\n {b}',
              textStyle: {
                fontSize: 18
              }
            }
          }
        }]
      };
      mychart.setOption(option);
    }
  })

})();
//年度预警
(function () {
  $.ajax({
    url: "http://39.100.75.193:8080/warn/statistic",
    // url: "http://39.100.75.193:8080/warn/ad/history/statistic?type=year",


    //data:{DeptId:"E45B4C81-C467-41D6-BD27-97755592AF02"},
    type: "GET",
    dataType: "JSON",
    headers: {
      Authorization: 'eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjYzMGU5NjM1LTA5MTktNDkzOS05OGQ5LWIwMDFjZTg5ODE5NyJ9.wEWGe4whW4ujyixmkaRK4GzZD9ollhpXSfy9lEh0CPlXMhohJzScjDfXQTDj2AJzlQuFqoWE2cgfg8HcB8NT7A'//这里是Token
    },
    success: function (res) {
      // console.log(res)
      // var aaa = abs(res.data.warnCountThisMonth - res.data.warnCountLastMonth)
      // var bbb = abs(aaa)
      $('.a-num').html(res.data.warnCountLastYear)
      $('.b-num').html(res.data.warnCountThisYear)
      $('.c-num').html(res.data.warnCountLastMonth)
      $('.d-num').html(res.data.warnCountThisMonth)
      // $('.c-num').html('9')
      // $('.d-num').html('6')
      $('.e-num').html(res.data.warnCountLastYearThisMonth)
      $('.down-drop').html(Math.round((res.data.warnCountThisYear - res.data.warnCountLastYear) /
        res.data.warnCountThisYear * 10000) / 100.00 + "%")
        var aaa = Math.round((res.data.warnCountThisMonth - res.data.warnCountLastMonth) /
        res.data.warnCountLastMonth * 10000) / 100.00
        var bbb = Math.abs(aaa)
      $('.circle-drop').html(bbb + "%"
        == 'NaN%' ? '0%' : bbb + "%")
      $('.drop-d').html(Math.round((res.data.warnCountLastYearThisMonth - res.data.warnCountThisMonth) /
        res.data.warnCountLastYearThisMonth * 10000) / 100.00 + "%")
        if(res.data.warnCountThisYear - res.data.warnCountLastYear<0){
          $('.cdrop').html('环比下降')
        }
        
    }
  })
})();
