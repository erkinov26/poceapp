/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import "./App.css";
import useData from "./store";

function App() {
  const { getData, products, previousUrl, getNextData, getPreviousData } =
    useData();
  console.log("🚀 ~ App ~ previousUrl:", previousUrl);
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <button
        disabled={previousUrl === null}
        onClick={() => {
          getPreviousData();
        }}
        className="btn"
      >
        Previous
      </button>
      <button
        onClick={() => {
          getNextData();
        }}
        className="btn"
      >
        Next Page
      </button>
      <div className="products-list">
        {products.length === 0 ? (
          <p>Loading...</p>
        ) : (
          products.map((product, i) => (
            <div className="products-item" key={i}>
              <h1 className="product-name">{product.name}</h1>
              <div className="imbBox">
                <img src={product.url} alt="img" />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
