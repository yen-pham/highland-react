import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div>
          <ul>
            <li className="veiwmap">
              <div>
                <a href>
                  <i className="fa fa-map-marker" aria-hidden="true" />
                  VIEW MAP
                </a>
              </div>
            </li>
            <li className="footer-icon">
              <ul>
                <li>
                  <a href>
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href>
                    <i className="fa fa-youtube" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href>
                    <i className="fa fa-instagram" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </li>
            <li className="tt tt-2">
              <span>© 2018 Highlands Coffee. All rights reserved</span>
            </li>
            <li className="tt">
              <a href>
                <i className="fa fa-paper-plane-o" aria-hidden="true" />
                <pre> </pre>Đăng ký để nhận bản tin
              </a>
            </li>
            <li className="tt">
              <a href>
                <i className="fa fa-envelope-o" aria-hidden="true" />
                <pre> </pre>customerservice@highlandscoffee.com.vn
              </a>
            </li>
          </ul>
        </div>
        <button className="btnthu">
          <i className="fa fa-envelope-o" aria-hidden="true" />
        </button>
        <button href="#header" className="btnlen">
          <i className="fa fa-chevron-up" aria-hidden="true" />
        </button>
      </footer>
    );
  }
}

export default Footer;
