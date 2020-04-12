import React, { Component } from 'react';
import GioiThieu from './GioiThieu';

var vct = [
  {
    tieuDe : 'KHỞI NGUỒN' ,
    gioiThieu :'Thương hiệu bắt nguồn từ cà phê Việt Nam' ,
    noiDung : 'Highlands Coffee® được sinh ra từ niềm đam mê bất tận với hạt cà phê Việt Nam. Qua một chặng đường dài, chúng tôi đã không ngừng mang đến những sản phẩm cà phê thơm ngon, sánh đượm trong không gian thoải mái và lịch sự với mức giá hợp lý. Những ly cà phê của chúng tôi không chỉ đơn thuần là thức uống quen thuộc mà còn mang trên mình một sứ mệnh văn hóa phản ánh một phần nếp sống hiện đại của người Việt Nam.' ,
    anh :'https://www.highlandscoffee.com.vn/vnt_upload/about/ABOUT-ORIGIN.png'
  },
  {
    tieuDe : 'DỊCH VỤ KHÁCH HÀNG' ,
    gioiThieu : 'Chào mừng bạn đến với Highlands Coffee®',
    noiDung : 'Chúng tôi mong muốn mang đến cho bạn những trải nghiệm đáng nhớ mỗi lần đến Highlands Coffee®. Hãy chia sẻ với chúng tôi để chúng tôi có thể mang đến cho bạn những trải nghiệm tuyệt vời hơn thế.',
    anh : 'https://www.highlandscoffee.com.vn/vnt_upload/about/About_Customer_service_2.jpg'
  },
  {
    tieuDe : 'NGHỀ NGHIỆP' ,
    gioiThieu : 'Hãy khởi đầu sự nghiệp cùng với Highlands Coffee®' ,
    noiDung : 'Với sứ mệnh trở thành thương hiệu cà phê Việt Nam dẫn đầu, Highlands Coffee® luôn tìm kiếm những ứng cử viên tiềm năng có chung niềm đam mê và nỗ lực cùng chúng tôi vươn tới thành công. Chúng tôi luôn chào đón các bạn gia nhập vào đội ngũ chuyên nghiệp của gia đình Highlands Coffee®.' ,
    anh : 'https://www.highlandscoffee.com.vn/vnt_upload/about/ABOUT-CAREER3.jpg'
  }
];
class VeChungToi extends Component {
  render() {
    return (
      <div class="vct-vechungtoi content">
        <GioiThieu tieuDe={vct[0].tieuDe} gioiThieu ={vct[0].gioiThieu} noiDung ={vct[0].noiDung} anh = {vct[0].anh} />
        <GioiThieu tieuDe={vct[1].tieuDe} gioiThieu ={vct[1].gioiThieu} noiDung ={vct[1].noiDung} anh = {vct[1].anh} addClass ='vct-right'/>
        <GioiThieu tieuDe={vct[2].tieuDe} gioiThieu ={vct[2].gioiThieu} noiDung ={vct[2].noiDung} anh = {vct[2].anh} addClass = 'vct-left3'/>
      </div>
    );
  }
}

export default VeChungToi;