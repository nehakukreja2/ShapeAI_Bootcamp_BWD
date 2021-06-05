import React from "react";
import "./styles.css";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
function App() {
  return (
    <div>
      <Header />
      <Footer />
      <Note
        name="Javascript and React.js"
        desc="This was an amazing bootcamp taken up by Shaurya sir. We did everything from Scratch including JavaScript, React.js and HTML"
      />
      <Note
        name="Web dev with bootstrap"
        desc="This was an amazing bootcamp taken up by Shaurya sir. We did everything from Scratch including CSS, HTML and bootstrap"
      />
      <Note
        name="Python and machine learning"
        desc="This was an amazing bootcamp taken up by Shaurya sir. We did everything from Scratch including Python and machine learning"
      />
    </div>
  );
}
export default App;
