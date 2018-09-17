import React, { Component, createContext } from 'react';

const AppContext = createContext();

const White = () => (
	<div className='white'>
		<AppContext.Consumer>
			{(context) => ([
				context.counter,
				<div className='button'>
					<button onClick={context.increment}>Increment!</button>
				</div>
			])}
		</AppContext.Consumer>
	</div>
);

const Green = () => (
	<div className='green'>
		<White/>
	</div>
);

const Blue = () => (
	<div className='blue'>
		<AppContext.Consumer>
			{(context) => context.counter}
		</AppContext.Consumer>
		<Green/>
	</div>
);

class AppContextProvider extends Component {
	state = {
		counter: 0,
		increment: () => { this.setState({ counter: this.state.counter + 1 }) }
	};

	render() {
		return (
			<AppContext.Provider value={this.state}>
				<Blue />
			</AppContext.Provider>
		);
	}
}

export default AppContextProvider;