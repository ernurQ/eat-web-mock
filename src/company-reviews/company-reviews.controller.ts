import { Controller, Get, Param, Query } from '@nestjs/common'
import { CompanyReviewsService } from './company-reviews.service';

@Controller('reviews/company')
export class CompanyReviewsController {
  constructor(private readonly companyReviewsService: CompanyReviewsService) {}

	@Get(':id')
	async getCompanyReviews(
		@Param('id') id: string,
		@Query('offset') offset?: number,
		@Query('limit') limit?: number
	) {
		offset = offset || 0
		limit = limit || 10
		return this.companyReviewsService.getCompanyReviews(id, {offset, limit})
	}
}
