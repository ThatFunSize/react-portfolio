import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class extends Component {
  constructor(props) {
    super(props);
  }

  deleteImage() {
    axios
      .delete(
        `https://api.devcamp.space/portfolio/${this.props.deleteLink}/${this.props.id}?image_type=${this.props.imageType}`,
        { withCredentials: true }
      )
      .then(response => {
        this.props.handleDeleteImage(this.props.imageType);
      })
      .catch(error => {
        console.log('deleteImage error', error);
      });
  }

  render() {
    return (
      <div className="image-removal-link">
        <a onClick={() => this.deleteImage()}>
          <FontAwesomeIcon icon="ban" />‍ Remove
        </a>
      </div>
    );
  }
}
