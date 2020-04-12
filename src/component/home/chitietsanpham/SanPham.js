import React, { Component } from 'react';
import SSanPham from './SSanPham';

class SanPham extends Component {
  render() {
    return (
      <div className="ctsp-sp">
  <h1>PHIN ĐEN NÓNG</h1>
  <div className="ctsp-gtsp">
    <div className="ctsp-anh ctsp-col2">
      <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/AMERICANO.png" alt="" />
    </div>
    <div className="ctsp-noidung ctsp-col2">
      <p className="ctsp-gt">Dành cho những tín đồ cà phê đích thực! Hương vị cà phê truyền thống được phối trộn độc đáo tại Highlands. 
        Cà phê đậm đà pha từ Phin, cho thêm 1 thìa đường, mang đến vị cà phê đậm đà chất Phin. </p>
      <p>Giá:  <strong>29,000 VNĐ</strong></p>
      <div className="ctsp-themgh"> 
        <button>-</button>
        <span>0</span>
        <button>+</button>
      </div>
    </div> 
  </div>
  <SSanPham/>
</div>

    );
  }
}

export default SanPham;