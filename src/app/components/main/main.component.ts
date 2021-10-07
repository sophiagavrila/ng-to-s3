import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  title = "User Portal"
  image = "./api-ui/assets/network.png"
  test = "this is a test"

  constructor() { }

  ngOnInit(): void {

  }

}
