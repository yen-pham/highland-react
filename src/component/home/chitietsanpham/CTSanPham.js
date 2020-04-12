import React, { Component } from 'react';
import SanPham from './SanPham';
import SSanPham from './SSanPham';
import GioHang from '../dathang/GioHang';

class CTSanPham extends Component {
  render() {
    return (
      <div className="ctsp-chitiet content">
        <SanPham/>
        <GioHang/>
      </div>
    );
  }
}

export default CTSanPham;