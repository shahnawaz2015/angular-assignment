import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-load-data',
  templateUrl: './load-data.component.html',
  styleUrls: ['./load-data.component.scss']
})
export class LoadDataComponent implements OnInit {

  @Output() cLoader = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  // on load more button click 
  closeLoader(): void {
    this.cLoader.emit(false);
  }

}
