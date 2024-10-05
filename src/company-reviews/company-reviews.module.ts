import { Module } from '@nestjs/common';
import { CompanyReviewsService } from './company-reviews.service';
import { CompanyReviewsController } from './company-reviews.controller';

@Module({
  controllers: [CompanyReviewsController],
  providers: [CompanyReviewsService],
})
export class CompanyReviewsModule {}
