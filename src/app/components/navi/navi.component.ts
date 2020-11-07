import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { AppService } from "src/app/services/app.service";

@Component({
  selector: "app-navi",
  template: `<mat-drawer-container [class.sideBar]="sideBar" autosize>
    <mat-drawer #drawer class="example-sidenav" mode="side">
      <div>
        <button type="button" mat-button (click)="changePage('')" [class.current]="current === '/'">
          当前计划
        </button>
        <button type="button" mat-button (click)="changePage('note')" [class.current]="current === '/note'">
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
        width: 240px;
        display: block;
        height: 45px;
        text-align: left;
        border-radius: 0;
        box-sizing: border-box;
        border-left: 5px solid transparent;
      }
      button.current{
        background: #353535;
        border-left: 5px solid #009688;
      }
    `
  ]
})
export class NaviComponent implements OnInit {
  showFiller = true;
  sideBar = false;
  current = '/';

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
    this.router.events.subscribe((result: any) => {
      if (!result.url) {
        return;
      }
      this.current = result.url;
      console.log(this.current);
    })
  }

  changePage(path) {
    this.router.navigate([path]);
  }
}
