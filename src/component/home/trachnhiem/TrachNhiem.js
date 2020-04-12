import React, { Component } from 'react';
import TinTucCT from '../tintuc/TinTucCT';

var trachNhiem = [
  {
    anh :'https://www.highlandscoffee.com.vn/vnt_upload/news/09_2019/thumbs/470_crop_Picture1.png',
    tieuDe : 'HIGHLANDS COFFEE CÙNG Ý TƯỞNG “LỒNG ĐÈN XANH” THẮP SÁNG "TRUNG THU XANH” CHO HƠN',
    thoiGian : '13/09/2019, 15:59'
  },
  {
    anh :'https://www.highlandscoffee.com.vn/vnt_upload/news/03_2018/thumbs/470_crop_KV_Highlands_CSR_1.jpg',
    tieuDe : 'ĐƯƠNG ĐẠI HÓA TRANH ĐÔNG HỒ!',
    thoiGian : '08/02/2018, 08:26'
  },
  {
    anh :'https://www.highlandscoffee.com.vn/vnt_upload/news/05_2018/thumbs/470_crop_IMG_0479.jpg',
    tieuDe : 'TRUNG THU YÊU THƯƠNG - LỚP HỌC CHO EM 2017',
    thoiGian : '09/10/2017, 21:39'
  }
]
class TrachNhiem extends Component {
  render() {
    return (
      <div className="tt-tintuc trachnhiem content">
      <h1>TRÁCH NHIỆM CỘNG ĐỒNG</h1>   
      {
            trachNhiem.map((item,key) =>(
              <TinTucCT key= {key} anh = {item.anh} tieuDe ={item.tieuDe} thoiGian ={item.thoiGian}/>
              )        
            ) 
          } 
      </div>
    );
  }
}

export default TrachNhiem;