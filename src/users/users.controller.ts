import {
  Controller,
  Get,
  Post,
  Patch,
  Put,
  Delete,
  Param,
  Query,
  Body,
  Headers,
  Ip,
  ParseIntPipe,
  DefaultValuePipe,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUserParamDto } from './dtos/get-user-params.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users.service';

//CONTROLLER HOLD ALL THE BUSINESS LOGIN IN YOUR CODE
@Controller('users')
export class UsersController {
  constructor(
    //Inject user service
    private readonly usersService: UsersService,
  ) {}
  @Get('/:id?') //GET DECORATOR
  public getUsers(
    @Param() getUserParamDto: GetUserParamDto,
    @Query('limit', new DefaultValuePipe(10)) limit: number,
    @Query('page', new DefaultValuePipe(1)) page: number,
  ) {
    return this.usersService.findAll(getUserParamDto, limit, page);
  }
  @Post()
  public createUsers(
    @Body() createUserDto: CreateUserDto,
    @Headers() header: any,
    @Ip() ip: any,
  ) {
    return 'You sent post req';
  }

  @Patch()
  public patchUser(@Body() patchUserDto: PatchUserDto) {
    return patchUserDto;
  }
}
