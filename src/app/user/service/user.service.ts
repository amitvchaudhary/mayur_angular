import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  getUserServiceResponse(component: string) {
    return component + ' call User Service'
  }
}
