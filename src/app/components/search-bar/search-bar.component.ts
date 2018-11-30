import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  public showTable;
  myControl = new FormControl();
  options: string[] = ['taladro', 'taladro acero', 'Taladro bronce'];
  constructor() { }
  public value;
  ngOnInit() {
    this.showTable = false;
  }

  getPosts(value) {
    this.value = value;
  }
}
