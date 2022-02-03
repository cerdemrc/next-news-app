import News from '../components/News';
import { useRouter } from 'next/router';

export default function sports() {
	const router = useRouter();
	const category = router.route.split('/')[1];

	return <News category={category} />;
}
