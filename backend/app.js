const express = require('express');
const fs = require('fs/promises');
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

app.get('/api/homeText', async (req, res) => {
  try {
    const homeTextContent = await fs.readFile('text/homeText.json', 'utf-8');
    const homeTextData = JSON.parse(homeTextContent);

    res.json(homeTextData);
  } catch (error) {
    console.error('Error reading aboutText file:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/aboutText', async (req, res) => {
  try {
    const aboutTextContent = await fs.readFile('text/aboutText.json', 'utf-8');
    const aboutTextData = JSON.parse(aboutTextContent);

    res.json(aboutTextData);
  } catch (error) {
    console.error('Error reading aboutText file:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
 
app.listen(port, () => {
  console.log(`Backend server is running at http://localhost:${port}`);
});
