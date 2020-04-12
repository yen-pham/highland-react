import React, { Component, Fragment } from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import LienHe from './lienhe/LienHe';
import VeChungToi from './vechungtoi/VeChungToi';
import CTVeChungToi from './chitietvechungtoi/CTVeChungToi';
import CTSanPham from './chitietsanpham/CTSanPham';
import Highlands from './highlands/Highlands';
import SanPham from './sanpham/SanPham';
import LoaiSanPham from './loaisanpham/LoaiSanPham';
import TinTuc from './tintuc/TinTuc';
import TrachNhiem from './trachnhiem/TrachNhiem';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <TrachNhiem/>
        <Footer/>
      </Fragment>
    );
  }
}

export default Home;