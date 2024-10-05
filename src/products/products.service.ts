import { Injectable, NotFoundException } from '@nestjs/common'
import { IPagination } from '@/shared/types/pagination'
import { sampleProducts } from '@/shared/constants/products'

@Injectable()
export class ProductsService {
	async getProducts({name, category, limit=10, offset=0}: IPagination & {name?: string, category?: string}) {
		name = name?.toLowerCase() || ''
		category = category?.toLowerCase() || ''
		return sampleProducts
			.sort()
			.filter(
				product => product.name
					.toLowerCase()
					.includes(name)
			)
			.filter(
				product => product.category.name
					.toLowerCase()
					.includes(category)
			)
			.slice(offset, offset + limit)
	}

	async getProductById(id: string) {
		const product = sampleProducts.find(product => product.id === id)
		if (!product) throw new NotFoundException('product not found')
		return product
	}

	async getProductsByCompanyId(id: string, {limit=10, offset=0}: IPagination) {
		return sampleProducts
			.filter(product => product.company.id === id)
			.slice(offset, limit + offset)
	}
}
