// Sample data
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Monthly Patient Visits',
      data: [120, 150, 180, 200, 170, 130, 160],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    },
    {
      label: 'Average Patient Age',
      data: [45, 48, 50, 47, 49, 46, 44],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    },
    {
      label: 'Disease Prevalence',
      data: [20, 25, 30, 28, 32, 27, 29],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }
  ]
};

// Line charts
const ctx1 = document.getElementById('chart1');
new Chart(ctx1, {
  type: 'line',
  data: data,
  options: {
    title: {
      display: true,
      text: 'Monthly Patient Visits'
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

//Bar chart
const ctx2 = document.getElementById('chart2');
new Chart(ctx2, {
  type: 'bar',
  data: data,
  options: {
    title: {
      display: true,
      text: 'Average Patient Age'
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

//Pie chart
const ctx3 = document.getElementById('chart3');
new Chart(ctx3, {
  type: 'pie',
  data: {
    labels: data.labels,
    datasets: [{
      data: data.datasets[0].data,
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF6384', '#36A2EB', '#FFCE56', '#FF6384'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF6384', '#36A2EB', '#FFCE56', '#FF6384']
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Disease Prevalence'
    }
  }
});
