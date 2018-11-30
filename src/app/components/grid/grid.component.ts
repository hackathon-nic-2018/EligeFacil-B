import { Component, OnInit } from '@angular/core';

import { LicenseManager } from 'ag-grid-enterprise/main';
import { HttpClient } from '@angular/common/http';

import 'ag-grid-enterprise';
LicenseManager.setLicenseKey('Evaluation_License_Valid_Until__17_November_2018__MTU0MjQxMjgwMDAwMA==e6e57614394e82591f7af9baff0981a4');

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  private rowData: any;
  public gridOptions;
  public gridApi;
  public gridColumnApi;
  public columndDefs;
  constructor(private http: HttpClient) {
    this.columndDefs = [
      {
        field: 'athlete',
        width: 150,
      },
      {
        field: 'age',
        width: 90
      },
      {
        field: 'country',
        width: 120
      },
      {
        field: 'year',
        width: 90
      },
      {
        field: 'date',
        width: 110
      },
      {
        field: 'gold',
        width: 100
      },
      {
        field: 'silver',
        width: 100
      },
      {
        field: 'bronze',
        width: 100
      },
      {
        field: 'total',
        width: 100
      }
    ];

  }

  ngOnInit() {
  }

  onGridReady(event) {
    this.gridApi = event.api;
    this.gridColumnApi = event.columnApi;
    this.gridOptions = event;
    this.http
      .get('https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinners.json')
      .subscribe(data => {
        this.rowData = data;
      });
  }
}
