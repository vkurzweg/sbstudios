/**
*
* NamesFull
*
*/

import React from 'react';
// import styled from 'styled-components';


class NamesFull extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={{ position: 'relative', height: '120vh' }}>
        <a href='https://www.instagram.com/mxmttt/' target='_blank' style={{ textDecoration: 'none' }}>
          <h2 className='name-mobile'>
            Maxime Plescia-Buchi<br /><span style={{ fontSize: '3vw', marginLeft: '10vw' }}>@mxmttt</span>
          </h2>
        </a>
        <a href='https://www.instagram.com/giorgiodeduesanti/' target='_blank' style={{ textDecoration: 'none' }}>
        <h2 className='name-mobile name-right'>
            Giorgio<br /><span style={{ fontSize: '3vw', marginLeft: '10vw' }}>@giorgiodeduesanti</span>
          </h2>
        </a>
        <a href='https://www.instagram.com/jordalive/?hl=en' target='_blank' style={{ textDecoration: 'none' }}>
          <h2 className='name-mobile'>
            Jordan Angius<br /><span style={{ fontSize: '3vw', marginLeft: '10vw' }}>@jordalive</span>
          </h2>
        </a>
        <a href='https://www.instagram.com/paolo_bosson/?hl=en' target='_blank' style={{ textDecoration: 'none' }}>
         <h2 className='name-mobile name-right'>
            Paolo Bosson<br /><span style={{ fontSize: '3vw', marginLeft: '10vw' }}>@paolo_bosson</span>
          </h2>
        </a>
        <a href='https://www.instagram.com/zilba.1/' target='_blank' style={{ textDecoration: 'none' }}>
         <h2 className='name-mobile'>
            Labaz 1<br /><span style={{ fontSize: '3vw', marginLeft: '10vw' }}>@zilba.1</span>
          </h2>
        </a>
        <a href='https://www.instagram.com/stephane_devidal_tattoo/?hl=en' target='_blank' style={{ textDecoration: 'none' }}>
          <h2 className='name-mobile name-right'>
            Stephane Devidal<br /><span style={{ fontSize: '3vw', marginLeft: '10vw' }}>@stephane_devidal_tattoo</span>
          </h2>
        </a>
        <a href='https://www.instagram.com/diagal_faust/' target='_blank' style={{ textDecoration: 'none' }}>
         <h2 className='name-mobile'>
            Diego Thonney<br /><span style={{ fontSize: '3vw', marginLeft: '10vw' }}>@diagal_faust</span>
          </h2>
        </a>
        <a href='https://www.instagram.com/golda.kracks/' target='_blank' style={{ textDecoration: 'none' }}>
         <h2 className='name-mobile name-right'>
            Golda Kracks<br /><span style={{ fontSize: '3vw', marginLeft: '10vw' }}>@golda.kracks</span>
          </h2>
        </a>
        <a href='https://www.instagram.com/marco_romegialli/' target='_blank' style={{ textDecoration: 'none' }}>
          <h2 className='name-mobile'>
            Marco Romegialli<br /><span style={{ fontSize: '3vw', marginLeft: '10vw' }}>@marco_romegialli</span>
          </h2>
        </a>
      <a href='https://www.instagram.com/black_arm_tattoo/' target='_blank' style={{ textDecoration: 'none', paddingBottom: '5vh' }}>
        <h2 className='name-mobile name-right'>
          Matt Powers<br /><span style={{ fontSize: '3vw', marginLeft: '10vw' }}>@black_arm_tattoo</span>
        </h2>
      </a>
      </div>
    );
  }
}

NamesFull.propTypes = {

};

export default NamesFull;