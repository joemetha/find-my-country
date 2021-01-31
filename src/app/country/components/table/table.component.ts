import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Country } from '@app/country/models/country.class';

@Component({
  selector: 'fmc-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() set serachByCountry(value: string) {
    if (value !== undefined) {
      this.updateTable(value);
    }
  }

  @Input() set dataList(data: Country[]) {
    if (data) {
      this.setTableDataSource(data);
    }
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public dataSource: MatTableDataSource<Country>;
  public displayedColumns: string[] = ['flag', 'name', 'capital', 'region', 'population'];
  public searchText = '';

  constructor() { }

  ngOnInit(): void {
  }

  updateTable(value: string): void {
    this.searchText = value;
    this.dataSource.filter = value.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  setTableDataSource(data: Country[]): void {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = (list: Country, filter: string) => {
      return list.name.toLowerCase().indexOf(filter) !== -1;
    };
  }
}
