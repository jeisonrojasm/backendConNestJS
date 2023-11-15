import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {

    @Get('')
    getProducts(
        @Query('limit') limit: number = 20,
        @Query('offset') offset: number = 0
    ) {
        return `limit: ${limit} | offset: ${offset}`
    }

    // Ruta estática
    @Get('filter')
    getProductFilter() {
        return `Soy products/filter`
    }

    // Ruta dinámica
    @Get(':id')
    getProduct(@Param('id') id: string) {
        return id;
    }
}
