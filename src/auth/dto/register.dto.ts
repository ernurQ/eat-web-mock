import { IsEmail, IsString } from 'class-validator'

export class RegisterDto {
	@IsString()
	name: string

	@IsString()
	surname: string

	@IsEmail()
	email: string

	@IsString()
	password: string
}
