import React, { Component } from 'react';

class SanPhamLoai extends Component {
  render() {
    return (
      <div className="cp-caphep-gt">
      <a href><img src={this.props.sanPham.anh} alt="" /></a>
      <div>
        <a href><h3>{this.props.sanPham.ten}</h3></a>
        <p>{this.props.sanPham.gioiThieu}</p>
      </div>
    </div>
  
    );
  }
}

export default SanPhamLoai;