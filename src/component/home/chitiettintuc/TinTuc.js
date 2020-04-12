import React, { Component } from 'react';
import NDTinTuc from './NDTinTuc';
import HDTinTuc from './HDTinTuc';

class TinTuc extends Component {
  render() {
    return (
      <div className="cttt-noidung content">
        <div className="cttt-chitiet">    
        <NDTinTuc/>
        <HDTinTuc/>    
      </div>
      </div>
    );
  }
}

export default TinTuc;