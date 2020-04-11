import React, { Component } from 'react';

class GioHang extends Component {
  render() {
    return (
      <div class="ctsp-giohang ctsp-col3 dh-dh">
            <div class="ctsp-dathang">
                <button>ĐẶT HÀNG</button>
            </div>
            <div class="ctsp-spdd">
                <div class="ctsp-sl">
                    <button>1</button>
                </div>
                <div class="ctsp-tsp">
                    <h6>Phin đen nóng</h6>
                </div>
                <div class="ctsp-gtien">29.000 vnđ</div>
            </div>
            <div class="ctsp-cttien">
                <div class="ctsp-cong">
                    <p class="ctsp-congl">Cộng</p>
                    <p class="ctsp-congr">29.000 vnđ</p>
                </div>
                <div class="ctsp-cong">
                    <p class="ctsp-congl">Vận chuyển</p>
                    <p class="ctsp-congr">0 vnđ</p>
                </div>
                <div class="ctsp-uudai"><input type="text" placeholder="Nhập mã ưu đãi tại đây"/><button>ÁP
                        DỤNG</button></div>
            </div>
            <div class="ctsp-cttien">
                <div class="ctsp-cong">
                    <p class="ctsp-congl">Tổng Cộng</p>
                    <p class="ctsp-congr"><strong>29.000 vnđ</strong> </p>
                </div>

            </div>

        </div>
    );
  }
}

export default GioHang;