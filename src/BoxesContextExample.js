import React, { Component } from 'react';

const White = ({ counter, increment }) => (
	<div className='white'>
		{counter}
		<div className='button'>
			<button onClick={increment}>Increment!</button>
		</div>
	</div>
);

const Green = props => (
	<div className='green'>
		<White {...props}/>
	</div>
);

const Blue = props => (
	<div className='blue'>
		{props.counter}
		<Green {...props}/>
	</div>
);

class Boxes extends Component {
	state = {
		counter: 0
	};

	increment = () => this.setState({ counter: this.state.counter + 1 });

	render() {
		return (
			<Blue counter={this.state.counter} increment={this.increment}/>
		);
	}
}

export default Boxes;