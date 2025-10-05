import React from 'react';
import Spinner from 'react-bootstrap/Spinner'; 
import Button from 'react-bootstrap/Button';
import rocket from '../assets/img/rocket.gif';

export function LoadingButton() {

  return (
    <>
    <div className='text-center mb-3'>
      <Button variant="primary" disabled>
        <img 
            src={rocket} 
            alt="Loading Rocket" 
            style={{ height: '100px', marginLeft: '5px' }}
        />Loading 3d Model...
      </Button>
    </div>

    </>
  );
}