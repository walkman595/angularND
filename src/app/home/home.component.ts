import { DataServerService } from './../services/data-server.service';
import { Component, HostListener, OnInit } from '@angular/core';
import {add, evaluate} from 'mathjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  equation: string = "";
  isAnswer: boolean = false;

@HostListener("document:keypress", ["$event"])
listenKeyPress(event:KeyboardEvent):void{
  if("0 1 2 3 4 5 6 7 8 9 + - * / ".includes(event.key))
    this.addChar(event.key);
    if (event.key == "Enter")
    this.calculate();

}

  addChar(c: string):void{
    if(this.isAnswer)
    {
      this.equation = "";
      this.isAnswer = false;

    }
    this.equation += c;
  }

  calculate(): void {
    let result = evaluate(this.equation);
    this.dataServer.saveEquation(this.equation+"="+result);
    this.equation = result;
    this.isAnswer = true;
    console.log(this.dataServer.getEquation());
  }

  constructor(private dataServer: DataServerService) { }

  ngOnInit(): void {
  }

}
