import { Controller, Get, Param } from '@nestjs/common'
import { CompaniesService } from './companies.service'

@Controller('companies')
export class CompaniesController {
	constructor(private readonly companiesService: CompaniesService) {}

	@Get('/:id')
	async getCompanyInfo(@Param('id') id: string) {
		return this.companiesService.getCompanyInfo(id)
	}
}
