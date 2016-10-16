import React from 'react';
import AppMainWindowContent from './AppMainWindowContent'

export default class AppMainWindow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    	currentView: 'default'
    }

    this.handleCurrentViewChange = this.handleCurrentViewChange.bind(this)
  }

  handleCurrentViewChange(e) {
  	this.setState({
  		currentView: e.target.value
  	})
  }

  render() {
    return (
      <div style={{
      	border: '1px solid blue',
      	display: 'inline-block',
      	width: '100%',
      	height: '84%'
      }}>
      	THIS IS THE MAIN WINDOW FOR THE APP.
      	<AppMainWindowContent onCurrentViewChange={this.handleCurrentViewChange} currentView={this.state.currentView} />
      </div>
    );
  }
}
