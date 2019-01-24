import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post = {};
id: number;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
      this.id  =  this.route.snapshot.params['id']
  }

}
