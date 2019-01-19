import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
  cfg: { title: string; target: string; username: string; icon: string; }[];

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.cfg =  this.config.getConfig().socialsites
  }

}
