export default function Error() {
	return (
		<div className='error'>
			<h1 className='errorTitle'>UPSSSS! We're sorry </h1>
			<p>Well, not exactly at we hoped for. Please can we try again.</p>

			<style jsx>{`
				.error {
					margin-top: 1.875rem;
					text-align: center;
					padding: 1.25rem;
					background: #eee;
					color: #999;
				}
				.errorTitle {
					font-size: 1.875rem;
					font-weight: bold;
				}
			`}</style>
		</div>
	);
}
