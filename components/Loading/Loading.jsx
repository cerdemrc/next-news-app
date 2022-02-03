import styles from './Loading.module.scss';

export default function Loading() {
	return (
		<div className={styles.spinner}>
			<div></div>
		</div>
	);
}
