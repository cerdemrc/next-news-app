import Head from 'next/head';
import Header from '../components/Header/Header';

export default function Home() {
	return (
		<div className='container'>
			<Head>
				<title>News App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
		</div>
	);
}
