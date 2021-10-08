import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  title = "User Portal Test"
  image = 'https://freesvg.org/img/black_orange_men_cloud.png'
  test = "this is a test"

  constructor() { }

  ngOnInit(): void {

  }

}
