import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  cfg: { tagline: string; title: string; };

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.cfg = this.config.getConfig().blog
  }

}
