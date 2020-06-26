import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import gatsby from '../images/gatsby-icon.png';

function TestPg() {
  return (
    <div className='blogMainPgLargeImg'>
      <Parallax className="custom-class" y={[-50, 10]} tagOuter="figure">
        <img style={{ width: '50%', }} src={gatsby} />
      </Parallax>
    </div>
  )
}

export default TestPg
