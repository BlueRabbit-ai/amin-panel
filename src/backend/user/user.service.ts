import { Injectable } from "@nestjs/common"
import type { PrismaService } from "../prisma.service"
import type { User } from "@prisma/client"

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany()
  }

  async findOne(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id } })
  }

  async create(data: { name: string; email: string; password: string }): Promise<User> {
    return this.prisma.user.create({ data })
  }

  async update(id: number, data: Partial<User>): Promise<User> {
    return this.prisma.user.update({ where: { id }, data })
  }

  async remove(id: number): Promise<User> {
    return this.prisma.user.delete({ where: { id } })
  }
}

