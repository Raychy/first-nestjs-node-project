import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class PostsService {
  constructor(private readonly usersService: UsersService) {}
  public findAll(userId: string) {
    const user = this.usersService.findOneById(userId);
    return [
      {
        user: user,
        title: 'Title 1',
        description: 'description 1',
      },
      { user: user, title: 'Title 2', description: 'description 2' },
      { user: user, title: 'Title 3', description: 'description 3' },
    ];
  }
}
