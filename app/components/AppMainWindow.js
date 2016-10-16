import React from 'react';
import AppMainWindowContent from './AppMainWindowContent'

export default class AppMainWindow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    	currentView: 'default'
    }

    // this.handleCurrentViewChange = this.handleCurrentViewChange.bind(this)
    this.handleProcessPayment = this.handleProcessPayment.bind(this)
    this.handlePaymentSuccess = this.handlePaymentSuccess.bind(this)
    this.handlePaymentError = this.handlePaymentError.bind(this)

  }

  // handleCurrentViewChange(e) {
  // 	this.setState({
  // 		currentView: e.target.value
  // 	})
  // }

  handleProcessPayment(e) {
  	this.setState({
  		currentView: 'processing'
  	})
  }
  handlePaymentSuccess(e) {
  	this.setState({
  		currentView: 'paymentSuccess'
  	})
  }
  handlePaymentError(e) {
  	this.setState({
  		currentView: 'paymentError'
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
      	<AppMainWindowContent 
	      	onProcessPayment={this.handleProcessPayment} 
	      	onPaymentSuccess={this.handlePaymentSuccess} 
	      	onPaymentError={this.handlePaymentError} 
	      	currentView={this.state.currentView} />
      </div>
    );
  }
}
