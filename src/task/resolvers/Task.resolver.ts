import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Task } from '../dto/models/task.model';
import { TaskService } from '../service/Task.service';
import { GetTaskArgs } from '../dto/args/get-task.args';
import { GetTasksArgs } from '../dto/args/get-tasks.args';
import { CreateTaskInput } from '../dto/inputs/create-task.input';

@Resolver(() => Task)
export class TaskResolver {
  constructor(private taskService: TaskService) {}
  @Query(() => Task, { nullable: true })
  async getTask(@Args() id: GetTaskArgs) {
    return this.taskService.getTask(id);
  }

  @Query(() => [Task])
  async getTasks(@Args() getTasksArgs: GetTasksArgs) {
    return this.taskService.getTasks(getTasksArgs);
  }

  @Mutation(() => Task)
  async createTask(@Args('createTaskInput') createTaskData: CreateTaskInput) {
    return this.taskService.createTask(createTaskData);
  }
}
