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
import { GetUserParamDto } from './dtos/get-user-param.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

//CONTROLLER HOLD ALL THE BUSINESS LOGIN IN YOUR CODE
@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(
    //Inject user service
    private readonly usersService: UsersService,
  ) {}
  @Get('/:id?') //GET DECORATOR
  @ApiOperation({
    summary: "Fetches the list of users"
  })
  @ApiResponse({
    status: 200,

  })
  @ApiQuery({
    name: 'limit',
    type: 'number',
    required: false,
    description: 'The numbers of records per query ',
    example: 10,
  })
  @ApiQuery({
    name: 'page',
    type: 'number',
    required: false,
    description: 'The position of the  page number you want the API to return ',
    example: 1,
  })
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
