import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  cfg: { copyrighttext: string; developer: string; developerlink: string; };

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.cfg =  this.config.getConfig().footer
  }

}
