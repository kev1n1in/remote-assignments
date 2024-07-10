// import axios from "axios";
import { useEffect, useState } from "react";

export function ajax(url) {
  return fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .catch((err) => {
      window.alert(err);
      return [];
    });
}
// export function ajax(url) {
//   return axios
//     .get(url)
//     .then((response) => response.data)
//     .catch((err) => {
//       window.alert(err);
//       return [];
//     });
// }
// 這邊練習了一下axios寫法跟fetch的差異

export function render(data, setProducts) {
  setProducts(data);
}

//assignment2 HTML DOM and AJAX

export const ProductSection = () => {
  const url =
    "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products";
  const [products, setProducts] = useState([]);
  useEffect(() => {
    ajax(url).then((data) => {
      render(data, setProducts);
    });
  }, [url]);
  return (
    <section>
      <h2 className="product_items">產品介紹</h2>
      <div id="products">
        <ul className="product_cards">
          {products.map((product, index) => (
            <li key={index} className="card">
              <div className="product_items product_name">{product.name}</div>
              <div className="product_items product_des">
                {product.description}
              </div>
              <div className="product_items product_price">
                $:{product.price}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
