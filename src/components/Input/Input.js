import React, { Component } from 'react'

class Input extends Component {
  state = {
    inputValue: ''
  }

  updateInputValue = ({ target }) =>
    this.setState(() => ({ inputValue: target.value }))

  clearInput = () => this.setState(() => ({ inputValue: '' }))

  onEnter = () => {
    this.props.onEnter(this.state.inputValue)
    this.clearInput()
  }

  listenForEnter = (e) => e.keyCode === 13 && this.onEnter()

  render() {
    const { buttonText = 'Search', placeholder = 'Search' } = this.props

    return (
      <div className="input-container">
        <input
          type="text"
          placeholder={placeholder}
          value={this.state.inputValue}
          onChange={this.updateInputValue}
          onKeyDown={this.listenForEnter}
        />
        <button onClick={this.onEnter}>{buttonText}</button>
      </div>
    )
  }
}

export default Input
