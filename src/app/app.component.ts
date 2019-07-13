import { Component } from "@angular/core";
import { elements } from "./data";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Periodic Table";
  elements = elements;
}
