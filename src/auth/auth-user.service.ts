import { LoginDto, RegisterDto } from '@/auth/dto'
import { UsersService } from '@/users/users.service'

import { AuthService } from '@/auth/auth.service'
import {
	Injectable,
	NotFoundException,
	UnauthorizedException
} from '@nestjs/common'

@Injectable()
export class AuthUserService {
	constructor(
		private readonly authService: AuthService,
		private readonly usersService: UsersService
	) {}

	async register(dto: RegisterDto) {
		return 'register user'
	}

	async login(dto: LoginDto) {
		const user = await this.validateUser(dto)
		const { token } = await this.authService.getTokens(user.id)

		return { token, type: 'user' }
	}

	private async validateUser({ email, password }: LoginDto) {
		const user = await this.usersService.getByEmail(email)
		if (!user) throw new NotFoundException('User not found')

		if (user.password !== password) throw new UnauthorizedException('Invalid password')

		return user
	}
}
