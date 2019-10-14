import { Component, Input } from '@angular/core';
import { Post } from './Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog-application';

  posts = [
    new Post('My first post','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae enim libero. Aliquam tincidunt quis tellus scelerisque pretium. Vestibulum venenatis in nisl id lobortis. Nullam volutpat ultrices quam a hendrerit. Duis accumsan libero et aliquet iaculis.', 25),
    new Post('My second post', 'Sed et convallis elit. Vestibulum sed interdum est, at maximus mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.', -10),
    new Post('My third post', 'Phasellus cursus, diam varius feugiat auctor, tellus sapien faucibus eros, ac vestibulum ligula lectus a nulla.', 0)
  ];
}
