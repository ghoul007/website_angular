import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../config.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  post: any

  constructor(
    private activeRoute: ActivatedRoute,
    private location: Location,
    private config: ConfigService) { }

  ngOnInit() {
    const id = this.activeRoute.snapshot.params.id;
    this.getPostByID(id)
  }

  getPostByID(id: number) {
    // return this.config.getConfig().blog.posts.find(r => r.id == id)
    return this.config.getPostByID(id).subscribe(
      post => 
      {
        this.post = post;
      }
    );
  }

  getBack() {
    this.location.back();
  }

}
