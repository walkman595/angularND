import { DataServerService } from './../services/data-server.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.sass']
})
export class MemoryComponent implements OnInit {

  dataServer: DataServerService;

  constructor( dataServer: DataServerService) {
    this.dataServer = dataServer;
  }

  ngOnInit(): void {
  }

}
