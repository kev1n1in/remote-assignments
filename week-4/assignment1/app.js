function delayedResult(n1, n2, delayTime, callback) {
  setTimeout(() => {
    const result = n1 + n2;
    callback(result);
  }, delayTime);
}
// setTimeout(()=>{},delayTime) 範本
// 會先把delayTime 跑完才跑裡面的callback
// callback會跑裡面的parameter
// 也就是n1+n2


delayedResult(4, 5, 3000, function (result) {
  console.log(result);
});
delayedResult(-5, 10, 2000, function (result) {
  window.alert(result);
});


