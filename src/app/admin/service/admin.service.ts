import { Injectable } from '@angular/core';

@Injectable({
  providedIn: null
})
export class AdminService {

  constructor() { }

  getAdminServiceResponse(component: string) {
    return component + ' call Admin Service'
  }
}
