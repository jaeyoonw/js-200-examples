function drawChart(width = 200, height = 400) {
  //ES6에서 추가된 기본값을 할당하는 매개변수
  console.log(`${width} * ${height} 차트를 그립니다.`);
}

drawChart(100, 200);
drawChart();

function drawChart2(width = 200, height = width / 2) {
  console.log(`${width} * ${height} 차트를 그립니다.`);
}

drawChart2(300);
drawChart2();
