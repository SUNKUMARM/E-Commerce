import React, { useEffect, useState } from "react";
import "./products.css";
import Layout from "../layout/Layout";
import { datas } from "../../components/source/source";

const Products = () => {
  const [product, setProduct] = useState(datas);
  const [multiGender, setMultiGender] = useState([]);
  const [categories, setCategories] = useState([]);
  const [finalProduct, setFinalProduct] = useState(product);
  const [singleGender, setSingleGender] = useState("gender");

  useEffect(() => {
    setMultiGender([...new Set(datas?.map((data) => data.gender))]);
  }, []);
  useEffect(() => {
    if (singleGender === "gender") {
      setProduct(datas);
    } else {
      setProduct(datas?.filter((data) => data.gender === singleGender));
    }
  }, [singleGender]);

  useEffect(() => {
    setCategories([...new Set(product?.map((category) => category.category))]);
    setFinalProduct(product);
  }, [product]);

  return (
    <div name="/products">
      <h1 className="title">Latest Collections</h1>
      <hr />
      <br />
      <div className="products-container">
        <aside className="component-one">
          <h1>Filter</h1>
          <select
            className="select-btn"
            id="gender"
            defaultValue={"gender"}
            onClick={(e) => setSingleGender(e.target.value)}
          >
            <option value="gender">Gender</option>
            {multiGender?.map((gen) => (
              <option key={gen} value={gen}>
                {gen}
              </option>
            ))}
          </select>
          <div>
            {categories?.map((category) => (
              <button
                className="btn"
                key={category}
                onClick={() =>
                  setFinalProduct(
                    datas?.filter((data) => data.category === category)
                  )
                }
              >
                {category}
              </button>
            ))}
          </div>
        </aside>
        <div className="component-two">
          <Layout products={finalProduct} />
        </div>
      </div>
    </div>
  );
};

export default Products;
