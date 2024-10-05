import { Injectable } from '@nestjs/common'
import { sampleUsers } from '@/shared/constants/users'

@Injectable()
export class UsersService {

	async getById(id: string) {
		return sampleUsers.find(user => user.id === id)
	}

	async getByEmail(email: string) {
		return sampleUsers.find(user => user.email === email)
	}
}
