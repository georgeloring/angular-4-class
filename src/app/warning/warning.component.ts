import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning',
  template: 'This is a warning',
  styles: [
	`h3 {
            color: orange   
        }
        :host {
            color: blue;
	    background: red;
	}
  `]
})
export class WarningComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
