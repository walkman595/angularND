import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sqaure',
  templateUrl: './sqaure.component.html',
  styleUrls: ['./sqaure.component.sass']
})


export class SqaureComponent  {

@Input() value: "X" | "O";


}
