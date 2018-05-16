import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'

import Dialog from 'material-ui/Dialog'
import RaisedButton from 'material-ui/RaisedButton'

const styles = {
  dialogPadding: { padding: '10px' }
}

class LoginDialog extends Component {
  state = {
    name: ''
  }

  dialogAction = () => {
    const { name } = this.state
    return (
      <RaisedButton
        label="Start"
        primary={true}
        onClick={() =>
          this.props.signIn({ name })
        }
      />
    )
  }

  updateInputValue = ({ target }) =>
    this.setState(() => ({ name: target.value }))

  render() {
    const { user } = this.props

    return (
      <Dialog
        title="Add Your Name"
        actions={this.dialogAction()}
        modal={false}
        open={!user.name}
        bodyStyle={styles.dialogPadding}
        titleStyle={styles.dialogPadding}
      >
        <input
          type="text"
          className="dialog-input"
          onChange={this.updateInputValue}
        />
      </Dialog>
    )
  }
}

const mapStateToProps = ({ user }) => ({ user })

const mapDispatchToProps = dispatch => ({
  signIn: payload => dispatch({
    type: actions.USER_SIGN_IN,
    payload
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginDialog)
