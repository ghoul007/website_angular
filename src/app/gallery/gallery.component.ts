import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  cfg: { images: string[]; };

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.cfg =  this.config.getConfig().gallery
  }

}
