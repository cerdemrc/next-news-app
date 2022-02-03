import Head from 'next/head';
import News from '../components/NewsItem/newsItem';
import Masonry from 'react-masonry-css';
import styles from '../public/styles/home.module.scss';
import { useEffect } from 'react';
import { fetchNews } from '../redux/newsSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading/Loading';
import Error from '../components/Error';

export default function App() {
	const dispatch = useDispatch();
	const news = useSelector((state) => state.news.items);
	const status = useSelector((state) => state.news.status);
	console.log(news);

	useEffect(() => {
		dispatch(fetchNews());
	}, [dispatch]);

	if (status === 'failed') {
		<Error />;
	}

	const breakpointColumnsObj = {
		default: 4,
		1100: 3,
		700: 2,
		500: 1,
	};

	return (
		<div className='container'>
			<Head>
				<title>News App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			{status === 'loading' && <Loading />}
			<Masonry
				breakpointCols={breakpointColumnsObj}
				className={styles.myMasonryGrid}
				columnClassName={styles.myMasonryGridColumn}>
				{news.map((item) => (
					<News item={item} />
				))}
			</Masonry>
		</div>
	);
}
