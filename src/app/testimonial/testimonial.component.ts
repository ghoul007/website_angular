import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {
  cfg: { tagline: string; title: string; description: string; feedbacks: { name: string; userimage: string; comments: string; company: string; }[]; };

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.cfg = this.config.getConfig().testimonials
  }

}
