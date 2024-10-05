import { Controller, Get, Query, Req } from '@nestjs/common'
import { UserProfileService } from './user-profile.service';
import { User } from '@/auth/decorators/user.decorator'
import { Auth } from '@/auth/decorators/auth.decorator'

@Controller('user/me')
export class UserProfileController {
  constructor(private readonly userProfileService: UserProfileService) {}

	@Auth()
	@Get()
	async getUserInfo(@User('id') id: string) {
		return this.userProfileService.getUserInfo(id)
	}

	@Auth()
	@Get('/favorites')
	async getUserFavoriteProducts(
		@User('id') id: string,
		@Query('offset') offset?: number,
		@Query('limit') limit?: number
	) {
		offset = offset || 0
		limit = limit || 10
		return this.userProfileService.getUserFavoriteProducts(id, {offset, limit})
	}

	@Auth()
	@Get('/cart')
	async getUserCartProducts(
		@User('id') id: string,
		@Query('offset') offset?: number,
		@Query('limit') limit?: number
	) {
		offset = offset || 0
		limit = limit || 10
		return this.userProfileService.getUserCartProducts(id, {offset, limit})
	}

	@Auth()
	@Get('/purchased')
	async getUserPurchasedProducts(
		@User('id') id: string,
		@Query('offset') offset?: number,
		@Query('limit') limit?: number
	) {
		offset = offset || 0
		limit = limit || 10
		return this.userProfileService.getUserPurchasedProducts(id, {offset, limit})
	}
}
