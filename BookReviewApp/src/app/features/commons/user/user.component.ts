import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent {
  @Input() avatar?: string = "https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg";
  @Input() author?: string = "Adam The Lanmark";
} 
