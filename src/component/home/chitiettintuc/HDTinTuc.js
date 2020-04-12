import React, { Component, Fragment } from 'react';

class HDTinTuc extends Component {
  render() {
    return (
      <Fragment>
        <div>
  <div className="cttt-chiase">
    <div className="cttt-csbutton">
      <ul>
        <li className="cttt-sf"><a href>Chia sẻ</a></li>
        <li className="cttt-sgg"><a href><img src="https://www.highlandscoffee.com.vn/skins/default/images/icon_google_share.png" alt="" /></a></li>
        <li className="cttt-like"><a href><img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/OqOE21UvWe3.png" alt="" />thích</a>
        </li>
        <li className="cttt-szalo"><a href><img src="zalo.png" alt="" /> Chia sẻ zalo</a></li>
        <li className="cttt-in"><a href><i className="fa fa-print" aria-hidden="true" /> In bài viết </a>
        </li>
      </ul>
    </div>
  </div>
  <div className="cttt-cmt">
    <h4>0 Comments</h4>
    <div className="cttt-sort">
      <span>Sort by</span>
      <div className="cttt-select">
        <div className="cttt-select-dsp">Oldest</div>
        <div className="cttt-select-hidden">
          <ul>
            <li>OLdest</li>
            <li>Newest</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="cttt-themcmt">
    <div className="cttt-anhdd">
      <img src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-1/cp0/c1.0.48.48a/p48x48/83019222_832139160581100_2289776339718242304_n.jpg?_nc_cat=102&_nc_sid=dbb9e7&_nc_ohc=mMz69GPHAicAX-JHCRZ&_nc_ht=scontent-hkt1-1.xx&oh=831c4288d204d725685289eec34b61e9&oe=5E9D5EC0" alt="" />
    </div>
    <div className="cttt-input"><input type="text" placeholder="Add a comment..." /></div>
  </div>
  <div className="cttt-plugin">
    <i className="fa fa-facebook-official" aria-hidden="true" />
    <a href>Facebook Comments Plugin</a>
  </div>
  <div className="cttt-tinkhac">
    <h1>CÁC TIN KHÁC</h1>
    <ul>
      <li><i className="fa fa-caret-right" aria-hidden="true" /><a href>Thư Xin Lỗi Chính Thức
          Khách Hàng Lê Văn Trường </a>
        <span>(20/02/2020, 07:35)</span>
      </li>
      <li><i className="fa fa-caret-right" aria-hidden="true" /><a href> LỊCH MỞ CỬA TẾT 2020 -
          HIGHLANDS COFFEE</a>
        <span>(22/01/2020, 15:37)</span>
      </li>
      <li><i className="fa fa-caret-right" aria-hidden="true" /><a href> UỐNG TRÀ SEN VÀNG MỚI - NHẬN
          VÔ VÀN ƯU ĐÃI SEN VÀNG</a>
        <span> (04/12/2019, 23:50)</span>
      </li>
    </ul>
  </div>
</div>

      </Fragment>
    );
  }
}

export default HDTinTuc;