import React, { Component } from 'react'
import { connect } from 'react-redux'

import actions from '../../actions'
import ImageGrid from '../../components/ImageGrid'

class ImageList extends Component {
  constructor() {
    super()
    this.imageLength = 0
  }

  componentDidMount() {
    this.props.subscribeToImages()
    this.scrollToBottom()
  }

  scrollToBottom = (cur = 0, prev = 0) => {
    this.imageLength = cur

    if (this.scrollRef && this.bottomRef && cur !== prev) {
      setTimeout(() => {
        // HACK
        this.bottomRef.scrollIntoView()
        this.scrollRef.scrollTop = this.scrollRef.scrollHeight
      }, 1000)
    }
  }

  render() {
    const { images = {} } = this.props
    const filteredImages = Object.keys(images).map(key => images[key])

    this.scrollToBottom(Object.keys(images).length, this.imageLength)

    return (
      <div
        className="image-scroll-container"
        ref={ref => this.scrollRef = ref}
      >
        <ImageGrid imageObjects={filteredImages} />
        <div ref={ref => this.bottomRef = ref}></div>
      </div>
    )
  }
}

const mapStateToProps = ({ images }) => ({
  images: images.results
})

const mapDispatchToProps = dispatch => ({
  subscribeToImages: term => dispatch({
    type: actions.SUBSCRIBE_TO_IMAGES
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(ImageList)
