import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

interface DataResponse {
  userId: string;
  id: string;
  title: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'parks';

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http.get('http://jsonplaceholder.typicode.com/posts').
      subscribe(data => {
        console.log(data);
      }, (error) => {
        console.log("err")
      });
  }
}
