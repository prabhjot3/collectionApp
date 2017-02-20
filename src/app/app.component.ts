import { Component } from '@angular/core';
import{CollectableService} from "./shared/collectable.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CollectableService],
})
export class AppComponent {
  title = 'app works!';
}
