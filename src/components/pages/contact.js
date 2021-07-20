import React from 'react';
import contactImage from '../../../static/assets/images/auth/login.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: 'url(' + contactImage + ') no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="right-column">
        <div className="contact-bullet-points">
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="phone-square-alt" />
            </div>

            <div className="text">123-456-7890</div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="envelope" />
            </div>

            <div className="text">emailaddress@gmail.com</div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="map-marked-alt" />
            </div>

            <div className="text">111 Some Text Ln, New York, New York</div>
          </div>
        </div>
      </div>
    </div>
  );
}
