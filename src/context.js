import React, { createContext } from 'react';

const context = createContext();

export const Provider = ({ store, children }) => (
	<context.Provider value={store}>
		{children}
	</context.Provider>
);

export const connect = mapStateToPropsFn => Component => () => (
	 <context.Consumer>
	 	{ store => <Component {...mapStateToPropsFn(store.getState())}/>}
	 </context.Consumer>
);