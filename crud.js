let products = [];
let editIndex = -1;

function displayProducts() {
  const list = document.getElementById("productList");
  list.innerHTML = "";
  products.forEach((product, index) => {
    list.innerHTML += `
      <div class="product-item">
        <span><strong>Name:</strong> ${product.name}</span>
        <span><strong>Price:</strong> ₹${product.price}</span>
        <span><strong>Description:</strong> ${product.description}</span>
        <div class="actions">
          <button onclick="editProduct(${index})">Edit</button>
          <button onclick="deleteProduct(${index})">Delete</button>
        </div>
      </div>
    `;
  });
}

function addOrUpdateProduct() {
  const name = document.getElementById("name").value.trim();
  const price = document.getElementById("price").value.trim();
  const description = document.getElementById("description").value.trim();

  if (name === "" || price === "" || description === "") {
    alert("Please fill in all fields.");
    return;
  }

  const newProduct = { name, price, description };

  if (editIndex === -1) {
    products.push(newProduct);
  } else {
    products[editIndex] = newProduct;
    editIndex = -1;
    document.querySelector("button").innerText = "Add Product";
  }

  document.getElementById("name").value = "";
  document.getElementById("price").value = "";
  document.getElementById("description").value = "";
  displayProducts();
}

function editProduct(index) {
  const product = products[index];
  document.getElementById("name").value = product.name;
  document.getElementById("price").value = product.price;
  document.getElementById("description").value = product.description;
  editIndex = index;
  document.querySelector("button").innerText = "Update Product";
}

function deleteProduct(index) {
  products.splice(index, 1);
  displayProducts();
}

displayProducts();
