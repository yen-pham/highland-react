import React, { Component, Fragment } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import GTSanPham from "./GTSanPham";
var ndsp = [
  {
    linkAnh:
      "https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/menu-PSD_3.png",
    tieuDe: "CÀ PHÊ",
    gioiThieu:
      "Sự kết hợp hoàn hảo giữa hạt cà phê Robusta & Arabica thượng hạng được trồng trên những vùng cao nguyên Việt Nam màu mỡ, qua những bí quyết rang xay độc đáo, Highlands Coffee chúng tôi tự hào giới thiệu những dòng sản phẩm Cà phê mang hương vị đậm đà và tinh tế.",
  },
  {
    linkAnh:
      "https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/menu-FREEZE_1.png",
    tieuDe: "FREEZE",
    gioiThieu:
      "Sảng khoái với thức uống đá xay phong cách Việt. Freeze là thức uống đá xay mát lạnh được pha chế từ những nguyên liệu thuần túy của Việt Nam.",
  },
  {
    linkAnh:
      "https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/menu-TEA_1.png",
    tieuDe: "TRÀ",
    gioiThieu:
      "Hương vị tự nhiên, thơm ngon của Trà Việt với phong cách hiện đại tại Highlands Coffee sẽ giúp bạn gợi mở vị giác của bản thân và tận hưởng một cảm giác thật khoan khoái, tươi mới.",
  },
  {
    linkAnh:
      "https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/banh-mi-thit-nuong-vn.png",
    tieuDe: "BÁNH MÌ",
    gioiThieu:
      "Bạn đã quá quen thuộc với Bánh mì Việt Nam. Hãy nếm thử một miếng Bánh mì ngon, giòn, nóng hổi tại Highlands Coffee. Một kết hợp hoàn hảo giữa lớp nhân chua, cay, mặn, ngọt quyện với lớp vỏ bánh mì giòn tan, mịn màng tạo ra tầng tầng lớp lớp dư vị cho thực khách.",
  },
];
class SanPham extends Component {
  render() {
    return (
      <Fragment>
        <GTSanPham
          linkAnh={ndsp[0].linkAnh}
          tieuDe={ndsp[0].tieuDe}
          gioiThieu={ndsp[0].gioiThieu}
        />
        <GTSanPham
          linkAnh={ndsp[1].linkAnh}
          tieuDe={ndsp[1].tieuDe}
          gioiThieu={ndsp[1].gioiThieu}
          addCss="sp-caphe1"
        />
        <GTSanPham
          linkAnh={ndsp[2].linkAnh}
          tieuDe={ndsp[2].tieuDe}
          gioiThieu={ndsp[2].gioiThieu}
          addCss="sp-caphe2"
        />
        <GTSanPham
          linkAnh={ndsp[3].linkAnh}
          tieuDe={ndsp[3].tieuDe}
          gioiThieu={ndsp[3].gioiThieu}
          addCss="sp-caphe3"
        />

      </Fragment>
    );
  }
}

export default SanPham;
