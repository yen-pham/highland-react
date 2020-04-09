import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header id="header">
  <nav>
    <div className="logo">
      <img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/logo.svg" alt="" />
    </div>
    <div className="search">
      <div className="div_co">
        <a href><img className="co" src="https://www.highlandscoffee.com.vn/vnt_upload/lang/flag-vn.jpg" alt="" /></a>
        <a href><img className="co" src="https://www.highlandscoffee.com.vn/vnt_upload/lang/flag-en.jpg" alt="" /></a>
        <a href="#" id="menu"><i className="fa fa-bars" aria-hidden="true" />
        </a>
      </div>
      <div className="div_search"><input type="text" placeholder="Từ khóa" /><img className="search_icon" src="https://www.highlandscoffee.com.vn/skins/default/images/i-search.svg" alt="" /></div>
    </div>
    <div className="list" id="ctmenu">
      <button className="btnX"><i className="fa fa-times" aria-hidden="true" />
      </button>
      <ul className="list_ul">
        <li className="list_li"><a href="he-thong-cua-hang.html">QUÁN CÀ PHÊ</a>
        </li>
        <li className="list_li header-drop">
          <a href="san-pham.html">THỰC ĐƠN </a>
          <a className="menuxt"><i className="fa fa-angle-right" aria-hidden="true" />
            <i className="fa fa-angle-down" aria-hidden="true" /></a>
          <div className="an thucdon">
            <div className="col-2 caphe xemthemtd">
              <div>
                <h4 className="ctmenu-h4"> <a className="rp-cttd" href>CÀ PHÊ</a>
                  <a className="menuxt2"><i className="fa fa-angle-right" aria-hidden="true" />
                    <i className="fa fa-angle-down" aria-hidden="true" /></a></h4>
              </div>
              <ul className="menuxt2-show">
                <li className="rp-an"><i className="fa fa-caret-right muiten" aria-hidden="true" /><a className="rp-cttd" href>Cà Phê
                    Phin</a></li>
                <li className="rp-an"><i className="fa fa-caret-right muiten" aria-hidden="true" /><a className="rp-cttd" href>Cà Phê
                    Espresso</a></li>
              </ul>
            </div>
            <div className="col-2 xemthemtd">
              <div>
                <h4 className="ctmenu-h4"> <a className="rp-cttd" href>FREEZE</a>
                  <a className="menuxt2"><i className="fa fa-angle-right" aria-hidden="true" /><i className="fa fa-angle-down" aria-hidden="true" /></a></h4>
              </div>
              <ul className="menuxt2-show">
                <li><i className="fa fa-caret-right muiten" aria-hidden="true" /><a className="rp-cttd" href>Freeze Cà
                    Phê Phin</a></li>
                <li><i className="fa fa-caret-right muiten" aria-hidden="true" /><a className="rp-cttd" href>Freeze
                    Không Cà Phê </a></li>
              </ul>
            </div>
            <div className="col-2 xemthemtd">
              <div>
                <h4 className="ctmenu-h4"> <a className="rp-cttd" href>TRÀ</a>
                  <a className="menuxt2"><i className="fa fa-angle-right" aria-hidden="true" /><i className="fa fa-angle-down" aria-hidden="true" /></a></h4>
              </div>
              <ul className="menuxt2-show">
                <li><i className="fa fa-caret-right muiten" aria-hidden="true" /><a className="rp-cttd" href>Trà Sen
                    Vàng</a></li>
                <li><i className="fa fa-caret-right muiten" aria-hidden="true" /><a className="rp-cttd" href>Trà
                    Thạch Đào</a></li>
                <li><i className="fa fa-caret-right muiten" aria-hidden="true" /><a className="rp-cttd" href>Trà Không
                    Đào</a></li>
                <li><i className="fa fa-caret-right muiten" aria-hidden="true" /><a className="rp-cttd" href>Trà
                    Thạch Vải</a></li>
              </ul>
            </div>
            <div className="col-2 xemthemtd">
              <div>
                <h4 className="ctmenu-h4"> <a className="rp-cttd" href>BÁNH MÌ</a>
                  <a className="menuxt2"><i className="fa fa-angle-right" aria-hidden="true" /><i className="fa fa-angle-down" aria-hidden="true" /></a></h4>
              </div>
              <ul className="menuxt2-show">
                <li><i className="fa fa-caret-right muiten" aria-hidden="true" /><a className="rp-cttd" href>Thịt
                    Nướng</a></li>
                <li><i className="fa fa-caret-right muiten" aria-hidden="true" /><a className="rp-cttd" href>Xíu
                    Mại</a></li>
                <li><i className="fa fa-caret-right muiten" aria-hidden="true" /><a className="rp-cttd" href>Chả Lụa
                    Xá Xíu</a></li>
                <li><i className="fa fa-caret-right muiten" aria-hidden="true" /><a className="rp-cttd" href>Gà Xé
                    Nước Tương</a></li>
              </ul>
            </div>
            <div className="col-2 xemthemtd">
              <div>
                <h4 className="ctmenu-h4"> <a className="rp-cttd" href>KHÁC</a>
                  <a className="menuxt2"><i className="fa fa-angle-right" aria-hidden="true" /><i className="fa fa-angle-down" aria-hidden="true" /></a></h4>
              </div>
              <ul className="menuxt2-show">
                <li><i className="fa fa-caret-right muiten" aria-hidden="true" /><a className="rp-cttd" href>Bánh
                    Ngọt</a></li>
                <li><i className="fa fa-caret-right muiten" aria-hidden="true" /><a className="rp-cttd" href>Merchandise</a></li>
                <li><i className="fa fa-caret-right muiten" aria-hidden="true" /><a className="rp-cttd" href>Cà Phê
                    Đóng Gói</a></li>
                <li><i className="fa fa-caret-right muiten" aria-hidden="true" /><a className="rp-cttd" href>Thực Đơn
                    Giao Hàng</a></li>
              </ul>
            </div>
            <div className="col-2 hinhanhgt">
              <div className="gt">
                <div><a href>Phin Sữa Đá Đậm Đà Chất Phin! 29.000đ</a></div>
                <div className="anhcafe"><a href><img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/z1.jpg" alt="" /></a>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="list_li header-drop"><a href="tin-tuc.html">TIN TỨC</a>
          <a className="menuxt"><i className="fa fa-angle-right" aria-hidden="true" />
            <i className="fa fa-angle-down" aria-hidden="true" /></a>
          <div className="an ">
            <div className="col-3 sukien ">
              <h4><a className="rp-cttd" href>TIN TỨC &amp; SỰ KIỆN</a></h4>
            </div>
            <div className="col-3 ">
              <h4><a className="rp-cttd" href>TIN KHUYẾN MÃI </a></h4>
            </div>
            <div className="col-3 tintuc hinhanhgt">
              <div className="gt anh">
                <div><a href>Tự hào sinh ra từ đất Việt, 1999!</a></div>
                <div className="anhtuhao"><a href><img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/Thumbnail.jpg" alt="" /></a>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="list_li header-drop"><a href="trach-nhiem.html">TRÁCH NHIỆM CỘNG ĐỒNG</a>
          <a className="menuxt"><i className="fa fa-angle-right" aria-hidden="true" />
            <i className="fa fa-angle-down" aria-hidden="true" /></a>
          <div className="an ">
            <div className="col-3 col-2 sukien giatri xemthemtd">
              <div>
                <h4 className="ctmenu-h4"> <a className="rp-cttd" href>GIÁ TRỊ VĂN HÓA VIỆT</a>
                  <a className="menuxt2"><i className="fa fa-angle-right" aria-hidden="true" />
                    <i className="fa fa-angle-down" aria-hidden="true" /></a></h4>
              </div>
              <ul className="menuxt2-show">
                <li><i className="fa fa-caret-right muiten" aria-hidden="true" /><a className="rp-cttd" href>Đương Đại
                    Hóa Tranh Hồ </a></li>
              </ul>
            </div>
            <div className="col-3 col-2 xemthemtd ">
              <div>
                <h4 className="ctmenu-h4"> <a className="rp-cttd" href>CỘNG ĐỒNG</a>
                  <a className="menuxt2"><i className="fa fa-angle-right" aria-hidden="true" />
                    <i className="fa fa-angle-down" aria-hidden="true" /></a></h4>
              </div>
              <ul className="menuxt2-show">
                <li> 
                  <i className="fa fa-caret-right muiten" aria-hidden="true" /><a className="rp-cttd" href>Lớp Học
                    Cho Em </a>
                </li>
              </ul>
            </div>
            <div className="col-3 tintuc hinhanhgt ">
              <div className="gt anh">
                <div><a href>Đương Đại Hóa Tranh Đông Hồ</a></div>
                <div className="anhtuhao"><a href><img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/KV_Highlands_CSR_1.jpg" alt="" /></a>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="list_li header-drop"><a href="ve-chung-toi.html">VỀ CHÚNG TÔI</a>
          <a className="menuxt"><i className="fa fa-angle-right" aria-hidden="true" />
            <i className="fa fa-angle-down" aria-hidden="true" /></a>
          <div className="an ">
            <div className="col-3 sukien ">
              <h4><a className="rp-cttd" href>KHỞI NGUỒN</a></h4>
            </div>
            <div className="col-3 ">
              <h4><a className="rp-cttd" href>DỊCH VỤ KHÁCH HÀNG </a></h4>
            </div>
            <div className="col-3 ">
              <h4><a className="rp-cttd" href>NGHỀ NGHIỆP </a></h4>
            </div>
            <div className="col-3 tintuc hinhanhgt">
              <div className="gt anh">
                <div><a href>Thương hiệu bắt nguồn từ cà phê Việt!</a></div>
                <div className="anhtuhao"><a href><img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/ABOUT-ORIGIN.png" alt="" /></a>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="list_li"><a href="lien-he.html">LIÊN HỆ</a></li>
        <li className="list_li rpsearch"> <div className="div_search"><input type="text" placeholder="Từ khóa" /><img className="search_icon" src="https://www.highlandscoffee.com.vn/skins/default/images/i-search.svg" alt="" /></div></li>
      </ul>
    </div>
  </nav>
</header>

    );
  }
}

export default Header;