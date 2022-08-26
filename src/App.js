import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import { GlobalProvider } from 'contexts/GlobalContext';
import Routes from 'routes';

export default function App() {
	return (
		<Provider store={store}>
			<GlobalProvider>
				<Routes />
			</GlobalProvider>
        </Provider>
	)
}