import React, { Component } from 'react';
import SlideShow from './SlideShow';
import Anh from './Anh';

class Highlands extends Component {
  render() {
    return (
      <div className="content">
        <SlideShow/>
        <Anh Anh = 'https://www.highlandscoffee.com.vn/vnt_upload/weblink/HCO-7548-PHIN-SUA-DA-2019-TALENT-WEB_1.jpg' />
        <Anh Anh='https://www.highlandscoffee.com.vn/vnt_upload/weblink/Product_banner_confirmed.jpg'/>
        <Anh Anh='https://www.highlandscoffee.com.vn/vnt_upload/weblink/HCO-7605-FESTIVE-2020-WEB-FB-2000X639_1.png'/>
      </div>
    );
  }
}

export default Highlands;