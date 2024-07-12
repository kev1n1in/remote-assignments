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
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadRepos(page);
  }, [page]);

  const loadRepos = (page) => {
    ajax(page).then((data) => setRepos((prevRepos) => [...prevRepos,...data]));
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="App">
      <h1 id="title">Assignment 4</h1>
      {repos.map((repo) => (
        <ul className="items" key={repo.id}>
          <div>
            <li id="name">{repo.name}</li>
            <li id="visibility">{repo.visibility}</li>
            <li id="description">{repo.description}</li>
            <li>
              {repo.topics.map((topic, index) => (
                <div id="topics" key={index}>
                  {topic}
                </div>
              ))}
            </li>
          </div>
        </ul>
      ))}
      <button id="button" onClick={loadMore}>
        More
      </button>
    </div>
  );
}
// 遇到需要隨著API或是創建東西的事情就可以用map =>這種方法
// 會創建=>(裡面的東西)

export default App;
