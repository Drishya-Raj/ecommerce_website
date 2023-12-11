import React from 'react'
import Button from '../button';
import {Link } from 'react-router-dom';
import * as images from '../images';

function Notfound() {
  return (
    <div className='notfound'>
      <img src={images?.notfound} alt="pagenotfound" />
      <h2>404 Not Found</h2>
      <p>Oops !! The page you are looking for does not exist.</p>
      <Link to="/signUp">
        <Button className="back-to-login" value="Back to Login" />
      </Link>
    </div>
  );
};

export default Notfound