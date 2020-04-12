import React, { Component } from "react";

class SSanPham extends Component {
  render() {
    return (
      <div className="cttd-sanpham">
        <div className="cttd-button">
          <button className="cttd-trai">
            <i className="fa fa-chevron-left" aria-hidden="true" />
          </button>
          <button className="cttd-phai">
            <i className="fa fa-chevron-right" aria-hidden="true" />
          </button>
        </div>

        <div className="cttd-show">
          <div className="cttd-sp">
            <div className="cttd-anh">
              <a href>
                <img
                  src="https://www.highlandscoffee.com.vn/vnt_upload/product/05_2018/thumbs/270_crop_CFD.png"
                  alt=""
                />
              </a>
            </div>
            <div className="cttd-gia">
              <a href>PHIN ĐEN ĐÁ</a>
              <p>
                Giá: <strong>29,000 VNĐ</strong>
              </p>
            </div>
          </div>
          <div className="cttd-sp">
            <div className="cttd-anh">
              <a href>
                <img
                  src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_AMERICANO.png"
                  alt=""
                />
              </a>
            </div>
            <div className="cttd-gia">
              <a href>PHIN ĐEN NÓNG</a>
              <p>
                Giá: <strong>29,000 VNĐ</strong>
              </p>
            </div>
          </div>
          <div className="cttd-sp cttd-spcuoi">
            <div className="cttd-anh">
              <a href>
                <img
                  src="https://www.highlandscoffee.com.vn/vnt_upload/product/06_2018/thumbs/270_crop_PHIN-SUA-NONG.png"
                  alt=""
                />
              </a>
            </div>
            <div className="cttd-gia">
              <a href>PHIN SỮA NÓNG</a>
              <p>
                Giá: <strong>29,000 VNĐ</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SSanPham;
