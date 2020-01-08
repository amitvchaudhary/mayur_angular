import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  getCommonServiceResponse(component: string) {
    return component + ' call Common Service'
  }
}
