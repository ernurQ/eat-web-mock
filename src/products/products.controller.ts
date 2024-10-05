import { Controller, Get, Param, Query } from '@nestjs/common'
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

	@Get()
	async getProducts(
		@Query('name') name: string,
		@Query('category') category: string,
		@Query('offset') offset?: number,
		@Query('limit') limit?: number,
	) {
		offset = offset || 0
		limit = limit || 10
		return this.productsService.getProducts({name, category, offset, limit})
	}

	@Get('/:id')
	async getProductById(@Param('id') id: string) {
		return this.productsService.getProductById(id)
	}

	@Get('company/:companyId')
	async getProductsByCompanyId(
		@Param('companyId') companyId: string,
		@Query('offset') offset?: number,
		@Query('limit') limit?: number
	) {
		offset = offset || 0
		limit = limit || 10
		return this.productsService.getProductsByCompanyId(companyId, {offset, limit})
	}
}
