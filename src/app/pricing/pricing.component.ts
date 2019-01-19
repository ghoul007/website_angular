import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
  cfg: { tagline: string; title: string; description: string; plans: { title: string; subtitle: string; description: string; price: string; currency: string; downloads: string; extensions: string; tutorials: string; support: string; updates: string; buttontext: string; buttonlink: string; featured: boolean; }[]; };

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.cfg = this.config.getConfig().pricing
  }

}
