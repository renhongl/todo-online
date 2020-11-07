import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { AppService } from "src/app/services/app.service";

@Component({
  selector: "app-navi",
  template: `<mat-drawer-container [class.sideBar]="sideBar" autosize>
    <mat-drawer #drawer class="example-sidenav" mode="side">
      <div>
        <button type="button" mat-button (click)="changePage('')">
          当前计划
        </button>
        <button type="button" mat-button (click)="changePage('note')">
          笔记
        </button>
      </div>
    </mat-drawer>
    <mat-drawer-content>
      <ng-content></ng-content>
    </mat-drawer-content>
  </mat-drawer-container>`,
  styles: [
    `
      .sideBar {
        height: 100%;
      }
      button {
        width: 260px;
        margin-top: 10px;
        display: block;
      }
    `
  ]
})
export class NaviComponent implements OnInit {
  showFiller = true;
  sideBar = false;

  @ViewChild("drawer", { static: true }) drawerRef;

  constructor(private appSer: AppService, private router: Router) {}

  ngOnInit() {
    this.appSer.sideBar.subscribe((sideBar) => {
      console.log(sideBar);
      this.sideBar = sideBar;
      if (sideBar) {
        this.drawerRef.open();
      } else {
        this.drawerRef.close();
      }
    });
  }

  changePage(path) {
    this.router.navigate([path]);
  }
}
