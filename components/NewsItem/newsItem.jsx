import styles from './newsItem.module.scss';

export default function News({ item }) {
	return (
		<div className='relative pb-14'>
			<img src={item.imageUrl} />
			<div className={styles.newsCard}>
				<h5 className={styles.date}>{item.date}</h5>
				<h1 className={styles.title}>{item.title}</h1>
				<p className={styles.content}>{item.content}</p>
				<h5 className={styles.author}>Author: {item.author}</h5>
				<a className={styles.url} href={item.url}>
					Read Me
				</a>
			</div>
		</div>
	);
}
