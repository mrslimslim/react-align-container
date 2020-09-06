import React, { useState } from 'react';

function Container() {
  const [ width ] = useState(1000);
  const [ height ] = useState(1000);

  return (<React.Fragment>
    <canvas id="c" width={width} height={height}></canvas>
  </React.Fragment>);
}

export default Container;