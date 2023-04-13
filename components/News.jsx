import NewsItem from './NewsItem/newsItem';
import styles from '../public/styles/news.module.scss';
import Error from './Error';
import Loading from './Loading/Loading';
import { useEffect } from 'react';
import { fetchNews } from '../redux/newsSlice';
import { useSelector, useDispatch } from 'react-redux';
import usePagination from '../hooks/usePagination';
import { useState } from 'react';
import { Pagination } from '@mui/material';

export default function News({ category }) {
	let [page, setPage] = useState(1);
	const PER_PAGE = 8;
	const news = useSelector((state) => state.news.items);
	const status = useSelector((state) => state.news.status);

	const count = Math.ceil(news.length / PER_PAGE);
	const _DATA = usePagination(news, PER_PAGE);

	const handleChange = (e, p) => {
		setPage(p);
		_DATA.jump(p);
	};

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchNews(category));
	}, [dispatch]);

	if (status === 'failed') {
		<Error />;
	}

	return (
		<div className={styles.newsWrapper}>
			{status === 'loading' && <Loading />}
			<div className={styles.newsList}>
				{_DATA.currentData().map((item) => {
					return <NewsItem key={item.title} item={item} />;
				})}
			</div>
			<Pagination
				className='flex justify-center pt-10'
				count={count}
				page={page}
				onChange={handleChange}
			/>
		</div>
	);
}
