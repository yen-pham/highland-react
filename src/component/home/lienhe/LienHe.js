import React, { Component } from 'react';

class LienHe extends Component {
  render() {
    return (
      <div className="lh-lienhe content">
  <div className="lh-form">
    <form action>
      <h1>LIÊN HỆ VỚI CHÚNG TÔI</h1>
      <h3>CHÚNG TÔI CÓ THỂ GIÚP GÌ CHO BẠN ?</h3>
      <label htmlFor="hoten">Họ tên</label>
      <div className="lh-input">
        <input type="text" name id="hoten" />
        <i className="fa fa-user-o" aria-hidden="true" />
      </div>
      <label htmlFor="email">Email:</label>
      <div className="lh-input">
        <input type="email" name id="email" />
        <i className="fa fa-envelope-o" aria-hidden="true" />
      </div>
      <label htmlFor="noidung">Nôi dung liên lạc:</label>
      <div className="lh-input">
        <textarea name id="noidung" cols={30} rows={8} defaultValue={""} />
        <i className="fa fa-pencil-square-o" aria-hidden="true" />
      </div>
      <label htmlFor="mabaove">Mã bảo vệ:</label>
      <div className="lh-input mabaove">
        <input type="text" name id="mabaove" />
        <i className="fa fa-shield" aria-hidden="true" />
        <img src="https://www.highlandscoffee.com.vn/includes/sec_image.php?code=DNDE3Og0&h=40&w=100" alt="" />
      </div>
      <button>GỬI</button>
    </form>
  </div>
</div>

    );
  }
}

export default LienHe;