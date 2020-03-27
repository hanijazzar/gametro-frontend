import React from 'react';

const NotFound = () => {
  return (
    <div style={{minHeight: '360px', padding: '70px 0px 20px 0'}}>
      <h1 className='x-large text-primary text-center'>
        <i className='fa fa-exclamation-triangle' /> Page Not Found
      </h1>
      <p className='large text-center'>Sorry, this page does not exist</p>
    </div>
  );
};

export default NotFound;
