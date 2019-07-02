import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Post } from '../post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  post: Post;
  timestampsInSnapshots: false;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
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
}
