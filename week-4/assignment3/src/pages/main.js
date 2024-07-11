import React, { useState } from "react";
import "./main.css";
export const Navbar = () => {
  return (
    <nav>
      <div id="logo">
        <a href="#MainPage">
          <h2 className="logo_name">SWNews</h2>
        </a>
      </div>
      <input type="checkbox" id="switch" />
      <label for="switch">
        <div className="hamburger-container">
          <span></span>
          <span></span>
        </div>
      </label>
      <ul className="nav-bar">
        <li>
          <a>常見問題</a>
        </li>
        <li>
          <a>註冊</a>
        </li>
        <li>
          <a>登入</a>
        </li>
        <li>
          <a>聯絡我們</a>
        </li>
      </ul>

      <div className="ham-items">
        <ul>
          <li>常見問題</li>
          <li>註冊</li>
          <li>登入</li>
          <li>聯絡我們</li>
        </ul>
      </div>
    </nav>
  );
};

export const WelcomeMessage = () => {
  const [welcomeMessage, setWelcomeMessage] = useState("Welcome!");
  return (
    <section id="WelcomeMessage">
      <h1 onClick={() => setWelcomeMessage("Have a Good Time!")}>
        {welcomeMessage}
      </h1>
    </section>
  );
};
// 這裡的onClick就比較單純一點 是直接把arrow function寫在onClick裡面
// 預設state是"Welcome!"
// 點擊後會改變成"Have a Good Time!"


export const Content = () => {
  return (
    <section id="content">
      <h2 id="Trivia">Trivia</h2>
      <div className="container">
        <article className="box">HTML tags</article>
        <article className="box">Layout</article>
        <article className="box">Good habits</article>
        <article className="box">Version control</article>
      </div>
    </section>
  );
};

export const Footer = () => {
  const [isVisible, setIsvisible] = useState(false);
  const clickEvent = () => {
    setIsvisible(!isVisible);
  };
  return (
    <div>
      <footer className>
        <button onClick={clickEvent}>點我看更多</button>
      </footer>
      {isVisible && (
        <div className="container">
          <article className="box">HTML tags</article>
          <article className="box">Layout</article>
          <article className="box">Good habits</article>
          <article className="box">Version control</article>
        </div>
      )}
    </div>
  );
};

// 由於react裡面要用event的方法是使用onClick來觸發 所以原本的addEventListener就要改掉
// 把原本display:none刪掉 換成判斷式 只有在前面為true的時候才會渲染後面的元素
// 原本我是寫&& 後來查到一篇文章說 當回傳值不是boolean的時候會報錯
// 才改成三元運算符,
// 2024/7/10 如果確定回傳值一定是boolean就可以直接用&&
// onClick觸發 clickEvent後 會跑


export function MainPage() {
  return (
    <div>
      <Navbar />
      <WelcomeMessage />
      <Content />
      <Footer />
    </div>
  );
}

// 這邊把每個區塊都設成一個component 然後先在這邊集合起來 這樣app.js在import的時候就不用打一大堆
