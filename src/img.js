import React from 'react';

function IMG(props) {
    const imgName=props.imgName;
    const size=props.size;
  return (
    <>
    <img src={imgName} width={size} height={size} className="card__image"/>
    </>
  );
}
export default IMG;
