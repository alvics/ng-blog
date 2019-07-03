import { AuthService } from './../../core/auth.service';
import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: Observable<Post[]>;
  image: Observable<string | null>;

  constructor(private postservice: PostService, public auth: AuthService) {}

  ngOnInit() {
    this.posts = this.postservice.getPosts();
    // console.log(this.posts && this.postservice);
  }

  delete(id: string) {
    this.postservice.delete(id);
  }
}
