import { IsEmail, IsString } from 'class-validator'

export class RegisterCompanyDto {
	@IsString()
	name: string

	@IsString()
	description: string

	@IsString()
	location: string

	@IsEmail()
	email: string

	@IsString()
	password: string
}
