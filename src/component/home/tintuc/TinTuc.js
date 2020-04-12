import React, { Component } from "react";
import TinTucCT from "./TinTucCT";

var DSTinTuc = [
  {
      anh : 'https://www.highlandscoffee.com.vn/vnt_upload/news/02_2018/thumbs/470_crop_HL20_470x314-01.png',
      tieuDe : 'Thư Xin Lỗi Chính Thức Khách Hàng Lê Văn Trường',
      thoiGian : ' 20/02/2020, 07:35'
  },
  {
      anh : 'https://www.highlandscoffee.com.vn/vnt_upload/news/02_2020/thumbs/470_crop_82667614_2845674332180059_8209717131743330304_o-Recovered.png',
      tieuDe : 'LỊCH MỞ CỬA TẾT 2020 - HIGHLANDS COFFEE',
      thoiGian : '20/02/2020, 07:35'
  },
  {
      anh : 'https://www.highlandscoffee.com.vn/vnt_upload/news/02_2020/thumbs/470_crop_83739091_2845644318849727_1748210367038750720_o_1.png',
      tieuDe : 'DANH SÁCH QUÁN CÓ ÁP DỤNG KHUNG GIÁ MỚI',
      thoiGian : '20/02/2020, 07:35'
  },
  {
      anh : 'https://www.highlandscoffee.com.vn/vnt_upload/news/01_2020/thumbs/470_crop_Thumbnail-01.png',
      tieuDe : 'ĐIỀU KIỆN ÁP DỤNG CHƯƠNG TRÌNH ƯU ĐÃI',
      thoiGian : '10/01/2020, 11:48'
  },
  {
      anh : 'https://www.highlandscoffee.com.vn/vnt_upload/news/12_2019/thumbs/470_crop_tra-sen-vang-moi.png',
      tieuDe : 'UỐNG TRÀ SEN VÀNG MỚI - NHẬN VÔ VÀN ƯU ĐÃI SEN VÀNG',
      thoiGian : '04/12/2019, 23:50'
  },
  {
      anh : 'https://www.highlandscoffee.com.vn/vnt_upload/news/10_2019/thumbs/470_crop_hco-7598-20-years-concert-web-470x314_1.jpg',
      tieuDe : 'ĐẠI TIỆC ÂM NHẠC: HIGHLANDS COFFEE 20 NĂM - GẮN KẾT NIỀM TỰ HÀO ĐẤT VIỆT',
      thoiGian : '28/10/2019, 12:05'
  },
  {
      anh : 'https://www.highlandscoffee.com.vn/vnt_upload/news/10_2019/thumbs/470_crop_HCO-7598-20-YEARS-NEWS-BANNER-NEWS-470X314.jpg',
      tieuDe : 'HIGHLANDS COFFEE: TRỌN VẸN TUỔI 20 CÙNG HÀNH TRÌNH GẮN KẾT “NIỀM TỰ HÀO ĐẤT VIỆT”',
      thoiGian : '22/10/2019, 15:59'
  },
  {
      anh : 'https://www.highlandscoffee.com.vn/vnt_upload/news/10_2019/thumbs/470_crop_HL20_470x314.png',
      tieuDe : 'HIGHLANDS COFFEE: 20 NĂM – GẮN KẾT NIỀM TỰ HÀO ĐẤT VIỆT',
      thoiGian : '01/10/2019, 18:14'
  },
  {
      anh : 'https://www.highlandscoffee.com.vn/vnt_upload/news/08_2019/thumbs/470_crop_Highlands_-_Freeze_Tra_Xanh_-_KV_Phase_1_470x312.jpg',
      tieuDe : 'TẬN HƯỞNG FREEZE TRÀ XANH - TRÀ XANH ĐẬM ĐÀ, THẠCH GIÒN KHÓ CƯỠNG!',
      thoiGian : '05/08/2019, 17:52'
  }

]
class TinTuc extends Component {
  render() {
    console.log(DSTinTuc);

    return (
      <div className="content">
        <div className="tt-tintuc">
          <h1>TIN TỨC</h1>
          {
            DSTinTuc.map((item,key) =>(
              <TinTucCT key= {key} anh = {item.anh} tieuDe ={item.tieuDe} thoiGian ={item.thoiGian}/>
              )
            
            ) 
          }
          <button>XEM THÊM</button>
        </div>
      </div>
    );
  }
}

export default TinTuc;
