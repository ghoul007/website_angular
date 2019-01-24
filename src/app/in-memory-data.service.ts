import { Injectable } from '@angular/core';
import { InMemoryDbService, ResponseOptions } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const users = [
      { id: 1, firstName: 'ahmed1', lastName: "ghoul", password: 'hello', email: 'ahmed@gmail.com' }
    ]


    const posts = [
      { id: 1, title: 'the first article', image: 'gallery-image-1.jpg', author: 'A', publishdate: '2018-06-11', excert: '' },
      { id: 2, title: 'the second article', image: 'gallery-image-2.jpg', author: 'B', publishdate: '2018-06-11', excert: '' },
      { id: 3, title: 'the third article', image: 'gallery-image-3.jpg', author: 'C', publishdate: '2018-06-11', excert: '' },
      { id: 4, title: 'the third article', image: 'gallery-image-4.jpg', author: 'd', publishdate: '2018-06-11', excert: '' },
      { id: 5, title: 'the third article', image: 'gallery-image-5.jpg', author: 'e', publishdate: '2018-06-11', excert: '' },
      { id: 6, title: 'the third article', image: 'gallery-image-6.jpg', author: 'f', publishdate: '2018-06-11', excert: '' },
      { id: 7, title: 'the third article', image: 'gallery-image-7.jpg', author: 'g', publishdate: '2018-06-11', excert: '' },
      { id: 8, title: 'the third article', image: 'gallery-image-7.jpg', author: 'g', publishdate: '2018-06-11', excert: '' },
      { id: 9, title: 'the third article', image: 'gallery-image-7.jpg', author: 'g', publishdate: '2018-06-11', excert: '' },
      { id: 10, title: 'the third article', image: 'gallery-image-7.jpg', author: 'g', publishdate: '2018-06-11', excert: '' }
    ]
    return { users, posts }
  }


  get(reqInfo: RequestInfo) {
    if (reqInfo["collectionName"] == "posts") {
      return this.getArticles(reqInfo);
    }
    return undefined;
  }


  getArticles(reqInfo: RequestInfo) {

    return reqInfo["utils"].createResponse$(() => {
      const dataEncapsulation = reqInfo["utils"].getConfig().dataEncapsulation;
      const collection = reqInfo["collection"];
      const id = reqInfo["id"];
      const data = id === undefined ? collection : reqInfo["utils"].findById(collection, id);
  
      console.log(data);
  
      const options: ResponseOptions = data ?
      {
        body: dataEncapsulation ? { data } : data,
        status: 200
      } :
      {
        body: { error: `Post not found` },
        status: 404
      };
  
      options.statusText = options.status === 200 ? 'ok' : 'Not Found' ;
      options.headers = reqInfo["headers"];
      options.url = reqInfo["url"];
      return options;
  
  
    });
  }
 
  post(reqInfo: RequestInfo) {
    console.log("reqInfo ", reqInfo);

  }

}
