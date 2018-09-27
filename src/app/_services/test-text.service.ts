import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestTextService {

  constructor() { }

  textContainer: string = "some test text here...!";

  newText(text: string): void {
    this.textContainer = text;
  }

  clearText(): void {
    this.textContainer = "";
  }
}
