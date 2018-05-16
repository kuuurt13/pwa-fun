import React, { Component } from 'react'
import { connect } from 'react-redux'

import './SearchBar.css'
import actions from '../../actions'
import Input from '../../components/Input'
import ImageResults from '../../components/ImageResults'

class SearchBar extends Component {
  onImageClick = (imageObj) => {
    this.props.addImage(imageObj)
    this.props.clearSearchImages()
  }

  render() {
    const { results, searchImages } = this.props

    return (
      <div className="search-bar">
        <Input
          onEnter={searchImages}
          buttonText=">"
        />
        <ImageResults
          imageObjects={results}
          onImageClick={this.onImageClick}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ search }) => ({
  results: search.results
})

const mapDispatchToProps = dispatch => ({
  searchImages: term => dispatch({
    type: actions.SEARCH_IMAGES,
    payload: { term }
  }),
  clearSearchImages: term => dispatch({
    type: actions.CLEAR_SEARCH_IMAGES
  }),
  addImage: image => dispatch({
    type: actions.ADD_IMAGE,
    payload: image
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
