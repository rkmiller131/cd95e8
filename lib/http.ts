const getGraphData = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/v1/tenant/actions/blueprints/blueprint-id/graph', {
      cache: 'force-cache'
    });
    const data = await response.json();
    return data;

  } catch (error) {
    console.error('Error fetching graph data:', error);
    throw error;
  }
}

export {
  getGraphData
}