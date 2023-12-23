import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { cards } from './cards';
import type { Card } from '$lib/types/Card';

export const load: PageServerLoad = ({ params }): { card: Card } => {
	const split = params.slug.split('-');
	if (split.length !== 2) {
		error(404, 'Not found. Invalid full name.');
	}

	const [firstName, lastName] = split;

	const card = cards.find(
		(card) =>
			card.firstName.toLowerCase() === firstName.toLowerCase() &&
			card.lastName.toLowerCase() === lastName.toLowerCase()
	);

	if (!card) {
		return {
			card: {
				firstName: '',
				lastName: '',
				title: `Welcome ${firstName}!`,
				content:
					'I hope you are having a great holiday season! Thank you for visiting my site. I hope you enjoy the card.',
				image: '/icons/Cooking_2.png',
				signature: 'Best wishes, '
			}
		};
	}

	return {
		card
	};
};
