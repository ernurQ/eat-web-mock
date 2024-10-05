import { AuthModule } from '@/auth/auth.module'
import { AppConfig, JwtConfig } from '@/config/configuration'
import { validationSchema } from '@/config/validationSchema'
import { UsersModule } from '@/users/users.module'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { CompaniesModule } from './companies/companies.module'
import { ProductsModule } from './products/products.module'
import { CompanyReviewsModule } from './company-reviews/company-reviews.module';
import { UserProfileModule } from './user-profile/user-profile.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			load: [AppConfig, JwtConfig],
			validationSchema: validationSchema
		}),
		UsersModule,
		AuthModule,
		CompaniesModule,
		ProductsModule,
		CompanyReviewsModule,
		UserProfileModule
	]
})
export class AppModule {}
