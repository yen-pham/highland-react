import React, { Component } from 'react';

class SlideShow extends Component {
  render() {
    return (
      <div className="slideshow">
  <div className="anh">
    <div className="slide">
      <a href><img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/HCO-7605-FESTIVE-2020-WEB-FB-2000X639.jpg" alt="" /></a>
    </div>
    <div className="slide">
      <a href><img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/HL20_2000x639_1.png" alt="" /></a>
    </div>
    <div className="slide">
      <a href><img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/HCO-7548-PHIN-SUA-DA-2019-TALENT-WEB_1.jpg" alt="" /></a>
    </div>
    <div className="anh slide">
      <a href><img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/VIET.Brand_Campaign_WEBBANNER.jpg" alt="" /></a>
      <button>KHÁM PHÁ THÊM</button>
    </div>
  </div>
  <div className="slideButton">
    <ul>
      <li className="BtnSl"><button /> </li>
      <li className="BtnSl"><button /> </li>
      <li className="BtnSl"><button /> </li>
      <li className="BtnSl"><button /> </li>
    </ul>
  </div>
</div>

    );
  }
}

export default SlideShow;