import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div className="dh">
  <div className="dh-dien">
    <div className="dh-thongtin">
      <p className="dh-xacnhan">Xác nhận thông tin đơn hàng !</p>
      <div className="dh-input">
        <input type="text" placeholder="Nhập địa chỉ giao hàng" />
        <i className="fa fa-map-marker" aria-hidden="true" />
      </div>
      <div className="dh-input">
        <input type="text" placeholder="Người nhận" />
        <i className="fa fa-user-o" aria-hidden="true" />
      </div>
      <div className="dh-input">
        <input type="text" placeholder="Số điện thoại" />
        <i className="fa fa-phone" aria-hidden="true" />
      </div>
      <div className="dh-input">
        <input type="text" placeholder="Ghi chú" />
      </div>
    </div>
    <div className="dh-httt">
      <p className="dh-p">Hình thức thanh toán</p>
      <div className="dh-tt ">
        <ul>
          <li>
            <div>
              <input type="radio" name="tt" id="giaohang" />
              <label className="dh-label" htmlFor="giaohang"> <img src="https://order.thecoffeehouse.com/img/payment/cash.png" alt="" />Thanh
                toán khi giao hàng</label>
            </div>
          </li>
          <li>
            <div>
              <input type="radio" name="tt" id="atm" />
              <label className="dh-label" htmlFor="atm"> <img src="https://order.thecoffeehouse.com/img/payment/atm.png" alt="" />Thẻ ATM
                nội địa</label>
            </div>
          </li>
          <li>
            <div>
              <input type="radio" name="tt" id="zalo" />
              <label className="dh-label" htmlFor="zalo"> <img src="https://order.thecoffeehouse.com/img/payment/zalo.png" alt="" />ZaloPay</label>
            </div>
          </li>
        </ul>
      </div>
      <div className="dh-tt">
        <ul>
          <li>
            <div>
              <input type="radio" name="tt" id="visa" />
              <label className="dh-label" htmlFor="visa"><img src="https://order.thecoffeehouse.com/img/payment/visa.png" alt="" />Visa/Master/JCB</label>
            </div>
          </li>
          <li>
            <div>
              <input type="radio" name="tt" id="momo" />
              <label className="dh-label" htmlFor="momo"><img src="https://order.thecoffeehouse.com/img/payment/momo.png" alt="" />MoMo</label>
            </div>
          </li>
          <li>
            <div>
              <input type="radio" name="tt" id="air" />
              <label className="dh-label" htmlFor="air"><img src="https://order.thecoffeehouse.com/img/payment/airpay.png" alt="" />AirPay</label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

    );
  }
}

export default Form;