import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Horse Husbandry Helpers';
  public url = 'https://twitter.com/AngularClass';
  
  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }  
   
}
