import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  cfg: { tagline: string; title: string; description: string; features: { icon: string; title: string; description: string; }[]; };
 

  constructor(private config:ConfigService) { }

  ngOnInit() {
    this.cfg = this.config.getConfig().intro
  }

}
