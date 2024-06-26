
// 6.演算法
function twoSum(nums,target){
    for (let i = 0; i<nums.length; i++){
        for(let j = i+1; j<nums.length; j++){
            if(nums[i]+nums[j]===target){
                return [i,j]
            };
        };
    };
        return [];
}


// function twoSum(nums,target) {
//     const numToindex = new Map();
//     for (let i = 0; i<nums.length; i++) {
//         const complement = target -nums[i];    
//         if (numToindex.has(complement)){
//             return [numToindex.get(complement),i];
//         }
//         numToindex.set(nums[i],i);
//     }
//     return [];
//   }

// 這邊有兩個解法
// 第一個是用兩個for loop去暴力找每個組合
// 要注意的點是 由於我們不能用兩次相同的元素
// 所以在第二個loop那邊 初始變數就要是i+1去跑 這樣可以避免使用相同元素
// 也可以避免一開始跑的時候會兩個loop平行去比對的情況

// 第二個解法是用Map搭配has去找是否有相對應的值
// 如果有的話就用get抓到相對應的值+i = target
// 抓到後就可以用set去設定numToindex的值也就是new Map()映射的值

// 就查到的資料來說第一個暴力解花的時間是O(n*n)
// 第二個是O(n)
// 效率上用map會好很多
// 但個人覺得兩個for很直觀 理解容易