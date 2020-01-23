import React from 'react';
import './App.css';
import Header from './header';
import Footer from './footer';
import MainHome from './main-home';
import MainCarousel from './carousel-home'

function AppHome() {
  return (
<div className="wrapper">
        <div className="header">
            <Header></Header>
            <MainCarousel></MainCarousel>
        </div>
     <MainHome></MainHome>
     <Footer></Footer>
</div>
  );
}

export default AppHome;
