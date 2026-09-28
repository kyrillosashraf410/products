const showBtn = document.querySelector(".showProductsBtn");
const container = document.querySelector(".productsContainer");

showBtn.addEventListener("click", async () => {
  try {
    container.innerHTML = `<div class="text-center">Loading products...</div>`;

    const response = await fetch("https://dummyjson.com/products");

    const data = await response.json();

    const products = data.products;

    container.innerHTML = "";

    products.forEach((product) => {
      const cardHTML = `
        <div class="col-md-3 col-sm-6 mb-4"> 
            <div class="card h-100 shadow-sm"> 
                
                <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}" style="height: 200px; object-fit: contain; padding: 10px;">
                
                <div class="card-body d-flex flex-column">
                    <p class="text-muted small mb-1">${product.category}</p>
                    
                    <h5 class="card-title">${product.title}</h5>
                    
                    <p class="card-text flex-grow-1 text-muted small">${product.description}</p>
                    
                    
                    <div class="d-flex justify-content-between align-items-center mt-3">
                        <span class="h5 text-success mb-0 font-weight-bold">$${product.price}</span>
                        <a href="#" class="btn btn-primary btn-sm">View Details</a>
                    </div>
                </div>
            </div>
        </div>
    `;

      container.innerHTML += cardHTML;
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    container.innerHTML = `<div class="text-center text-danger">Failed to load products. Please check the API.</div>`;
  }
});
