import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

const MaterialComponents = [MatButtonModule];

// @NgModule({
//   imports: [MaterialComponents],
//   exports: [MaterialComponents],
// })

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {}
