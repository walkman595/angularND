import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataServerService {

  savedEquations : string[] = [];

  saveEquation(eq: string): void {
    this.savedEquations.push(eq);
  }

  getEquation(): string[]{


    return this.savedEquations;
  }

  constructor() { }
}
