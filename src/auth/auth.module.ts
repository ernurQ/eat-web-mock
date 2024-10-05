import { AuthCompanyController } from '@/auth/auth-company.controller'
import { AuthCompanyService } from '@/auth/auth-company.service'
import { AuthUserController } from '@/auth/auth-user.controller'
import { AuthUserService } from '@/auth/auth-user.service'
import { AuthService } from '@/auth/auth.service'
import { JwtStrategy } from '@/auth/passport'
import { CompaniesModule } from '@/companies/companies.module'
import { JwtConfig } from '@/config/configuration'
import { UsersModule } from '@/users/users.module'
import { Module } from '@nestjs/common'
import { ConfigType } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'

@Module({
	imports: [
		PassportModule,
		JwtModule.registerAsync({
			inject: [JwtConfig.KEY],
			useFactory: (jwtConfig: ConfigType<typeof JwtConfig>) => ({
				secret: jwtConfig.secret,
				signOptions: { expiresIn: jwtConfig.accessTokenExpiresIn }
			})
		}),
		UsersModule,
		CompaniesModule
	],
	controllers: [AuthUserController, AuthCompanyController],
	providers: [AuthUserService, AuthCompanyService, AuthService, JwtStrategy]
})
export class AuthModule {}
