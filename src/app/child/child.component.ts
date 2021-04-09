import { Component, OnInit, Input, OnChanges } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() inputData: number;

  constructor() {
    console.log("this is the constructor: " + this.inputData);
  }

  ngOnInit() {
    console.log("this is ngOnInit: " + this.inputData);
  }

  ngOnChanges() {
    console.log("this is ngOnChanges: " + this.inputData);
  }
}
