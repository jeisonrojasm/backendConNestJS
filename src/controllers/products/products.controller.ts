import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ProductsService } from 'src/services/products/products.service';
import { ParseIntPipe } from 'src/common/parse-int/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dto';

@Controller('products')
export class ProductsController {

    constructor(private productService: ProductsService) { }

    @Get('')
    getProducts(
        @Query('limit') limit: number = 20,
        @Query('offset') offset: number = 0
    ) {
        return this.productService.findAll();
    }

    // Ruta estática
    @Get('filter')
    getProductFilter() {
        return {
            message: `Soy products/filter`
        };
    }

    // Ruta dinámica
    @Get(':id')
    getOne(@Param('id', ParseIntPipe) id: string) {
        return this.productService.findOne(+id);
    }

    @Post()
    create(@Body() payload: CreateProductDto) {
        return this.productService.create(payload);
    }

    @Put(':id')
    update(
        @Param('id') id: number,
        @Body() payload: UpdateProductDto
    ) {
        return this.productService.update(id, payload);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.productService.delete(id);
    }
}
