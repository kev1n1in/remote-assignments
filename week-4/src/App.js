import { useEffect, useState } from "react";
import "./App.css";
import { delayedResult } from "./utils/assignment1";
import { ProductSection } from "./utils/assignment2";
import { MainPage } from "./pages/main";

function App() {
  // assignment1 Callback
  useEffect(() => {
    delayedResult(4, 5, 3000, function (result) {
      console.log(result); // 9 will be shown in the console after 3 seconds
    });

    delayedResult(-5, 10, 2000, function (result) {
      window.alert(result); // 5 will be shown in the console after 2 seconds
    });
  }, []);


  // click event

  return (
    <div className="App">
      {/* assignment2 HTML DOM and AJAX */}
      <MainPage />
      <ProductSection/>
    </div>
  );
}

export default App;
