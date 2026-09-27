//makeChart, calling the data and variables from the .csv file
function makeChart(pefair) {
  var rangeStart = 0
  var rangeEnd = new Date().getFullYear() - 154
  var rangeLabels = pefair.map(function(d) {return d.Year}).slice(rangeStart, rangeEnd);
  var rangeOne = pefair.map(function(d) {return +d.Lifetime*100}).slice(rangeStart, rangeEnd);

  Chart.defaults.font.size = 12;
  var chart = new Chart('pefair', {
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
          label: "Percentatge de vida per a recuperar la inversió",
          type: 'line',
          data: rangeOne,
          backgroundColor: 'rgba(0, 0, 205, 0.2)',
          borderColor: 'rgba(0, 0, 205, 1)',
          borderWidth: 1,
          pointStyle: 'circle',
          pointRadius: 3,
          fill: false,
          tension: 0.4
        },
      ]
    }
  })
}

// Request data from .csv file using D3js library
d3.csv('https://raw.githubusercontent.com/galetaire/homesite/main/public/pe_ratio.csv')
  .then(makeChart);
