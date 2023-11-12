'use client'
import { useEffect, useState } from 'react';

interface BackendData {
  message: string;
  timestamp: string;
}

const DateTime: React.FC = () => {
  const [backendData, setBackendData] = useState<BackendData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/data');
        const data: BackendData = await response.json();
        setBackendData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Run this effect only once when the component mounts

  return (
    <div>
      <h1>Date and Time Component</h1>
      {backendData && (
        <p>
          Received data from the backend: {backendData.message} (timestamp: {backendData.timestamp})
        </p>
      )}
    </div>
  );
};

export default DateTime;
