import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, faceBoxLocations }) => {

  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>
        {
          faceBoxLocations.map((face, i) => (
            <div
              key={i}
              className='bounding-box'
              style={{
                top: face.topRow,
                right: face.rightCol,
                bottom: face.bottomRow,
                left: face.leftCol
              }}
            >
            </div>
          ))
        }
        
      </div>
    </div>
  )
}

export default FaceRecognition