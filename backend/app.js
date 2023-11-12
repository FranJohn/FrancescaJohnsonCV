const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

// Enable CORS for all routes
app.use(cors());

app.get('/api/data', (req, res) => {
    const data = {
      message: 'Hello from the backend!',
      timestamp: new Date().toISOString(),
    };
    res.json(data);
  });
  
  app.listen(port, () => {
    console.log(`Backend server is running at http://localhost:${port}`);
  });
