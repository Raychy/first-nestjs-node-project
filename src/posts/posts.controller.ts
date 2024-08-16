import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { CreatePostDto } from './dtos/create-posts.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PatchPostDto } from './dtos/patch-post-dto';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('/:userId')
  public getPosts(@Param('userId') userId: string) {
    return this.postsService.findAll(userId)
  }

  @ApiOperation({
    summary: "Create new blog post"
  })
  @ApiResponse({
    status: 201,
    description: "You get 201 success response"
  })
  @Post()
  public createPost(@Body() createPostDto: CreatePostDto){

  }
  @Patch()
  public updatePost(@Body() patchPostDto: PatchPostDto){

  }
}
