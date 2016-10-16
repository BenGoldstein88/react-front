import React from 'react';
import Processing from './MainWindowContent/Processing'

import PaymentSuccess from './MainWindowContent/PaymentSuccess'
import PaymentError from './MainWindowContent/PaymentError'
import MainWindowHome from './MainWindowContent/MainWindowHome'
export default class AppMainWindowContent extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
  	switch(this.props.currentView) {
  		case 'processing':
  			var currentComponent = <Processing />
  			break;
  		case 'paymentSuccess':
  			var currentComponent = <PaymentSuccess />
  			break;
  		case 'paymentError':
  			var currentComponent = <PaymentError />
  			break;
  		default:
  			var currentComponent = <MainWindowHome />
  	}
    return (
      <div style={{
      	border: '1px dotted green',
      	height: '90%',
      	marginTop: '2%',
      	width: '100%'
      }}>
      	{currentComponent}

      	<button type='button' onClick={this.props.onProcessPayment}>
      		Process Payment
      	</button>
      	<button type='button' onClick={this.props.onPaymentSuccess}>
      		Payment Success
      	</button>
      	<button type='button' onClick={this.props.onPaymentError}>
      		Payment Error
      	</button>

      </div>
    );
  }
}
