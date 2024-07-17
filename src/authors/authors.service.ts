import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthorsService {
  constructor(private prismaService: PrismaService) {}
  
  // this.<serviceName>.<modelName>.<method>

  create(createAuthorDto: CreateAuthorDto) {
    return this.prismaService.author.create({
      data: createAuthorDto
    });
  }

  findAll() {
    return `This action returns all authors`;
  }

  findOne(id: number) {
    return `This action returns a #${id} author`;
  }

  update(id: number, updateAuthorDto: UpdateAuthorDto) {
    return `This action updates a #${id} author`;
  }

  remove(id: number) {
    return `This action removes a #${id} author`;
  }
}
