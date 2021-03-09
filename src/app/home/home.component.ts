import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  clickCounter: number =  0;
  scorpionCount: number = 0

  constructor() { }

  ngOnInit(): void {
  }

  countClick(){
    this.clickCounter += 1

  }
  setClickCounterContainerClasses(){
    let myClasses = {
      notactive: this.scorpionCount < 4,
      active: this.scorpionCount >=4
    }
    return myClasses

  }

}
