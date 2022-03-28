import React, { useState } from 'react';
import Header from 'react';
import About from 'react';
// import Projects from 'react';
import Contact from 'react';
// import Resume from 'react';
import Footer from 'react';

function App() {
  const [currentTab, setCurrentTab] = useState("about")
  const renderPage = () => {
    if (currentTab === "about"){
      return <About />
    }
    // if (currentTab === "projects"){
    //   return <Projects />
    // }
    if (currentTab === "contact"){
      return <Contact />
    }
    // if (currentTab === "resume"){
    //   return <Resume />
    // }
  }
  return (
    <div>
      <div>
        <Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
      </div>
      <div>
        <main>{renderPage}</main>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
