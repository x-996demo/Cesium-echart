(function(){
    $.ajax({
        url: "http://39.100.75.193:8080/soil",
        // url: "http://39.100.75.193:8080/warn/ad/history/statistic?type=year",
    
        
        //data:{DeptId:"E45B4C81-C467-41D6-BD27-97755592AF02"},
        type: "GET",
        dataType: "JSON",
        headers: {
            Authorization: 'eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjYzMGU5NjM1LTA5MTktNDkzOS05OGQ5LWIwMDFjZTg5ODE5NyJ9.wEWGe4whW4ujyixmkaRK4GzZD9ollhpXSfy9lEh0CPlXMhohJzScjDfXQTDj2AJzlQuFqoWE2cgfg8HcB8NT7A'//这里是Token
        }, 
        success:function(res){
            // console.log(res)
            let str = '';
            for (let item of res.data) {
              str += `
              <div class="row">
                        <span class="col">${item.adnm}</span>
                        <span class="col">${item.stnm}</span>
                        <span class="col">${item.tm.substring(10,16)}</span>
                        <span class="col">${item.ten}</span>
                        <span class="col">${item.twenty}</span>
                        <span class="col">${item.forty}</span>
                    </div>
              `
            }
        
            $('.contenteight .marquee').html(str)
    
        }                
    })
})();
//今日预警数据显示
(function(){
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
            $('.warnnow').html(res.data.warnNow)
            $('.addimm').html(res.data.warnImmediate)
            $('.addready').html(res.data.warnReady)
            $('.addresponse').html(res.data.warnResponsed)
            // $('.addimm').html('44')
            // $('.addready').html('55')
            // $('.addresponse').html(res.data.warnResponsed)

        }                
    })
})();
//日雨量统计
(function(){
    $.ajax({
        url: "http://39.100.75.193:8080/rain/station/hour/statistic?count=20&etm=2020-11-22&stm=2020-08-01",
        // url: "http://39.100.75.193:8080/warn/ad/history/statistic?type=year" 
        //data:{DeptId:"E45B4C81-C467-41D6-BD27-97755592AF02"},
        type: "GET",
        dataType: "JSON",
        headers: {
            Authorization: 'eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjYzMGU5NjM1LTA5MTktNDkzOS05OGQ5LWIwMDFjZTg5ODE5NyJ9.wEWGe4whW4ujyixmkaRK4GzZD9ollhpXSfy9lEh0CPlXMhohJzScjDfXQTDj2AJzlQuFqoWE2cgfg8HcB8NT7A'//这里是Token
        }, 
        success:function(res){
            // console.log(res)
            let str = '';
            for (let item of res.data) {
              str += `
              <div class="row">
              <span class="col">${item.adnm==null?'--':item.adnm}</span>
              <span class="col">${item.stnm==null?'--':item.stnm}</span>
              <span class="col">${item.rainMaxValue}</span>
              <span class="col">${item.rainMaxTm.substring(10,13)+'时'}</span>
              <span class="col">${item.rainSumValue==null?'--':item.rainSumValue}</span>

          </div>
              `
            }
        
            $('.contenttten .marquee').html(str)
           

        }                
    })
})();