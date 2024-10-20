export const getAlerts = async () => {
  try {
    console.log('Fetching alerts...');
    const response = await fetch('http://172.16.31.135:8000/api/alerts', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    console.log('Response status:', response.status);
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error data:', errorData);
      throw new Error(errorData.error || 'Unknown error');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching alerts:', error);
    throw error;
  }
};