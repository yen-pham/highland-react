import React, { Component } from 'react';

class GioiThieu extends Component {
  render() {
    return (
      <div className={"vct-gt "+ this.props.addClass}>
  <div className="vct-text">
    <div className="vct-noidung">
    <h1><a href>{this.props.tieuDe}</a></h1>
      <h6>{this.props.gioiThieu}</h6>
      <p> {this.props.noiDung}
      </p>
      <button>XEM CHI TIẾT</button>
    </div>
  </div>
  <div className="vct-img">
    <a href>
      <img src={this.props.anh} alt="" />
    </a>
  </div>
</div>

    );
  }
}

export default GioiThieu;