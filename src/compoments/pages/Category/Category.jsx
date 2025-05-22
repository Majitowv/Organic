import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { OrganContext } from "../../context";
import OurProduct from "../ui/OurProduct";

const Category = () => {
  const { catName } = useParams();
  const { product } = useContext(OrganContext);

  const filteredProducts = product.filter((el) => el.productCategory === catName);

  return (
    <div id="Category">
      <div className="container">
        <div className="category">
          {filteredProducts.length ? (
            filteredProducts.map((el) => (
              <OurProduct key={el.id} productData={el} />
            ))
          ) : (
            <h1>Загрузка данных...</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
