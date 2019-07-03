import { AuthService } from './../../core/auth.service';
import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Post } from '../post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  post: Post;
  timestampsInSnapshots: false;
  edit: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    public auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getPostId();
  }

  getPostId() {
    const id = this.route.snapshot.paramMap.get('id');
    return this.postService
      .getPostData(id)
      .subscribe(data => (this.post = data));
  }

  updatePost() {
    const formData = {
      title: this.post.title,
      content: this.post.content
    };
    const id = this.route.snapshot.paramMap.get('id');
    this.postService.update(id, formData);
    this.edit = false;
  }

  delete() {
    const id = this.route.snapshot.paramMap.get('id');
    this.postService.delete(id);
    this.router.navigate(['/blog']);
  }
}
