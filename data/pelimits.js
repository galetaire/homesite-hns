//makeChart, calling the data and variables from the .csv file
function makeChart(pelimits) {
  var rangeStart = 0
  var rangeEnd = new Date().getFullYear() - 154
  var rangeLabels = pelimits.map(function(d) {return d.Year}).slice(rangeStart, rangeEnd);
  var rangeOne = pelimits.map(function(d) {return +d.PE_Value}).slice(rangeStart, rangeEnd);
  var rangeTwo = pelimits.map(function(d) {return +d.Fair_PE}).slice(rangeStart, rangeEnd);
  var rangeThree = pelimits.map(function(d) {return +d.Floor_PE}).slice(rangeStart, rangeEnd);


  Chart.defaults.font.size = 12;
  var chart = new Chart('pelimits', {
    options: {
        scales: {
          x: {
            ticks: {
              maxRotation: 90,
              minRotation: 90,
            }
            }
        }
    },
    data: {
      labels: rangeLabels,
      datasets: [
        {
          label: "Shiller PE ràtio de l'S&P 500",
          type: 'line',
          data: rangeOne,
          backgroundColor: 'rgba(220,20,60, 0.2)',
          borderColor: 'rgba(220,20,60, 1)',
          borderWidth: 1,
          borderDash: [3,3],
          pointStyle: 'circle',
          pointRadius: 2,
          fill: false,
        },
        {
          label: 'Valor just',
          type: 'line',
          data: rangeTwo,
          backgroundColor: 'rgba(0, 0, 205, 0.7)',
          borderColor: 'rgba(0, 0, 0, 1)',
          borderWidth: 0.5,
          showLine: false,
          pointStyle: 'rect',
          pointRadius: 2,
          fill: false
        },
        {
          label: 'Límit inferior',
          type: 'line',
          data: rangeThree,
          backgroundColor: 'rgba(0,0,0, 1)',
          borderColor: 'rgba(0, 0, 0, 1)',
          borderWidth: 2,
          borderDash: [5, 5],
          showLine: true,
          pointStyle: 'point',
          pointRadius: 0,
          fill: false
        }
      ]
    }
  })
}

// Request data from .csv file using D3js library
d3.csv('https://raw.githubusercontent.com/galetaire/homesite/main/public/pe_ratio.csv')
  .then(makeChart);
