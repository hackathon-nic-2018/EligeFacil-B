import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  public showTable;
  myControl = new FormControl();
  options: string[] = [];
  constructor(private http: HttpClient) { }
  public value;
  ngOnInit() {
    this.showTable = false;
    this.httpGet('product');
  }

  getPosts(value) {
    this.value = value;
  }

  httpGet(url) {
    this.http
    .get('http://192.168.137.121/api/' + url)
    .subscribe(data => {
      if (data) {
        this.convertData(data);
      }
    });
  }

  convertData(data) {
    data.forEach(element => {
      this.options.push(element.nombre);
    });
  }
}
