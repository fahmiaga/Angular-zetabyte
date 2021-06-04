import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, DialogExampleComponent],
  entryComponents: [DialogExampleComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    HttpClientModule,
    FormsModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
