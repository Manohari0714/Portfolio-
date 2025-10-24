
function searchProducts() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const products = document.querySelectorAll(".product");

  products.forEach(product => {
    let productName = product.querySelector(".name").textContent.toLowerCase();
    if (productName.includes(input)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}
document.getElementById("searchInput").addEventListener("keyup", searchProducts);

