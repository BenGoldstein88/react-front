import React from 'react';
import AppMainWindowContent from './AppMainWindowContent'

export default class AppMainWindow extends React.Component {


  render() {
    return (
      <div style={{
      	border: '1px solid blue',
      	display: 'inline-block',
      	width: '100%',
      	height: '84%'
      }}>
      	THIS IS THE MAIN WINDOW FOR THE APP.
      	<AppMainWindowContent />
      </div>
    );
  }
}
