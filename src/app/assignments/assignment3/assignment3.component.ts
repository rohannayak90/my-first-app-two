import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showParagraph = true;
  clickCounter = [];
  
  onButtonClick() {
    this.showParagraph = !this.showParagraph;
    //this.clickCounter.push(this.clickCounter.length + 1);
    this.clickCounter.push(new Date());
  }
}
