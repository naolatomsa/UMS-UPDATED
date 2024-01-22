import React from 'react';

function IMG(props) {
    const imgName=props.imgName;
    const size=props.size;
  return (
    <>
    {/* <p style={{color:'white'}}>Naol Atomsa</p> */}
    <img src={imgName} width={size} height={size} className="card__image"/>
    </>
  );
}
export default IMG;
