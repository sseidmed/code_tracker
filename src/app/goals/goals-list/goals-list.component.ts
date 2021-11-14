import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-goals-list',
  templateUrl: './goals-list.component.html',
  styleUrls: ['./goals-list.component.css']
})
export class GoalsListComponent implements OnInit {

  @Input() goals;
  constructor() { }

  ngOnInit(): void {
  }



}
