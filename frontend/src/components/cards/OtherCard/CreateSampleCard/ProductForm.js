import React from "react";

function ProductForm({ products, updateList, addItem, removeItem }) {
  return (
    <>
      <h5 className="mt-4 text-center">Products</h5>

      <div className="row">
        {products.map((product, index) => (

          <div key={index} className="col-md-6 mb-3">
            <div className="border p-2 h-100">

              {/* Product Name */}
              <input
                placeholder="Product Name"
                className="form-control mb-2"
                value={product.name}
                onChange={(e) =>
                  updateList("products", index, "name", e.target.value)
                }
              />

              {/* Price */}
              <input
                type="number"
                placeholder="Price"
                className="form-control mb-2"
                value={product.price}
                onChange={(e) =>
                  updateList("products", index, "price", e.target.value)
                }
              />

              {/* Image Upload */}
              <input
                type="file"
                className="form-control mb-2"
                accept="image/*"
                onChange={async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch("http://localhost:8080/api/upload/products", {
    method: "POST",
    body: formData
  });

  const imageUrl = await res.text();

  updateList("products", index, "image", imageUrl);
}}
              />

              {/* Remove */}
              <button
                type="button"
                className="btn btn-danger btn-sm w-100 mt-2"
                onClick={() => removeItem("products", index)}
              >
                Remove
              </button>

            </div>
          </div>

        ))}
      </div>

      {/* Add Button */}
      <div className="text-center">
        <button
          type="button"
          className="btn btn-success  w-50 mt-3"
          onClick={() =>
            addItem("products", {
              image: "",
              name: "",
              price: ""
            })
          }
        >
          + Add Product
        </button>
      </div>
    </>
  );
}

export default ProductForm;