import { Injectable } from '@nestjs/common';
import { sampleCompanyReviews } from '@/shared/constants/company-reviews'
import { IPagination } from '@/shared/types/pagination'

@Injectable()
export class CompanyReviewsService {

	async getCompanyReviews(id: string, {offset=0, limit=10}: IPagination) {
		return sampleCompanyReviews
			.sort()
			.filter(review => review.companyId === id)
			.slice(offset, offset + limit)
	}
}
