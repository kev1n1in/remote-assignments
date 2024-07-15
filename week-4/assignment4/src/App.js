import "./App.css";
import React, { useEffect, useState } from "react";

function ajax(page) {
  const url = `https://api.github.com/orgs/facebook/repos?per_page=5&page=${page}`;

  return fetch(url)
    .then((response) => response.json())
    .catch((err) => {
      window.alert(err);
      return [];
    });
}

function App() {
  // repos是傳入的資料 而page是用來更改API的來源 往下一頁
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
// 當page更改 useEffect就重新渲染
  useEffect(() => {
    loadRepos(page);
  }, [page]);
// 會根據fetch抓到新的資料 增加新的欄位
  const loadRepos = (page) => {
    ajax(page).then((data) => setRepos((prevRepos) => [...prevRepos,...data]));
  };

// 按下就加載一頁
  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div id="App">
      <h1 id="App__title">Assignment 4</h1>
      {repos.map((repo) => (
        <ul className="App__items" key={repo.id}>
          <div>
            <li className="App__name">{repo.name}</li>
            <li className="App__visibility">{repo.visibility}</li>
            <li className="App__description">{repo.description}</li>
            <li>
              {repo.topics.map((topic, index) => (
                <div className="App__topics" key={index}>
                  {topic}
                </div>
              ))}
            </li>
          </div>
        </ul>
      ))}
      <button className="App__button" onClick={loadMore}>
        More
      </button>
    </div>
  );
}
// 遇到需要隨著API或是創建東西的事情就可以用map =>這種方法
// 會創建=>(裡面的東西)

export default App;
