import React, { Component } from 'react';
import SanPhamLoai from './SanPhamLoai';

class ChiTietLoai extends Component {
  render() {
    return (
      <div className="cp-caphep">
  <h1>{this.props.tieuDe}</h1>
  <div className="cp-caphep-l">
    <div className="cp-anh"><a href><img src={this.props.anh} alt="" /></a></div>
    <p>{this.props.noiDung}</p>
    <button className="cp-btn-xemsp">XEM SẢN PHẨM</button>
  </div>
  <div className="cp-caphep-r">
    <SanPhamLoai sanPham= {this.props.sanPham[0]}/>
    <SanPhamLoai sanPham= {this.props.sanPham[1]}/>
  </div>
</div>

    );
  }
}

export default ChiTietLoai;