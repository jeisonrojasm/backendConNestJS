import { ArgumentMetadata, Injectable, PipeTransform, BadRequestException } from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {

    const newValue = Number(value);

    if (isNaN(newValue)) {
      throw new BadRequestException(`${value} is not a number`);
    }
    return newValue;
  }
}
