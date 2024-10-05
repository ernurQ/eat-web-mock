import { AuthCompanyService } from '@/auth/auth-company.service'
import { LoginDto } from '@/auth/dto'
import { RegisterCompanyDto } from '@/auth/dto/register-company'
import { Body, Controller, HttpCode, Post } from '@nestjs/common'
import {
	ApiBadRequestResponse,
	ApiConflictResponse,
	ApiTags,
	ApiUnauthorizedResponse
} from '@nestjs/swagger'

@ApiTags('Auth company')
@Controller('auth/company')
export class AuthCompanyController {
	constructor(private readonly authService: AuthCompanyService) {}

	/**
	 * register company
	 */
	@Post('register')
	@ApiConflictResponse({ description: 'User already exists' })
	async register(@Body() dto: RegisterCompanyDto) {
		return this.authService.register(dto)
	}

	/**
	 * login company
	 */
	@Post('login')
	@HttpCode(200)
	@ApiUnauthorizedResponse({ description: 'Invalid credentials' })
	@ApiBadRequestResponse({ description: 'User not found' })
	async login(@Body() dto: LoginDto) {
		return this.authService.login(dto)
	}
}
