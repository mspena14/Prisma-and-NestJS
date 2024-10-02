import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { TaskService } from "./task.service";
import { Task } from "@prisma/client";

@Controller('Tasks')
export class TaskController {

    constructor(private taskService: TaskService) { }
    @Get()
    async getAllTasks(): Promise<Task[]> {
        return this.taskService.getAllTasks();
    }

    @Get(':id')
    async getTask(@Param('id') id: string): Promise<Task> {
        return this.taskService.getTaskById(Number(id));
    }

    @Post()
    async createTask(@Body() data: Task): Promise<Task> {
        return this.taskService.createTask(data);
    }

    @Patch(':id')
    async updateTask(@Body() data: Task, @Param('id') id: string): Promise<Task> {
        return this.taskService.updateTask(Number(id), data);
    }

    @Delete(':id')
    async deleteTask(@Param('id') id: string): Promise<Task> {
        return this.taskService.deleteTask(Number(id));
    }
    
}