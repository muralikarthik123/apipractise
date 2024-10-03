const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors()); // Enable CORS

const port = process.env.PORT || 5001; // Server port

// Sample product data
const products = [
  { id: 1, name: 'Karthik' },
  { id: 2, name: 'Ram' },
  { id: 3, name: 'Ramesh' },
  { id: 4, name: 'Fathima' },
  { id: 5, name: 'Bandi' },
  { id: 6, name: 'Rajesh' },
  { id: 7, name: 'Ram' }
];

// GET route to return products data
app.get('/', (req, res) => {
  res.json(products);
});

// Handle undefined routes (optional, but good practice)
app.use((req, res) => {
  res.status(404).send('Route not found');
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
