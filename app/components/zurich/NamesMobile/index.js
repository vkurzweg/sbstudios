/**
*
* InstaHover
*
*/

import React from 'react';
// import styled from 'styled-components';


class InstaHover extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={{ width: '80%', margin: '0 auto', paddingTop: '30vh', overflowY: 'scroll', height: '100%', paddingBottom: '10vh' }}>
        <h2 onClick={this.props.openLightbox.bind(this, '1789183639')} className='name-mobile'>
          Maxime Plescia-Buchi<br /><span style={{ fontSize: '10px', letterSpacing: '1.24px', textTransform: 'uppercase', marginLeft: '10vw' }}>@mxmttt</span>
        </h2>
        <h2 onClick={this.props.openLightbox.bind(this, '55968406')} className='name-mobile name-right'>
          Giorgio<br /><span style={{ fontSize: '10px', letterSpacing: '1.24px', textTransform: 'uppercase', marginLeft: '10vw' }}>@giorgiodeduesanti</span>
        </h2>
        <h2 onClick={this.props.openLightbox.bind(this, '51624775')} className='name-mobile'>
          Jordan Angius<br /><span style={{ fontSize: '10px', letterSpacing: '1.24px', textTransform: 'uppercase', marginLeft: '10vw' }}>@jordalive</span>
        </h2>
        <h2 onClick={this.props.openLightbox.bind(this, '378914167')} className='name-mobile name-right'>
          Paolo Bosson<br /><span style={{ fontSize: '10px', letterSpacing: '1.24px', textTransform: 'uppercase', marginLeft: '10vw' }}>@paolo_bosson</span>
        </h2>
        <h2 onClick={this.props.openLightbox.bind(this, '1529406200')} className='name-mobile'>
          Labaz 1<br /><span style={{ fontSize: '10px', letterSpacing: '1.24px', textTransform: 'uppercase', marginLeft: '10vw' }}>@zilba.1</span>
        </h2>
        <h2 onClick={this.props.openLightbox.bind(this, '2179164383')} className='name-mobile name-right'>
          Stephane Devidal<br /><span style={{ fontSize: '10px', letterSpacing: '1.24px', textTransform: 'uppercase', marginLeft: '10vw' }}>@stephane_devidal_tattoo</span>
        </h2>
        <h2 onClick={this.props.openLightbox.bind(this, '1210201419')} className='name-mobile'>
          Diego Thonney<br /><span style={{ fontSize: '10px', letterSpacing: '1.24px', textTransform: 'uppercase', marginLeft: '10vw' }}>@diagal_faust</span>
        </h2>
        <h2 onClick={this.props.openLightbox.bind(this, '2268101836')} className='name-mobile name-right'>
          Golda Kracks<br /><span style={{ fontSize: '10px', letterSpacing: '1.24px', textTransform: 'uppercase', marginLeft: '10vw' }}>@golda.kracks</span>
        </h2>
        <h2 onClick={this.props.openLightbox.bind(this, '1599024779')} className='name-mobile'>
          Marco Romegialli<br /><span style={{ fontSize: '10px', letterSpacing: '1.24px', textTransform: 'uppercase', marginLeft: '10vw' }}>@marco_romegialli</span>
        </h2>
        <h2 onClick={this.props.openLightbox.bind(this, '17337198')} className='name-mobile name-right'>
          Matt Powers<br /><span style={{ fontSize: '10px', letterSpacing: '1.24px', textTransform: 'uppercase', marginLeft: '10vw' }}>@black_arm_tattoo</span>
        </h2>
    </div>
    );
  }
}

InstaHover.propTypes = {

};

export default InstaHover;
