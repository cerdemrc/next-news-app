import '../public/styles/globals.scss';
import Header from '../components/Header/Header';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

export default function App({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Header />
			<Component {...pageProps} />
		</Provider>
	);
}
