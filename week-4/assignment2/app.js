const url =
  "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products";

function ajax(url) {
  return fetch(url)
    .then((response) => response.json())
    .catch((err) => {
      window.alert(err);
      return [];
    });
}
//第一步一樣先抓api下來  由於fetch預設方法就是"GET"所以這邊就不多寫,JSON傳換成json物件

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
// render這邊就負責把傳入的資料渲染
// 首先抓result當innerHTML的點
// 然後就把資料格式設定好 這邊要注意的是不加.join 會跑版
// join可以把資料合併成一個再回傳

ajax(url).then((data) => {
  render(data);
});
