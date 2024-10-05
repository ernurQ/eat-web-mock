export class ProductEntity {
	id: string
	category: {
		id: string
		name: string
	}
	company: {
		id: string
		name: string
	}
	name: string
	description: string
	price: number
	thumbnail: string
	quantity: number
	expirationDate: Date
	discount: number
}
