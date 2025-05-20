import React, { useEffect, useState } from "react";
import axios from "axios";

const Admin = () => {
  const [productUrl, setProductUrl] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [message, setMessage] = useState("");

  const addProduct = async () => {
    if (
      !productName ||
      !productPrice ||
      !productDescription ||
      !productUrl ||
      !productCategory
    ) {
      setMessage("Заполните все поля!");
      setTimeout(() => setMessage(""), 3000);
      return;
    }

    const newProduct = {
      productPrice,
      productName,
      productDescription,
      productUrl,
      productCategory,
      count: 1,
      rating: Math.round(Math.random() * 5),
    };

    axios.post(
      "https://6816fa3026a599ae7c390307.mockapi.io/Organic",
      newProduct
    );

    setMessage("Товар успешно добавлен!");
    setProductName("");
    setProductUrl("");
    setProductDescription("");
    setProductPrice("");
    setProductCategory("");

    setTimeout(() => setMessage(""), 3000);
  };
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div id="admin">
      <div className="container">
        <div className="admin">
          <h1>Admin</h1>
          <div className="form">
            <input
              onChange={(e) => setProductName(e.target.value)}
              type="text"
              placeholder="Product Name"
              value={productName}
            />
            <input
              onChange={(e) => setProductUrl(e.target.value)}
              type="text"
              placeholder="Product Url"
              value={productUrl}
            />
            <input
              onChange={(e) => setProductDescription(e.target.value)}
              type="text"
              placeholder="Product Description"
              value={productDescription}
            />
            <input
              onChange={(e) => setProductPrice(e.target.value)}
              type="number"
              placeholder="Product Price"
              value={productPrice}
            />
            <select
              value={productCategory}
              onChange={(e) => setProductCategory(e.target.value)}
            >
              <option value="">Category</option>
              <option value="Vegetable">Vegetable</option>
              <option value="Fresh">Fresh</option>
              <option value="Millets">Millets</option>
              <option value="Nuts">Nuts</option>
              <option value="Health">Health</option>
            </select>
            <button onClick={addProduct}>Add Product</button>
          </div>
          {message && <p className="message">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default Admin;
