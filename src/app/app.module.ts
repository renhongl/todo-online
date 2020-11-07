import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { MatButtonModule } from "@angular/material/button";
import { Routes, RouterModule } from "@angular/router";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatCardModule } from "@angular/material/card";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatInputModule } from "@angular/material/input";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSelectModule } from "@angular/material/select";
import { MatTooltipModule } from "@angular/material/tooltip";

import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./pages/home/home.component";
import { NaviComponent } from "./components/navi/navi.component";
import { NoteComponent } from "./pages/note/note.component";
import { CreateDialogComponent } from "./pages/home/create-dialog/create-dialog.component";

import { AppService } from "./services/app.service";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "note",
    component: NoteComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NaviComponent,
    NoteComponent,
    CreateDialogComponent
  ],
  entryComponents: [CreateDialogComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    DragDropModule,
    MatCheckboxModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatTooltipModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {}
