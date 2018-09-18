import React, { Component } from 'react';

const White = ({ counter, inc }) => (
	<div className='white'>
		<div className='button'>
			{counter}
			<button onClick={inc}>Increment!</button>
		</div>
	</div>
);

const Green = props => (
	<div className='green'>
		<White {...props} />
	</div>
);

const Blue = props => (
	<div className='blue'>
		{props.counter}
		<Green {...props} />
	</div>
);

class Boxes extends Component {
	state = {
		counter: 0,
		inc: () => { this.setState({ counter: this.state.counter + 1 }) }
	};

	render() {
		return (
			<div>
				<Blue {...this.state} />
			</div>
		);
	}
}

export default Boxes;