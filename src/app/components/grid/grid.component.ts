import { Component, OnInit, Input } from '@angular/core';

import { LicenseManager } from 'ag-grid-enterprise/main';
import { HttpClient } from '@angular/common/http';

import 'ag-grid-enterprise';
import { ValueFormatterService } from 'ag-grid-community';
LicenseManager.setLicenseKey('Evaluation_License_Valid_Until__17_November_2018__MTU0MjQxMjgwMDAwMA==e6e57614394e82591f7af9baff0981a4');

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  // private rowData: any;
  public gridOptions;
  public gridApi;
  public gridColumnApi;
  public columnDefs;
  public rowData;

  @Input() value;

  title = 'app';
  constructor(private http: HttpClient) {
    this.columnDefs = [
      {
        field: 'descripcion',
        width: 150,
      },
      {
        field: 'nombre',
        width: 120
      },
      {
        field: 'precio',
        width: 130
      },
      ,
      {
        field: 'tienda',
        width: 190
      }
    ];

  }

  ngOnInit() {
    this.getValuesOfGrid(this.value);
  }

  getValuesOfGrid(value) {
    this.httpGet('search/' + value);
  }

  onGridReady(event) {
    this.gridApi = event.api;
    this.gridColumnApi = event.columnApi;
    this.gridOptions = event;
    this.httpGet('product');
  }

  httpGet(url) {
    this.http
    .get('http://192.168.137.121/api/' + url)
    .subscribe(data => {
      console.log(data);
      this.rowData = data;
    });
  }
}
