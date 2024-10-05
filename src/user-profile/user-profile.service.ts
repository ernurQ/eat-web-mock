import { Injectable, NotFoundException } from '@nestjs/common'
import { UsersService } from '@/users/users.service'
import { sampleProducts } from '@/shared/constants/products'
import { IPagination } from '@/shared/types/pagination'

@Injectable()
export class UserProfileService {
	constructor(
		private readonly usersService: UsersService
	) {}

	async getUserInfo(id: string) {
		const user = await  this.usersService.getById(id)
		if (!user) throw new NotFoundException('user not found')
		return {
			...user,
			password: undefined
		}
	}

	async getUserFavoriteProducts(userId: string, {offset=0, limit=10}: IPagination) {
		return sampleProducts
			.slice(offset, offset + limit)
	}

	async getUserCartProducts(userId: string, {offset=0, limit=10}: IPagination) {
		const products = sampleProducts
			.slice(offset, offset + limit)
		return {
			products,
			total: products.reduce((total, product) => total + (product.price + product.quantity) * (1 - product.discount/100), 0)
		}
	}

	async getUserPurchasedProducts(userId: string, {offset=0, limit=10}: IPagination) {
		return sampleProducts
			.slice(offset, offset + limit)
	}
}
