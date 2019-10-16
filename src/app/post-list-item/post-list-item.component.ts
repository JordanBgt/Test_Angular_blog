import { Component, OnInit } from '@angular/core';
import {Post} from '../models/Post';
import {PostsService} from '../services/posts.service';
import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  post: Post;

  constructor(private postsService: PostsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.post = new Post('', '');
    const id = this.route.snapshot.params.id;
    this.postsService.getSinglePost(+id).then(
      (post: Post) => {
        this.post = post;
      }
    );
  }
}
