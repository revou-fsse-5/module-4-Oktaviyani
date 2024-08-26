export const fetchProducts = async () => {
    const response = await fetch('/api/products');
    return response.json();
  };
  
  // Add other API functions as needed
  