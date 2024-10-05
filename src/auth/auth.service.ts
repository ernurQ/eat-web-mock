import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
	constructor(private readonly jwtService: JwtService) {}

	async getTokens(id: string) {
		const payload = { sub: id}
		const token = this.jwtService.sign(payload)
		return { token }
	}
}