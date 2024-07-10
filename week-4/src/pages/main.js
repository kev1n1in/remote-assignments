import React, { useState, useRef } from "react";
import "./main.css";
import { isVisible } from "@testing-library/user-event/dist/utils";
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
          <a href="#">常見問題</a>
        </li>
        <li>
          <a href="#">註冊</a>
        </li>
        <li>
          <a href="#">登入</a>
        </li>
        <li>
          <a href="#">聯絡我們</a>
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


export function MainPage() {
  const [appear, setAppear] = useState(false);

  const clickEvnet = () => {
    setAppear(true);
  };
  return (
    <div>
      <Navbar />
      <WelcomeMessage />
      <Content />
      <Footer />
      {/* <ContentHide /> */}
    </div>
  );
}
