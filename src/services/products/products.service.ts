import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dto';
import { Product } from 'src/entities/product.entity';

@Injectable()
export class ProductsService {

    private counterID = 1;

    private products: Product[] = [
        {
            id: 1,
            name: 'Product 1',
            description: 'Description product 1',
            price: 122000,
            stock: 50,
            image: ''
        }
    ];

    findAll() {
        return this.products;
    }

    findOne(id: number) {
        const product = this.products.find(item => item.id === id);

        if (!product) {
            throw new NotFoundException(`Product #${id} not found`);
        }
        return product;
    }

    create(payload: CreateProductDto) {
        this.counterID++;

        const newProduct = {
            id: this.counterID,
            ...payload
        }

        this.products.push(newProduct);
        return newProduct;
    }

    update(id: number, payload: UpdateProductDto) {
        const product = this.findOne(id);

        if (product) {
            const index = this.products.findIndex(item => item.id === id);
            this.products[index] = {
                ...product,
                ...payload
            };
            return this.products[index];
        }

        return null
    }

    delete(id: number) {
        const index = this.products.findIndex(item => item.id === id);

        if (index === -1) {
            throw new NotFoundException(`Product #${id} not found`);
        }
        this.products.splice(index, 1);
        return true;
    }
}






















