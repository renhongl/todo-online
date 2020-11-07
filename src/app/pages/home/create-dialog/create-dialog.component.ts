import { Component } from "@angular/core";
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators
} from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { MatDialogRef } from "@angular/material/dialog";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: "app-create-dialog",
  templateUrl: "./create-dialog.component.html",
  styleUrls: ["./create-dialog.component.css"]
})
export class CreateDialogComponent {
  textFormControl = new FormControl("", [Validators.required]);

  matcher = new MyErrorStateMatcher();

  text = "";
  typeList = [
    {
      name: "错误",
      value: 0
    },
    {
      name: "更新",
      value: 1
    },
    {
      name: "新功能",
      value: 2
    }
  ];

  priorityList = [
    {
      name: "非常低",
      value: 0
    },
    {
      name: "一般",
      value: 1
    },
    {
      name: "重要",
      value: 2
    }
  ];
  priority = this.priorityList[0];
  type = this.typeList[0];

  constructor(private dialog: MatDialogRef<CreateDialogComponent>) {}

  save() {
    this.dialog.close({
      text: this.text,
      type: this.type,
      priority: this.priority
    });
  }
}
