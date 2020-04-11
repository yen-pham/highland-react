import React, { Component } from 'react';
import Form from './Form';
import GioHang from './GioHang';

class DatHang extends Component {
  render() {
    return (
      <div class="content dh-content">
        <Form/>
        <GioHang/>
      </div>
    );
  }
}

export default DatHang;