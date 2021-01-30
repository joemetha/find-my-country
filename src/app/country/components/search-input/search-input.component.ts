import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fmc-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  @Input() placeholder: string;

  constructor() { }

  ngOnInit(): void {
  }

}
