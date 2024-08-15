import { forwardRef, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './providers/users.service';
import { AuthModule } from 'src/auth/auth.module';

//YOU CANNOT EXPORT CONTROLLERS BUT CAN EXPORT PROVIDERS
@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
  imports: [forwardRef(()=>AuthModule)],
})
export class UsersModule {}
