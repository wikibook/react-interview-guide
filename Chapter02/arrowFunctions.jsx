import React from 'react'

class Component extends React.PureComponent {
  handleUserDetails() {
    console.log('Show User details')
  }

  render() {
    return <button onClick={() => this.handleUserDetails()}>Profile</button>
  }
}
