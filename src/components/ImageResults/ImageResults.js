import React, { Component } from 'react'

class ImageResults extends Component {
  render() {
    const {
      imageObjects = [],
      size = 'fixed_height_small'
    } = this.props

    return (
      <div className="image-results-container">
        <div className="image-results">
          {
            imageObjects.map((imgObj, key) => (
              <img
                src={imgObj.images[size].url} key={key}
                onClick={() => this.props.onImageClick(imgObj)}
                alt={imgObj.title}
              />
            ))
          }
        </div>
      </div>
    )
  }
}

export default ImageResults
