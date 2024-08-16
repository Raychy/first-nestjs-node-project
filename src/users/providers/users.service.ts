import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUserParamDto } from '../dtos/get-user-param.dto';
import { AuthService } from 'src/auth/providers/auth.service';

/**
 * Class connect to users table and perform business operations
 */
@Injectable()
export class UsersService {
  /**
   * Constructor operations
   */
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}
  /**
   * Method to get all users
   */
  public findAll(
    getUserParamDto: GetUserParamDto,
    limit: number,
    page: number,
  ) {
    const isAuth = this.authService.isAuth();
    console.log(isAuth);
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
  /**
   * method to get a single user
   */
  public findOneById(id: string) {
    return {
      id: '1234',
      firstName: 'Racheal',
      email: 'ray@gmail.com',
    };
  }
}
