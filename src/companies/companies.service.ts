import { Injectable, NotFoundException } from '@nestjs/common'
import { sampleCompanies } from '@/shared/constants/companies'


@Injectable()
export class CompaniesService {

	async getByEmail(email: string) {
		return sampleCompanies.find(company => company.email === email)
	}

	async getCompanyInfo(id: string) {
		const company =  sampleCompanies.find(company => company.id === id)
		if (!company) throw new NotFoundException('company not found')
		return {
			...company,
			email: undefined,
			password: undefined
		}
	}


}
