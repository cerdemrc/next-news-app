import styles from './newsItem.module.scss';

export default function News({ item }) {
	return (
		<a className='relative rounded-3xl' href={item.url}>
			<img className={styles.newsImage} src={item.imageUrl} />
			<div className={styles.newsCard}>
				<h5 className={styles.date}>{item.date}</h5>
				<h1 className={styles.title}>{item.title}</h1>
			</div>
		</a>
	);
}
