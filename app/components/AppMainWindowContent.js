import React from 'react';

export default class AppMainWindowContent extends React.Component {




  render() {
    return (
      <div style={{
      	border: '1px dotted green',
      	height: '90%',
      	marginTop: '2%',
      	width: '100%'
      }}>
      	This is the {this.props.currentView} page.

      	<input type='text' onChange={this.props.onCurrentViewChange} />

      </div>
    );
  }
}
