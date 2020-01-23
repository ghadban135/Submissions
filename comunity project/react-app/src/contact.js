import React from 'react';
import './App.css';
import Header from './header';
import Footer from './footer';
import SubHeaderContact from './subheader-contact';
import MainContact from './main-contact';

function AppContact() {
  return (
    <div className="wrapper">
                <div className="header">
                    <Header></Header>
                    <SubHeaderContact></SubHeaderContact>
                </div>
                <MainContact></MainContact>
                <Footer></Footer>
     </div>
  );
}

export default AppContact;