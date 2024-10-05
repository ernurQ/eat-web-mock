import { ProductEntity } from '@/products/entities/product.entity'

export const sampleProducts: ProductEntity[] = [
	{
		id: '1',
		category: {
			id: '1',
			name: 'Fruits',
		},
		company: {
			id: '1',
			name: 'Coffee Boom',
		},
		name: 'Apple',
		description: 'A fresh and crispy apple.',
		price: 1.2,
		thumbnail: 'https://example.com/images/apple.jpg',
		quantity: 100,
		expirationDate: new Date('2024-10-15'),
		discount: 0,
	},
	{
		id: '2',
		category: {
			id: 'cat2',
			name: 'Vegetables',
		},
		company: {
			id: '1',
			name: 'Green Valley',
		},
		name: 'Carrot',
		description: 'Organic carrots rich in vitamins.',
		price: 0.8,
		thumbnail: 'https://example.com/images/carrot.jpg',
		quantity: 200,
		expirationDate: new Date('2024-10-12'),
		discount: 10, // 10% discount
	},
	{
		id: '3',
		category: {
			id: 'cat1',
			name: 'Fruits',
		},
		company: {
			id: '1',
			name: 'Fresh Farms',
		},
		name: 'Banana',
		description: 'Sweet and ripe bananas.',
		price: 1.0,
		thumbnail: 'https://example.com/images/banana.jpg',
		quantity: 150,
		expirationDate: new Date('2024-10-20'),
		discount: 5, // 5% discount
	},
	{
		id: '4',
		category: {
			id: 'cat3',
			name: 'Dairy',
		},
		company: {
			id: '1',
			name: 'Dairy Delight',
		},
		name: 'Milk',
		description: 'Fresh whole milk from local farms.',
		price: 2.5,
		thumbnail: 'https://example.com/images/milk.jpg',
		quantity: 50,
		expirationDate: new Date('2024-10-08'),
		discount: 0,
	},
	{
		id: '5',
		category: {
			id: 'cat4',
			name: 'Bakery',
		},
		company: {
			id: '1',
			name: 'Bake House',
		},
		name: 'Bread',
		description: 'Freshly baked whole wheat bread.',
		price: 3.0,
		thumbnail: 'https://example.com/images/bread.jpg',
		quantity: 75,
		expirationDate: new Date('2024-10-05'),
		discount: 20, // 20% discount
	},
];
