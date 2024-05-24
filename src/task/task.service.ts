import type { Task } from "@prisma/client";
import { BadRequestException, Injectable } from "@nestjs/common";
import { PrismaService } from "../infrastructure/database/services/prisma.service";

@Injectable()
export class TaskService {
    constructor(private readonly prisma: PrismaService) {}

    async addTask(
        name: string,
        userId: string,
        priority: number,
    ): Promise<Task> {
        await this.prisma.user.findUniqueOrThrow({ where: { id: userId } }).catch(() => {
            throw new BadRequestException("User not found");
        });

        return await this.prisma.task.create({
            data: {
                name,
                priority: Number(priority),
                user: { connect: { id: userId } },
            },
        });
    }

    async getTaskByName(name: string): Promise<Task | null> {
        return await this.prisma.task.findFirst({ where: { name } });
    }

    async getUserTasks(userId: string): Promise<Task[]> {
        await this.prisma.user.findUniqueOrThrow({ where: { id: userId } }).catch(() => {
            throw new BadRequestException("User not found");
        });

        return await this.prisma.task.findMany({ where: { userId } });
    }

    async resetData(): Promise<string> {
        await this.prisma.task.deleteMany();
        return "Tasks Data has been reset";
    }
}