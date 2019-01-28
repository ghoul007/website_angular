import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
  socialsites: any;

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.getSocialsites();
    // this.cfg =  this.config.getConfig().socialsites
  }


  getSocialsites() {
    return this.config.getSettings('websites').subscribe(
      data => this.socialsites = data
    )
  }
}
