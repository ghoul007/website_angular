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

    const menu = [
      {id: 1, title: 'Home', link: '/home', outlet: ''},
      {id: 2, title: 'About', link: '/about', outlet: ''},
      {id: 3, title: 'Services', link: '/services', outlet: ''},
      {id: 4, title: 'Gallery', link: '/gallery', outlet: ''},
      {id: 5, title: 'Testimonials', link: '/testimonials', outlet: ''},
      {id: 6, title: 'Clients', link: '/clients', outlet: ''},
      {id: 7, title: 'Pricing', link: '/pricing', outlet: ''},
      {id: 8, title: 'Blog', link: '/blog', outlet: ''},
      {id: 9, title: 'Contact Us', link: 'contactus', outlet: 'popup'},
      {id: 10, title: 'Subscribe', link: 'subscribe', outlet: 'popup'},
    ];


    const pages = [
      {id: 'intro',
        tagline: 'SUCESS',
        title: 'How We Help You To Sell Your Product',
        description: 'This is introduction!',
      },
      {id: 'clients',
        tagline: 'TRUST',
        title: 'Companies who use our services',
        description: 'Our clients',
      },
      {id: 'services',
        tagline: 'BELIEVING',
        title: 'Focusing On What Matters Most',
        description: 'Service Section'
      },
      {id: 'testimonials',
        tagline: 'FEEDBACK',
        title: 'What our customers are saying',
        description: 'This is what our customer\'s feel about us',
      },
      {id: 'pricing',
        tagline: 'YOUR CHOICE',
        title: 'We have the right package for you',
        description: '',
      },
      {id: 'gallery',
        tagline: 'We ❤ Doing amazing things',
        title: 'AdMISTER STUDIO',
        description: 'We are and amazing company',
      },
      {id: 'footer',
        copyrighttext: 'Made with ❤ by',
        developer: 'AdMISTER STUDIO',
        developerlink: 'http://admister.in',
      },
      {id: 'blog',
        tagline: 'My thoughts',
        title: 'Thoughts become things',
        description: 'We are and amazing company',
      },
      {id: 'header',
        heading: 'AdMister Studios',
        headingtext: 'This website was created using Angular 6',
        buttontext: 'do some action!',
        buttonlink: '/home',
        image: 'banner-image-1.jpg'
      },
    ];

    const features= [
      { icon: 'html5', title: 'HTML5 &amp; CSS3', description: 'Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choro neglegentur iudico' },
      { icon: 'bolt', title: 'Easy to Use', description: 'Cu vero ipsum vim, doctus facilisi sea in. Eam ex falli honestatis repudiandae, sit detracto mediocrem disputationi' },
      { icon: 'tablet', title: 'Fully Responsive', description: 'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum' },
      { icon: 'rocket', title: 'Parallax Effect', description: 'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum' },
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
    return { users, posts, menu, pages }
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
