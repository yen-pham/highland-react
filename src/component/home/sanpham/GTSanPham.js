import React, { Component } from "react";

class GTSanPham extends Component {
  render() {
    return (
      <div className={"sp-caphe " + this.props.addCss}>
        <div className="sp-img">
          <img src={this.props.linkAnh} alt="" />
        </div>
        <div className="sp-text">
          <h1>
            <a href>{this.props.tieuDe}</a>
          </h1>
          <h6>{this.props.gioiThieu}</h6>
          <button>KHÁM PHÁ THÊM</button>
        </div>
      </div>
    );
  }
}

export default GTSanPham;
