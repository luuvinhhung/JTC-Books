import { Component, OnInit } from '@angular/core';
import { IBook } from '../models/IBook';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  books: IBook[] = [
  {cover: '../assets/asset-0.png', title: 'Xây dựng RESTful API với Nodejs', linkDown: ''},
  {cover: '../assets/asset-1.png', title: 'Giáo trình Front-End cơ bản', linkDown: ''},
  {cover: '../assets/asset-2.png', title: 'Lập trình C++', linkDown: ''},
  {cover: '../assets/asset-3.png', title: 'Angular cơ bản', linkDown: ''},
  {cover: '../assets/asset-4.png', title: 'Xây dựng RESTful API với Nodejs', linkDown: ''},
  {cover: '../assets/asset-5.png', title: 'mongoDB', linkDown: ''}
];
  constructor() { }

  ngOnInit() {
  }

}
