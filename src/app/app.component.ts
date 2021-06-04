import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { CommonService } from './common.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import Swal from 'sweetalert2';
import { from } from 'rxjs';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  dataSource: any;
  search: any;
  allMentors: Object = {};

  @ViewChild(MatPaginator) paginator: any;

  constructor(private commonService: CommonService, public dialog: MatDialog) {}

  ngOnInit() {
    this.getLatestUser();
    this.paginator = MatPaginator;

    this.commonService.getAllMentors().subscribe((res: any) => {
      this.dataSource = new MatTableDataSource(res);
    });

    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = [
    'position',
    'name',
    'weight',
    'symbol',
    'status',
    'action',
  ];

  editMentor(mentor: any) {
    let mentorObj = {
      data: mentor,
      isEdit: true,
    };
    // console.log(mentor);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = mentorObj;
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    this.dialog.open(DialogExampleComponent, dialogConfig);
  }

  openDialog() {
    let mentorObj = {
      data: [],
      isEdit: false,
      datas: this.getLatestUser(),
    };

    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = mentorObj;
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    this.dialog.open(DialogExampleComponent, dialogConfig);
  }

  deleteMentor(user: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.isConfirmed) {
        this.commonService.deleteMentor(user).subscribe(() => {
          this.getLatestUser();
        });

        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    });
  }

  getLatestUser() {
    this.commonService.getAllMentors().subscribe((res: any) => {
      this.allMentors = res;
      this.dataSource = new MatTableDataSource(res);
    });
  }

  Search(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
