import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div>
          <ul>
            <li class="veiwmap">
              <div>
                <a href="">
                  <i class="fa fa-map-marker" aria-hidden="true"></i>VIEW MAP
                </a>
              </div>
            </li>
            <li class="footer-icon">
              <ul>
                <li>
                  <a href="">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i class="fa fa-youtube" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </li>
            <li class="tt tt-2">
              <span>© 2018 Highlands Coffee. All rights reserved</span>
            </li>
            <li class="tt">
              <a href="">
                <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
                <pre> </pre>Đăng ký để nhận bản tin
              </a>
            </li>
            <li class="tt">
              <a href="">
                <i class="fa fa-envelope-o" aria-hidden="true"></i>
                <pre> </pre>customerservice@highlandscoffee.com.vn
              </a>
            </li>
          </ul>
        </div>
        <button class="btnthu">
          <i class="fa fa-envelope-o" aria-hidden="true"></i>
        </button>
        <button href="#header" class="btnlen">
          <i class="fa fa-chevron-up" aria-hidden="true"></i>
        </button>
      </footer>
    );
  }
}

export default Footer;
