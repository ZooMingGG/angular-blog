import { switchMap } from 'rxjs/operators';
import { Post } from './../shared/interfaces';
import { Observable } from 'rxjs';
import { PostService } from './../shared/services/post.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  post$: Observable<Post>;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.post$ = this.route.params
      .pipe(switchMap((params: Params) => {
        return this.postService.getPostById(params.id);
      }));
  }

}
