// 1.Complete the function below to find the max number of the passing array of numbers.
// 完成下面的函數以找到傳遞的數位數位的最大數量


function max(numbers){
    let maxNum = [0];
    for(let i =0; i<numbers.length; i++){
        if (numbers[i] > maxNum){
        maxNum= numbers[i]
        }
    };return maxNum;
}

// function max(numbers){
//     let maxNum = 0;
//     let i = 0
//     while(i<numbers.length){
//         if (numbers[i] > maxNum){
//         maxNum= numbers[i]
//         };
//         i++;
//     };
//     console.log(maxNum)
// }
// 解:因為無法使用maht.max()
// 所以這邊的解法就用for迴圈去跑array裡面的數字
// 經測試while和for都寫得出來 只是在這個例子裡for的寫法比較精準
// 可讀性也比較高 while需要把條件拆分到迴圈外+parameter+迴圈內
// 較麻煩,雖然while彈性較高 但在這個例子中不太需要用到


// console.log(max([1, 2, 4, 5])); // expected output: 5
// console.log(max([5, 2, 7, 1, 6])); // expected output: 7

// --------------------------------------------------------------------------

//2.Complete the function below to calculate the result of the passing object.
// 完成下面的函數以計算傳遞對象的結果。




function calculator(args) {
    const operations = {
        "+":(n1,n2) => n1+n2,
        "-":(n1,n2) => n1-n2,
    }
    const operation = operations[args.op];
    if(operation) {
        return operation(args.n1,args.n2);
    }else{
        return "Not supported"
    };
}

// console.log(calculater({ n1: 2, n2: 3, op: '+' })); // expected output: 5
// console.log(calculater({ n1: 5, n2: 2, op: '-' }));  // expected output: 3

// console.log(calculater({ n1: 1, n2: 6, op: 'x' }));  // expected output: 'Not supported'

// 這邊的寫法是先在function內部宣告運算符計算方法,要乘除也可以,只要用*或/
// 接下來就是設定operation是object裡面哪個值
// 由於object的是無序,因此無法使用[序列]來指定 只能用.op去指定
// op指向operation後就可以來做條件句
// if後面條件直接設定operation就代表只要operation是真值(truthy) 舉凡數字或布林等非虛值
// 在這個題目中"+"||"-"都會對n1 ,n2進行運算
// 當不是這兩個運算符就會跳到"Not supported"
// 由於function name重複 所以assignment 2的calculate改成calculater


// -------------------------------------------------------------------------------------------
// 3.Complete the function below to calculate the total price of all products after applying a discount.
// 完成以下功能，計算應用折扣后所有產品的總價。
const discountedPrice = calculate({
    discount: 0.1,
    products: [
            {
                    name: "Product 1",
                    price: 100
            },

            {
                    name: "Product 2",
                    price: 700
            },

            {
                    name: "Product 3",
                    price: 250
            }
    ]
});


function calculate(data) {
    
   let total = 0;
   for (let product of data.products){
    total+=product.price;
   }

   const discountedPrice =total - (total*data.discount);
   return discountedPrice;
}


console.log(`discountedPrice: $${discountedPrice}`) // show the total price of all products after applying a discount

// 這邊的方法運用了for of 去跑每個array裡的價格 total從0開始每跑一個值就會相加上去 這個方法用來算總值很方便
// 接下來就是折扣的部分 設定折扣後的價格為 總價減去總價*折扣 然後回傳值
// 這樣就可以順利得到折扣後的總價



// 4.Following assignment in week 1, let’s add some effects on it by only pure JavaScript without Bootstrap, jQuery or any other libraries.
// 僅通過純 JavaScript 而不使用 Bootstrap、jQuery 或任何其他庫來添加一些效果。

const WelcomeMessage_switch = document.querySelector(".WelcomeMessage h1")
WelcomeMessage_switch.addEventListener('click', () => {
    WelcomeMessage_switch.innerText="Have a good time!"
})
// --------------------------------------------------------------------------------------------------------------------------------------
const hamIcon_switch = document.querySelector("#switch")
const hamItemList = document.querySelector(".ham-items")


hamIcon_switch.addEventListener('click', () => {
    if(hamItemList.style.opacity==="1"){
        hamItemList.style.transform="scaleY(0)",
        hamItemList.style.opacity = "0",
        console.log("clicked")
    }else{
        hamItemList.style.transform="scaleY(1)",
        hamItemList.style.opacity = "1",
        console.log("canceled")
}
})

// 5.There are some more content boxes waiting to show. When the user clicks the Call-to-Action button, show those hidden content boxes.
// 當使用者按兩下號召性用語按鈕時，顯示這些隱藏的內容框
const check_hide = document.querySelector(".check_hide")
const hide_content = document.querySelector(".hide")

check_hide.addEventListener('click', ( )=>{
    hide_content.style.display = "flex"
    }
)


