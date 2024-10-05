import { AuthUserService } from '@/auth/auth-user.service'
import { LoginDto, RegisterDto } from '@/auth/dto'
import { Body, Controller, HttpCode, Post } from '@nestjs/common'
import {
	ApiBadRequestResponse,
	ApiConflictResponse,
	ApiTags,
	ApiUnauthorizedResponse
} from '@nestjs/swagger'

@ApiTags('Auth')
@Controller('auth/user')
export class AuthUserController {
	constructor(private readonly authService: AuthUserService) {}

	/**
	 * register
	 */
	@Post('register')
	@ApiConflictResponse({ description: 'User already exists' })
	async register(@Body() dto: RegisterDto) {
		return this.authService.register(dto)
	}

	/**
	 * login
	 */
	@Post('login')
	@HttpCode(200)
	@ApiUnauthorizedResponse({ description: 'Invalid credentials' })
	@ApiBadRequestResponse({ description: 'User not found' })
	async login(@Body() dto: LoginDto) {
		return this.authService.login(dto)
	}
}
