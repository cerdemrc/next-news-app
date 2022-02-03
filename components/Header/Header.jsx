import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
	return (
		<div className={styles.header}>
			<div className={styles.title}>
				<Link href='/'>
					<a>The Inshorts News</a>
				</Link>
				<p>This is just for demo purpose, you know.</p>
			</div>
			<div className={styles.nav}>
				<ul className={styles.scroll}>
					<li>
						<Link href='/world'>
							<a href='#'>World</a>
						</Link>
						<Link href='/politics'>
							<a href='#'>Politics</a>
						</Link>
						<Link href='/technology'>
							<a href='#'>Technology</a>
						</Link>
						<Link href='/science'>
							<a href='#'>Science</a>
						</Link>
						<Link href='/business'>
							<a href='#'>Business</a>
						</Link>
						<Link href='/startup'>
							<a href='#'>Startup</a>
						</Link>
						<Link href='/sports'>
							<a href='#'>Sports</a>
						</Link>
						<Link href='/entertainment'>
							<a href='#'>Entertainment</a>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}
