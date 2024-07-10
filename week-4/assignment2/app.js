const url =
  "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products";

function ajax(url) {
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

function render(data) {
  const result = document.getElementById("result");
  result.innerHTML = `
    <section>
      <h2 class="product_items">產品介紹</h2>
      <div id="products">
        <ul class="product_cards">
          ${data
            .map(
              (product, index) => `
            <li key="${index}" class="card">
              <div class="product_items product_name">
                ${product.name}
              </div>
              <div class="product_items product_des">
                ${product.description}
              </div>
              <div class="product_items product_price">
                $${product.price}
              </div>
            </li>
          `
            )
            .join("")}
        </ul>
      </div>
    </section>
  `;
}

ajax(url).then((data) => {
  render(data);
});
