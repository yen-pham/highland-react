import React, { Component } from "react";

class TinTucCT extends Component {
  render() {
    return (
      <div className="tt-col4">
        <div className="tt-img">
          <img
            src={this.props.anh}
            alt=""
          />
        </div>
        <div className="tt-a">
          <a href>
            {this.props.tieuDe}
          </a>
        </div>
        <p>
          <i className="fa fa-calendar-o" aria-hidden="true" />
         {this.props.thoiGian}
        </p>
      </div>
    );
  }
}

export default TinTucCT;
