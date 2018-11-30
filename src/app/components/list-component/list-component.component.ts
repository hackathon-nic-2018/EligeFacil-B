import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LicenseManager } from 'ag-grid-enterprise/main';

LicenseManager.setLicenseKey('Evaluation_License_Valid_Until__17_November_2018__MTU0MjQxMjgwMDAwMA==e6e57614394e82591f7af9baff0981a4');


@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {

  private gridApi;
  private gridColumnApi;
  private rowData;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }


  createColumnDefs() {
    this.rowData = [];
    const columnDefs = [];
    const columnFields = this.rowData[0];
    for (const field in columnFields) {
      if (columnFields.hasOwnProperty(field)) {
        columnDefs.push({ field: field, headerName: field.toUpperCase() });
      }
    }
    return columnDefs;
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.http
      .get(
        'https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinnersSmall.json'
      )
      .subscribe(data => {
        this.rowData = data;
        this.createColumnDefs();
      });
  }

}
