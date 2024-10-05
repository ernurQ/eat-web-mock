import { CompaniesController } from '@/companies/companies.controller'
import { CompaniesService } from '@/companies/companies.service'
import { Module } from '@nestjs/common'

@Module({
	controllers: [CompaniesController],
	providers: [CompaniesService],
	exports: [CompaniesService]
})
export class CompaniesModule {}
