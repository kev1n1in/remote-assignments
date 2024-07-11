function delayedResult(n1, n2, delayTime) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const result = n1 + n2;
      res(result);
    }, delayTime);
  });
}

// setTimeout(()=>{},delayTime) 範本
// 會先把delayTime 跑完才跑裡面的callback
// callback會跑裡面的parameter
// 也就是n1+n2


// delayedResult(4, 5, 3000, function (result) {
//   console.log(result);
// });
// delayedResult(-5, 10, 2000, function (result) {
//   window.alert(result);
// });


// 進階挑戰
// delayedResult(4, 5, 3000).then(console.log);
// 要怎麼實作

delayedResult(4, 5, 3000).then(console.log);
delayedResult(-5, 10, 2000).then(window.alert);

// 由於.then是接收Promise 所以必須要先把前面的function回傳值包裝成Promise
// 這樣then就能接收到delayedResult的值了


