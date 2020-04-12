import React, { Component } from "react";
import ChiTietLoai from "./ChiTietLoai";
import SSanPham from "../chitietsanpham/SSanPham";
import SPKhac from "./SPKhac";

var loaiSP = [
  {
      tieuDe :'CÀ PHÊ PHIN',
      noiDung : 'Việt Nam tự hào sở hữu một di sản văn hóa cà phê giàu có, và \'Phin\' chính là linh hồn, là nét văn hóa thưởng thức cà phê đã ăn sâu vào tiềm thức biết bao người Việt. Cà phê rang xay được chiết xuất chậm rãi từng giọt một thông qua dụng cụ lọc bằng kim loại có tên là \'Phin\', cũng giống như thể hiện sự sâu sắc trong từng suy nghĩ và chân thành trong những mối quan hệ hiện hữu. Bạn có thể tùy thích lựa chọn uống nóng hoặc dùng chung với đá, có hoặc không có sữa đặc. Highlands Coffee tự hào phục vụ cà phê Việt theo cách truyền thống của người Việt.',
      anh : 'https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/menu-PSD-inside.jpg',
      sanPham : [
        {
          ten : 'Phin Sữa Đá',
          anh : 'https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_PHIN-SUA-DA.png',
          gioiThieu : 'Hương vị cà phê Việt Nam đích thực! Từng hạt cà phê hảo hạng được chọn bằng tay, phối'
        },
        {
          ten : 'Phin Đen Đá',
          anh : 'https://www.highlandscoffee.com.vn/vnt_upload/product/05_2018/thumbs/270_crop_CFD.png',
          gioiThieu : 'Dành cho những tín đồ cà phê đích thực! Hương vị cà phê truyền thống được phối trộn'
        }
      ]
  },
  {
    tieuDe : 'CÀ PHÊ ESPRESSO',
    noiDung : 'Hãy quên đi những bộn bề cuộc sống để tìm thấy những niềm vui nho nhỏ từ ly Cà phê Espresso của Highlands Coffee. Bí quyết để cho ra hương vị đậm đà, tinh tế của một tách cà phê Espresso là phương pháp phối trộn độc đáo, công phu giữa hai loại cà phê Arabica và Robusta thượng hạng, và đặc biệt là không   thể thiếu được kĩ năng pha chế điêu luyện từ các Barista của chúng tôi.',
    anh : 'https://www.highlandscoffee.com.vn/vnt_upload/product/05_2018/menu-ESPRESSO-inside-2VN.jpg',
    sanPham : [
      {
        ten : 'Latte',
        anh : 'https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_LATTE.png',
        gioiThieu : 'Ly cà phê sữa ngọt ngào đến khó quên! Với một chút nhẹ nhàng hơn so với Cappuccino,'
      },
      {
        ten : 'Cappuccino',
        anh : 'https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_CAPPUCINO.png',
        gioiThieu : 'Ly cà phê sữa đậm đà thời thượng! Một chút đậm đà hơn so với Latte,'
      }
    ]
  }
];
var sPKhac = [
  {
    ten : 'BÁNH MÌ',
    anh : 'https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/banh-mi-thit-nuong-vn.png',
    gioiThieu : 'Bạn đã quá quen thuộc với Bánh mì Việt Nam. Hãy nếm thử một miếng Bánh mì ngon, giòn, nóng hổi tại Highlands Coffee. Một kết hợp hoàn hảo giữa...'
  },
  {
    ten : 'KHÁC',
    anh : 'https://www.highlandscoffee.com.vn/vnt_upload/product/06_2018/menu-OTHERS-3.jpg',
    gioiThieu : 'Sẽ càng ngon miệng hơn khi bạn kết hợp đồ uống với những chiếc bánh ngọt thơm ngon được làm thủ công hàng ngày ngay tại bếp bánh của Highlands...'
  },
  {
    ten : 'TRÀ',
    anh : 'https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/menu-TEA_1.png',
    gioiThieu : 'Hương vị tự nhiên, thơm ngon của Trà Việt với phong cách hiện đại tại Highlands Coffee sẽ giúp bạn gợi mở vị giác của bản thân và tận hưởng một cảm...'
  }
]
class LoaiSanPham extends Component {
  
  render() {
    return (
      <div className="cp-caphe content">
        <div className="cp">
            <ChiTietLoai tieuDe={loaiSP[0].tieuDe} noiDung = {loaiSP[0].noiDung} anh= {loaiSP[0].anh} sanPham={loaiSP[0].sanPham} />
            <ChiTietLoai tieuDe={loaiSP[1].tieuDe} noiDung = {loaiSP[1].noiDung} anh= {loaiSP[1].anh} sanPham={loaiSP[1].sanPham}/>
        </div>
        <div className="cp-gtthem"> 
           <SPKhac sanPham = {sPKhac}/>
        </div>
      </div>
    );
  }
}

export default LoaiSanPham;
