import {Component, OnDestroy, OnInit} from '@angular/core';
import { Post } from '../models/Post';
import {Subscription} from 'rxjs';
import {PostsService} from '../services/posts.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit , OnDestroy {

  posts: Post[];
  postsSubscription: Subscription;

  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit() {
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postsService.getPosts();
    this.postsService.emitPosts();
  }

  onDeletePost(post: Post) {
    this.postsService.removePost(post);
  }

  onIncrementLoveIts(post: Post) {
    post.loveIts++;
    console.log(post);
    this.postsService.savePosts();
    this.postsService.emitPosts();
  }

  onDecrementLoveIts(post: Post) {
    post.loveIts--;
    this.postsService.savePosts();
    this.postsService.emitPosts();
  }

  onPostView(id: number) {
    this.router.navigate(['/posts', 'view', id]);
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }
}
