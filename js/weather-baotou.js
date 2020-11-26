//包头关于天气的处理
(function(){
    $.ajax({
        // url: "http://39.100.75.193:8080/rain/station/hour/statistic?count=20&etm=2020-11-22&stm=2020-08-01",
        url: "http://wthrcdn.etouch.cn/weather_mini?city=包头市",
        //data:{DeptId:"E45B4C81-C467-41D6-BD27-97755592AF02"},
        type: "GET",
        dataType: "JSON",
        // headers: {
        //     Authorization: 'eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjYzMGU5NjM1LTA5MTktNDkzOS05OGQ5LWIwMDFjZTg5ODE5NyJ9.wEWGe4whW4ujyixmkaRK4GzZD9ollhpXSfy9lEh0CPlXMhohJzScjDfXQTDj2AJzlQuFqoWE2cgfg8HcB8NT7A'//这里是Token
        // }, 
        success: function (res) {
            // console.log(res)
            console.log(res.data.forecast)
            var a = res.data.forecast[0]
            console.log(a.date)
            $('.weatherone').html(a.type)
            $('.du').html(a.low.substring(3,7)+'/'+a.high.substring(3,7))
            $('.wind').html(a.fengxiang)
            var type = a.type;
            // var type = '霾'
            console.log(type)
            switch (type) {
                case '晴':
                    type = '晴'
                    break;
                case '雾': case '霾':
                    type = '霾'
                    break;
                case '沙尘暴': case '浮尘': case '扬沙': case '强沙尘暴':
                    type = '尘'
                    break;
                case '多云':
                    type = '多云'
                    break;
                case '阴':
                    type = '阴'
                    break; 
                case '雨夹雪': case '阵雪': case '小雪': case '中雪': case '大雪': case '暴雪': case '小到中雪': case '中到大雪': case '大到暴雪':
                    type = '雪'
                    break;
                case '阵雨': case '雷阵雨': case '雷阵雨伴有冰雹': case '小雨': case '中雨': case '大雨': case '暴雨': case '大暴雨': case '特大暴雨': case '冻雨': case '小到中雨': case '中到大雨': case '大到暴雨': case '暴雨到特大暴雨': case '暴雨到大暴雨':
                    type = '雨'
                    break;
            }
            $('.box1 img').attr('src', 'images/' + type + '.png')
            // $('.weatherone').html(a.high.substring(2,7))
            // console.log(a.high.substring(2,7))
            // console.log(a.low.substring(3,7)+'/'+a.high.substring(3,7))//a.low.substring(3,7)
            // console.log(a.fengxiang)
        }
    })             
    
})();