$(document).ready(function () {
/*도메인 차트*/
    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['', ''],
        ['1',     10],
        ['2',      30],
        ['3',  50],
        ['4', 5],
        ['5',    5]
      ]);

      var options = {
        title: '',
        pieHole: 0.5,
        chartArea: {
        /* 차트크기 */
        width: 200,
        height: 200,
      },
      /* 전체크기 */
      width: 230,
      height: 230,

      /* 차트에 레이블 표시 (percentage, value or label)*/
      pieSliceText: 'label',

      /* 꼬리표 제거 */
      legend: 'none' 
    };
      
      var chart = new google.visualization.PieChart(document.getElementById('circle_graf'));
      chart.draw(data, options);
    }

});


$(document).ready(function () {
    /*서비스 차트*/
    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['', ''],
        ['1',     20],
        ['2',      40],
        ['3',  10],
        ['4', 14],
        ['5',   16]
      ]);

      var options = {
        title: '',
        pieHole: 0.5,
        chartArea: {
        /* 차트크기 */
        width: 200,
        height: 200,
      },
      /* 전체크기 */
      width: 230,
      height: 230,

      /* 차트에 레이블 표시 (percentage, value or label)*/
      pieSliceText: 'label',

      /* 꼬리표 제거 */
      legend: 'none' 
    };
      
      var chart = new google.visualization.PieChart(document.getElementById('circle_graf2'));
      chart.draw(data, options);
    }
});



$(document).ready(function () {
    /*핵심키워드 차트*/
    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['', ''],
        ['1',     10],
        ['2',      10],
        ['3',  10],
        ['4', 35],
        ['5',   35]
      ]);

      var options = {
        title: '',
        pieHole: 0.5,
        chartArea: {
        /* 차트크기 */
        width: 200,
        height: 200,
      },
      /* 전체크기 */
      width: 230,
      height: 230,

      /* 차트에 레이블 표시 (percentage, value or label)*/
      pieSliceText: 'label',

      /* 꼬리표 제거 */
      legend: 'none' 
    };
      
      var chart = new google.visualization.PieChart(document.getElementById('circle_graf3'));
      chart.draw(data, options);
    }
});




$(document).ready(function () {
  /*툴킷 차트*/
  google.charts.load("current", {packages:["corechart"]});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['', ''],
      ['',     27], //파란색
      ['',      15], //빨간색
      ['',  11], //주황색
      ['', 25], //초록색
      ['',   25] //보라색
    ]);

    var options = {
      title: '',
      pieHole: 0.5,
      chartArea: {
      /* 차트크기 */
      width: 230,
      height: 230,
    },
    /* 전체크기 */
    width: 260,
    height: 260,
    fontSize: 8,

    /* 차트에 레이블 표시 (percentage, value or label)*/
    pieSliceText: 'label',

    /* 꼬리표 제거 */
    legend: 'none' 
  };
    
    var chart = new google.visualization.PieChart(document.getElementById('circle_graf_tk'));
    chart.draw(data, options);
  }
});