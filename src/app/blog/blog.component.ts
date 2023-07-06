import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  blogs:
    | [
        { id: 1; name: 'დააასდ'; prophecy: '11' },
        { id: 2; name: 'sas'; prophecy: '11' },
        { id: 3; name: 'qqwq'; prophecy: '11' }
      ]
    | undefined;

  ngOnInit(): void {
    // this.blogs
  }
}
