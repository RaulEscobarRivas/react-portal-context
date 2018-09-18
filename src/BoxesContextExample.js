import React, { Component } from 'react';
import { createPortal } from 'react-dom';


const White = ({ counter }) => (
	<div className='white'>
		<div className='button'>
			{counter}
			<button>Increment!</button>
		</div>
	</div>
);

const Green = () => (
	<div className='green'>
	</div>
);


class Blue extends Component {
	state = {
		counter: 0,
		inc: () => { this.setState({ counter: this.state.counter + 1 }) }
	};

	render() {
		return (
			<div onClick={this.state.inc} className='blue'>
				{this.state.counter}
				{ createPortal(<White counter={this.state.counter}/>, document.getElementById('portal'))}
				<Green />
			</div>
		);
	}
}

export default Blue;