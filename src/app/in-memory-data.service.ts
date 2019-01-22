import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const users = [
      { id:1, firstName: 'ahmed1', lastName:"ghoul", password:'hello', email:'ahmed@gmail.com' }
    ]

    return { users }
  }

  post(reqInfo: RequestInfo){
 console.log("reqInfo ", reqInfo);

  }

}
