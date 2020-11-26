$.ajax({
    url: "http://39.100.75.193:8080/station/star",
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
            <div class="riverlistnoe">
                <div class="listname">${item.stnm}</div>
                <div class="listnum">
                    <div class="water">
                        <span>水位</span>
                        <span>${item.z}</span>
                        <span>m</span>
                    </div>
                    <div class="flow">
                        <span>流量</span>
                        <span>${item.q}</span>
                        <span>m³/s</span>
                    </div>
                </div>
            </div>
            `
          }
          $('.rivertotal').html(str)

    }                
})