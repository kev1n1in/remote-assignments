const btn = document.getElementById("btn").addEventListener("click", sumData);

function sumData() {
  const input = document.getElementById("text_number").value;
  fetch(`http://localhost:3000/getData?number=${input}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      result.innerHTML = `${data}`;
    });
}

// 將fetch method更正為GET
// Content-type更正為application/json
// 為解決url直接連結會出現json格式的問題
// 從原本的判斷{error:"Lack of Parameter"}這個json格式
// 變成在app.js那邊就判斷好
// 這邊只負責回傳結果
// 可讀性也高一點
