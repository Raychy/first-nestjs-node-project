import { Injectable } from '@nestjs/common';

//CLASS WITH @Injectable()  IS CALLED A PROVIDER  
@Injectable() 
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
