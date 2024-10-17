import React, { useEffect, useState } from 'react';
import 

// Assuming you have a function to fetch data from your API
const fetchData = async () => {
  const response = await fetch('/api/');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const YourComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []); // Empty dependency array ensures this runs once on mount

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {/* Render your data here */}
      {data && data.map((item) => (
        <div key={item.id}>{item.name}</div> // Adjust based on your data structure
      ))}
    </div>
  );
};

export default YourComponent;