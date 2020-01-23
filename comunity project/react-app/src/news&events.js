import React from 'react';
import './App.css';
import Header from './header';
import Footer from './footer';
import SubHeaderNews from './subheader-news';
import MainNews from './main-news';


function AppNews() {
  return (
    <div className="wrapper">
        <div className="header">
            <Header></Header>
            <SubHeaderNews></SubHeaderNews>
        </div>
        <MainNews></MainNews>
        <Footer></Footer>
    </div>
  );
}

export default AppNews;