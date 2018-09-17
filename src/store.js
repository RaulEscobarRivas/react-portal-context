import { createStore } from 'redux';

const initialState = { name: 'Raul Escobar' };

const store = createStore(() => initialState);

export default store;