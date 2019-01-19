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
  post: { id: number; title: string; image: string; author: string; publishdate: string; excert: string; };

  constructor(
    private activeRoute: ActivatedRoute,
    private location: Location,
    private config: ConfigService) { }

  ngOnInit() {
    const id = this.activeRoute.snapshot.params.id
    this.post = this.getPostByID(id);
  }

  getPostByID(id: number) {
    return this.config.getConfig().blog.posts.find(r => r.id == id)
  }

  getBack() {
    this.location.back();
  }

}
