import { AuthService } from '@/auth/auth.service'
import { LoginDto } from '@/auth/dto'
import { RegisterCompanyDto } from '@/auth/dto/register-company'
import { CompaniesService } from '@/companies/companies.service'

import {
	Injectable,
	NotFoundException,
	UnauthorizedException
} from '@nestjs/common'

@Injectable()
export class AuthCompanyService {
	constructor(
		private readonly authService: AuthService,
		private readonly companiesService: CompaniesService
	) {}

	async register(dto: RegisterCompanyDto) {
		return 'register company'
	}

	async login(dto: LoginDto) {
		const company = await this.validateCompany(dto)
		const { token } = await this.authService.getTokens(company.id)
		return { token, type: 'company' }
	}

	private async validateCompany({ email, password }: LoginDto) {
		const company = await this.companiesService.getByEmail(email)
		if (!company) throw new NotFoundException('Company not found')

		if (company.password !== password) throw new UnauthorizedException('Invalid password')

		return company
	}
}
