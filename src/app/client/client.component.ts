import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  cfg: { tagline: string; title: string; description: string; companies: { name: string; weblink: string; logo: string; }[]; };

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.cfg = this.config.getConfig().clients
  }

}
