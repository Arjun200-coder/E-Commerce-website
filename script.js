function searchProducts() {
    const searchQuery = document.getElementById('searchBar').value.toLowerCase();
    const products = document.querySelectorAll('.product');
  
    products.forEach(product => {
      const productName = product.getAttribute('data-name').toLowerCase();
      if (productName.includes(searchQuery)) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  }
  