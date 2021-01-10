import { AlertService } from './../shared/services/alert.service';
import { Post } from './../../shared/interfaces';
import { PostService } from './../../shared/services/post.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  searchStr = '';
  postSubscr: Subscription;
  deleteSubscr: Subscription;


  constructor(
    private postService: PostService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.postSubscr = this.postService.getAllPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  ngOnDestroy(): void {
    if (this.postSubscr) {
      this.postSubscr.unsubscribe();
    }

    if (this.deleteSubscr) {
      this.deleteSubscr.unsubscribe();
    }
  }

  remove(id: string): void {
    this.deleteSubscr = this.postService.removePost(id).subscribe(() => {
      this.posts = this.posts.filter(post => post.id !== id);
      this.alertService.warning('Post hase been deleted');
    });
  }

}
