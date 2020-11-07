import { Component, OnInit } from "@angular/core";
import { AppService } from "../../services/app.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(private appSer: AppService) {}

  ngOnInit() {}

  toggleNavi() {
    this.appSer.sideBar.next(!this.appSer.sideBar.value);
  }
}
