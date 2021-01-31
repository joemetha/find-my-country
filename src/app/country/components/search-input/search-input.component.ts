import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'fmc-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  @Input() placeholder: string;
  @Output() searchUpdated = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
}
