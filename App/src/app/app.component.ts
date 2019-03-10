import { Component , OnInit} from '@angular/core';
import { ApiService } from './api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Big Monkey';

  constructor(private apiService: ApiService) {
    console.log('inside constructor');
  }

  ngOnInit() {
    console.log('inside onInit');
    this.apiService.getGolfers().subscribe((res) => {
        console.log('received a response to getGolfers: ' + res)
    });
  }
}
