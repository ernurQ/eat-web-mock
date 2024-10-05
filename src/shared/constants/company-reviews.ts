// TODO: change profile photo

import { CompanyReviewEntity } from '@/company-reviews/entities/companyReviewEntity'

export const sampleCompanyReviews: CompanyReviewEntity[] = [
	{
		id: '1',
		user: {
			id: '1',
			name: 'Ернур',
			surname: 'Гарифуллин',
			profileImage: 'https://example.com/images/ernur.jpg',
		},
		companyId: '1',
		rating: 5,
		content: 'Great company, fast delivery, and excellent customer service. Highly recommended!',
		createdAt: new Date('2024-09-25T10:15:00'),
	},
	{
		id: '2',
		user: {
			id: '1',
			name: 'Ернур',
			surname: 'Гарифуллин',
			profileImage: 'https://example.com/images/ernur.jpg',
		},
		companyId: '1',
		rating: 4,
		content: 'Good product quality but there was a slight delay in delivery. Overall, satisfied.',
		createdAt: new Date('2024-09-26T11:30:00'),
	},
	{
		id: '3',
		user: {
			id: '1',
			name: 'Ернур',
			surname: 'Гарифуллин',
			profileImage: 'https://example.com/images/ernur.jpg',
		},
		companyId: '1',
		rating: 3,
		content: 'Average experience. The product was fine, but the customer service could be better.',
		createdAt: new Date('2024-09-27T09:45:00'),
	},
	{
		id: '4',
		user: {
			id: '1',
			name: 'Ернур',
			surname: 'Гарифуллин',
			profileImage: 'https://example.com/images/ernur.jpg',
		},
		companyId: '2',
		rating: 2,
		content: 'Not satisfied. The product was not as described and the support was unhelpful.',
		createdAt: new Date('2024-09-28T14:00:00'),
	},
	{
		id: '5',
		user: {
			id: '1',
			name: 'Ернур',
			surname: 'Гарифуллин',
			profileImage: 'https://example.com/images/ernur.jpg',
		},
		companyId: '2',
		rating: 1,
		content: 'Terrible experience. Product arrived damaged and there was no support for replacement.',
		createdAt: new Date('2024-09-29T16:20:00'),
	},
];

