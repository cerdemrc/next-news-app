import '../public/styles/globals.scss';
import { ChakraProvider } from '@chakra-ui/react';
import Header from '../components/Header/Header';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

export default function App({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<Provider store={store}>
				<Header />
				<Component {...pageProps} />
			</Provider>
		</ChakraProvider>
	);
}
