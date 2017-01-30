import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {
  
  posts: any;
 
  constructor(public http: Http) {
 
    this.http.get('http://prediksiligainggris.info/api/json_fixtures_API_mobile_standings_test.php').map(res => res.json()).subscribe(data => {
        this.posts = data.results;
    });
 
  }
}





  