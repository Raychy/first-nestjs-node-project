import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUserParamDto } from '../dtos/get-user-params.dto';
import { AuthService } from 'src/auth/providers/auth.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(()=>AuthService))
    private readonly authService: AuthService
  ){}
  public findAll(
    getUserParamDto: GetUserParamDto,
    limit: number,
    page: number,
  ) {
    const isAuth =  this.authService.isAuth();
    console.log(isAuth)
    return [
      {
        firstName: 'Racheal',
        email: 'ray@gmail.com',
      },
      {
        firstName: 'John',
        email: 'john@gmail.com',
      },
    ];
  }

  public findOneById(id: string) {
    return {
      id: '1234',
      firstName: 'Racheal',
      email: 'ray@gmail.com',
    };
  }
}
