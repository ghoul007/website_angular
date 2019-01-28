import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-block',
  templateUrl: './post-block.component.html',
  styleUrls: ['./post-block.component.css']
})
export class PostBlockComponent implements OnInit {

  @Input() post = {};
id: number;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
      this.id  =  this.route.snapshot.params['id']
  }
}
