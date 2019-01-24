import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthenticationService } from '../authentication.service';
import { ConfigService } from '../config.service';


@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css']
})
export class ArticleCreateComponent implements OnInit {

  postCreateForm: FormGroup;
  id: number;

  constructor(private fb: FormBuilder,
    private auth: AuthenticationService,
    private config: ConfigService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router) { }

  ngOnInit() {
    this.postCreateForm = this.fb.group({
      // 'id' : [null, Validators.required],
      'title': [null, Validators.required],
      'author': [this.getAuthor(), Validators.required],
      'publishdate': [Date.now(), Validators.required],
      'excert': [null, Validators.required],
      'image': [null, Validators.required],
    });
   
  }


  getAuthor() {
    return this.auth.getUser()['id']
  }



  addPost(formData: NgForm) {
    this.config.addPost(formData).subscribe(
      post => this.router.navigate([`article/${post['id']}`])
    );
  }

  getBack() {
    this.location.back();
  }

}
