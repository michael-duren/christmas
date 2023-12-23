import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params }) => {
	const card = {
		title: 'Dear Ma',
		content: 'HELLO FWIEND',
		image: '/images/Ma.JPG',
		params
	};

	return {
		card
	};
};
