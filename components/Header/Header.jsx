import React from 'react';
import styles from './Header.module.scss';

export default function Header() {
	return (
		<div className={styles.header}>
			<div className={styles.title}>
				<h1>The New York Times</h1>
				<p>This is just for demo purpose, you know.</p>
			</div>
			<div className={styles.nav}>
				<ul>
					<li>
						<a href='#'>World</a>
						<a href='#'>Politics</a>
						<a href='#'>Technology</a>
						<a href='#'>Science</a>
						<a href='#'>Sports</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
