import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-website-block',
  templateUrl: './website-block.component.html',
  styleUrls: ['./website-block.component.css']
})
export class WebsiteBlockComponent implements OnInit {
  @Input() website: any

  constructor() { }

  ngOnInit() {
  }

}
