import { Component, OnInit } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { CreateDialogComponent } from "./create-dialog/create-dialog.component";



@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit{
  todo = [];
  process = [];
  done = [];

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    const todoStr = localStorage.getItem("tl-todo") || "[]";
    const processStr = localStorage.getItem("tl-process") || "[]";
    const doneStr = localStorage.getItem("tl-done") || "[]";
    this.todo = JSON.parse(todoStr);
    this.process = JSON.parse(processStr);
    this.done = JSON.parse(doneStr);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    this.saveToLocal();
  }

  saveToLocal() {
    localStorage.setItem("tl-todo", JSON.stringify(this.todo));
    localStorage.setItem("tl-process", JSON.stringify(this.process));
    localStorage.setItem("tl-done", JSON.stringify(this.done));
  }

  addTodo(result) {
    const date = new Date();
    this.todo.unshift({
      id: Math.random(),
      text: result.text,
      type: result.type,
      priority: result.priority,
      time: `${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
    });
    this.saveToLocal();
  }

  start(item) {
    this.todo = this.todo.filter((one) => one.id !== item.id);
    this.process.unshift(item);
  }

  finish(item) {
    this.process = this.process.filter((one) => one.id !== item.id);
    this.done.unshift(item);
  }

  deleteFromDone(item) {
    this.done = this.done.filter((one) => one.id !== item.id);
    this.saveToLocal();
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(CreateDialogComponent, {
      width: "450px",
      height: "550px"
    });

    dialogRef.afterClosed().subscribe((result) => {
      // alert(JSON.stringify(result));
      if (!result || !result.text) {
        return;
      }
      this.addTodo(result);
    });
  }
}
