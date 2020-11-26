
$.ajax({
  url: "http://39.100.75.193:8080/warn/record",
  // url: "http://39.100.75.193:8080/warn/ad/history/statistic?type=year",

  //data:{DeptId:"E45B4C81-C467-41D6-BD27-97755592AF02"},
  type: "GET",
  dataType: "JSON",
  headers: {
    Authorization: 'eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjYzMGU5NjM1LTA5MTktNDkzOS05OGQ5LWIwMDFjZTg5ODE5NyJ9.wEWGe4whW4ujyixmkaRK4GzZD9ollhpXSfy9lEh0CPlXMhohJzScjDfXQTDj2AJzlQuFqoWE2cgfg8HcB8NT7A'//这里是Token
  },
  success: function (res) {
    // var htmlStr = template('tmp', res)
    let str = '';
    for (let item of res.data) {
      // console.log(item)
      // console.log(item.stWarnDesc.split('，'))
      let itemstr = item.stWarnDesc.split('，')
      str += `
      <li class="row">
        <span ${itemstr[4] == '引发立即转移预警。' ? '' : ''}>${item.adnm}</span>-
        【<span ${itemstr[4] == '引发立即转移预警。' ? 'class="red"' : 'class="warn"'}>${itemstr[0]}</span>】
        雨量站截止
        【<span ${itemstr[4] == '引发立即转移预警。' ? 'class="red"' : 'class="warn"'}>${itemstr[1]}</span>】
        累计<span ${itemstr[4] == '引发立即转移预警。' ? 'class="red"' : 'class="warn"'}>${itemstr[2]}</span>
        【<span ${itemstr[4] == '引发立即转移预警。' ? 'class="red"' : 'class="warn"'}>${itemstr[3]}</span>】
        预警指标(<span ${itemstr[4] == '引发立即转移预警。' ? 'class="red"' : 'class="warn"'}>${itemstr[4]}</span>)
      </li>
      `
    }

    $('.contenthree .marquee').html(str)
  }
})

