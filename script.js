// Sample healthcare data (replace with your own)
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'Monthly Patient Visits',
    data: [120, 150, 180, 200, 170, 130, 160],
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1
  }]
};

// Chart configuration
const config = {
  type: 'line', // You can change this to 'bar', 'pie', etc.
  data: data,
  options: {}
};

// Create the chart
const ctx = document.getElementById('myChart');
new Chart(ctx, config);
