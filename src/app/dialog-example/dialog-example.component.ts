import { Component, OnInit, Inject } from '@angular/core';
import { CommonService } from '../common.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.scss'],
})
export class DialogExampleComponent implements OnInit {
  allMentors: Object = {};

  constructor(
    private commonService: CommonService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log('contructor', data);
  }

  mentorObj = this.data.data;
  isEdit = this.data.isEdit;

  ngOnInit(): void {
    // this.getLatestUser();
  }

  addMentor(formObj: any[]) {
    console.log(formObj);
    this.commonService.createMentor(formObj).subscribe((res) => {
      // this.getLatestUser();
      Swal.fire('Success!', 'Your Data Have Been Added.', 'success');
    });
  }
  // getLatestUser() {
  //   this.commonService.getAllMentors().subscribe((res) => {
  //     this.allMentors = res;
  //   });
  // }

  // deleteMentor(user: any) {
  //   this.commonService.deleteMentor(user).subscribe(() => {
  // this.getLatestUser();
  //   });
  // }

  updateMentor() {
    this.isEdit = !this.isEdit;
    this.commonService.updateMentor(this.mentorObj).subscribe(() => {
      // this.getLatestUser();
      Swal.fire('Success!', 'Your Data Have Been Updated.', 'success');
    });
  }
}
