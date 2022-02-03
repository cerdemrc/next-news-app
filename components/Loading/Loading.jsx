import styles from './Loading.module.scss';

export default function Loading() {
	return (
		<div class={styles.spinner}>
			<div></div>
		</div>
	);
}
