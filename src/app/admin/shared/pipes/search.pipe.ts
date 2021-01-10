import { Post } from './../../../shared/interfaces';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPosts'
})
export class SearchPipe implements PipeTransform {
  transform(posts: Post[], searchStr: string): Post[] {
    if (!searchStr.trim()) {
      return posts;
    }

    return posts.filter(post => {
      return post.title.toLowerCase().includes(searchStr.toLowerCase());
    });
  }
}
