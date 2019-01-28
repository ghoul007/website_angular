import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../config.service';
import { PagerService } from '../pager.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {

  cfg: { tagline: string; title: string; };
  allItems: any[];
  pages: any[];
  pager: any = {}
  pageSize: number = 3;
  posts: any[] = [];
  constructor(
    private config: ConfigService,
    private pageService: PagerService) { }

  ngOnInit() {
    this.cfg = this.config.getConfig().blog
    this.getBlogs();
  }

  getBlogs() {
    this.config.getPosts().subscribe(
      posts => { this.posts = posts;
        this.allItems = posts;
        this.setPage(1);
      }
    )
  }
  setPage(p: number) {
    this.pager = this.pageService.getPager(this.allItems.length, p, this.pageSize)
    console.log("this.pager ", this.pager);
    this.pages = this.allItems.slice(this.pager.startIndex, this.pager.endIndex);
  }
}
