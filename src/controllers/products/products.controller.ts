import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {

    @Get('')
    getProducts(
        @Query('limit') limit: number = 20,
        @Query('offset') offset: number = 0
    ) {
        return {
            message: `limit: ${limit} | offset: ${offset}`
        };
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
    getOne(@Param('id') id: string) {
        return {
            id
        }
    }

    @Post()
    create(@Body() payload: any) {
        return {
            message: 'Crear product',
            payload
        };
    }

    @Put(':id')
    update(
        @Param('id') id: number,
        @Body() payload: any
    ) {
        return {
            message: 'Editar un producto',
            payload
        };
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return id;
    }
}
