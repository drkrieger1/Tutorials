import React from 'react';
import logo from '../../assets/404.png';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 className="display-4">404 Page Not Found</h1>
      <p className="lead">Sorry, that page does not exist</p>
      <img style={{ width: '50%' }} src={logo} />
    </div>
  );
}
