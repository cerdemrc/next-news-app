import Head from 'next/head';
import News from '../components/News';

export default function App() {
	return (
		<div className='container'>
			<Head>
				<title>News App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<News category='all' />
		</div>
	);
}
