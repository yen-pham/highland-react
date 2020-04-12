import React, { Component } from 'react';

class SPKhac extends Component {
  render() {
    return (
      <div className="cttd-sanpham">
  <div className="cttd-button">
    <button className="cttd-trai"><i className="fa fa-chevron-left" aria-hidden="true" /></button>
    <button className="cttd-phai"><i className="fa fa-chevron-right" aria-hidden="true" />
    </button>
  </div>
  <div className="cttd-show">
    <div className="cttd-sp">
      <div className="cttd-anh sp-banhmi">
        <a href>
          <img src={this.props.sanPham[0].anh} alt="" />
        </a>
      </div>
      <div className="cttd-gia ">
    <a href>{this.props.sanPham[0].ten}</a>
        <p>{this.props.sanPham[0].gioiThieu}</p>
      </div>
    </div>
    <div className="cttd-sp">
      <div className="cttd-anh ">
        <a href>
          <img src={this.props.sanPham[1].anh} alt="" />
        </a>
      </div>
      <div className="cttd-gia">
        <a href>{this.props.sanPham[1].ten}</a>
        <p>{this.props.sanPham[1].gioiThieu}</p>
      </div>
    </div>
    <div className="cttd-sp cttd-spcuoi">
      <div className="cttd-anh">
        <a href>
          <img src={this.props.sanPham[2].anh} alt="" />
        </a>
      </div>
      <div className="cttd-gia">
        <a href>{this.props.sanPham[2].ten}</a>
        <p>{this.props.sanPham[2].gioiThieu}</p>
      </div>
    </div>
  </div>
</div>

    );
  }
}

export default SPKhac;