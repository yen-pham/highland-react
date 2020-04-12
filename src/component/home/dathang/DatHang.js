import React, { Component, Fragment } from 'react';
import Form from './Form';
import GioHang from './GioHang';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

class DatHang extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <div className="content dh-content">

        <Form/>
        <GioHang/>
      </div>
      <Footer/>
      </Fragment>
      
    );
  }
}

export default DatHang;