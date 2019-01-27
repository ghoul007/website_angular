import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../config.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  cfg: { tagline: string; title: string; description: string; features: { icon: string; title: string; description: string; }[]; };
  intro: any;
  features: any = [];
 

  constructor(private config:ConfigService) { }
  
  ngOnInit() {
    this.getPageData('pages', 'intro');
    this.getFeatureData('features');
  }

  getPageData(database: string, id?: string) {
    this.config.getSettings(database, id).subscribe(
      data => {
        this.intro = data;
        console.log(this.intro);
      }
    );
  }

  getFeatureData(database: string ) {
    this.config.getSettings(database).subscribe(
      data => {
        this.features = data;
        console.log(this.features);
      }
    );
  }


}
