import NewsItem from './NewsItem/newsItem';
import Masonry from 'react-masonry-css';
import styles from '../public/styles/news.module.scss';
import Error from './Error';
import Loading from './Loading/Loading';
import { useEffect } from 'react';
import { fetchNews } from '../redux/newsSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function News({ category }) {
	const news = useSelector((state) => state.news.items);
	const status = useSelector((state) => state.news.status);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchNews(category));
	}, [dispatch]);

	if (status === 'failed') {
		<Error />;
	}

	const breakpointColumnsObj = {
		default: 4,
		1300: 2,
		600: 1,
	};

	return (
		<div className={styles.newsWrapper}>
			{status === 'loading' && <Loading />}
			<div className={styles.newsList}>
				{news.map((item) => (
					<NewsItem key={item.title} item={item} />
				))}
			</div>
		</div>
		// <div className={styles.newsWrapper}>
		// 	{status === 'loading' && <Loading />}
		// 	<Masonry
		// 		breakpointCols={breakpointColumnsObj}
		// 		className={styles.myMasonryGrid}
		// 		columnClassName={styles.myMasonryGridColumn}>
		// 		{news.map((item) => (
		// 			<NewsItem key={item.title} item={item} />
		// 		))}
		// 	</Masonry>
		// </div>
	);
}
