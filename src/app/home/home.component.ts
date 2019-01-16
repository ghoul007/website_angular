import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cfg: {
    heading: String,
    headingText: String,
    buttonText: String,
    buttonLink: String,
  };

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.cfg = this.config.getConfig().header
  }

}
