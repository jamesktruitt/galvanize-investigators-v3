var ctx = document.getElementById("myChart");

Chart.scaleService.updateScaleDefaults('linear', {
  ticks: {
    min: 0
  }
});

var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["2014", "2015", "2016"],
    datasets: [{
      label: '# of Students',
      data: [73, 199, 395],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1
    }]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: '# of Students'
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Year'
        }
      }]
    }
  }
});