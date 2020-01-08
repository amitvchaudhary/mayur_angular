import { Injectable } from '@angular/core';

@Injectable()
export class AdminService {

  constructor() { }

  getAdminServiceResponse(component: string) {
    return component + ' call Admin Service'
  }
}
