import React, { Component } from 'react'
import './App.css'
import SearchBar from './containers/SearchBar'
import ImageList from './containers/ImageList'
import LoginDialog from './containers/LoginDialog'
import AppBar from 'material-ui/AppBar'

const styles = {
  title: {
    fontSize: '20px',
    height: '45px',
    lineHeight: '45px'
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar
          className="app-bar"
          titleStyle={styles.title}
          title="Jeffphy"
          showMenuIconButton={false}
        />
        <ImageList />
        <SearchBar />
        <LoginDialog />
      </div>
    )
  }
}

export default App
