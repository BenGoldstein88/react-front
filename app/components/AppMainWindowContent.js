import React from 'react';

export default class AppMainWindowContent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    	currentView: 'default'
    }
  }

  render() {
    return (
      <div style={{
      	border: '1px dotted green',
      	height: '95%',
      	marginTop: '2%',
      	width: '100%'
      }}>
      	This is the {this.state.currentView} page.
      </div>
    );
  }
}
