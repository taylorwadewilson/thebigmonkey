import { Component, OnInit } from '@angular/core';
import { Golfer } from '../golfer';

@Component({
  selector: 'golfers',
  templateUrl: './golfers.component.html',
  styleUrls: ['./golfers.component.css']
})
export class GolfersComponent implements OnInit {
  golfer: Golfer = {
  	firstName: 'John',
  	lastName: 'Daly',
  	score: 65
  };

  constructor() { }

  ngOnInit() {
  }

}