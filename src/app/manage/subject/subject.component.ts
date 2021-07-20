import { Component, OnInit } from '@angular/core';
import { ManageService } from '../manage.service';
import { Std } from '../standard/standard.model';
import { Subject } from './subject.model';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  public StdModel: Std = new Std;
  public STD: Std[] = [];
  public SubjectModel: Subject = new Subject;
  public subjects: Subject[] = [];
  val = 0;
  selectedStd: any;
  stdId: any;
  editSub: Subject[] = [];
  addSubjects: any = [];
  constructor(
    private manageService: ManageService,
  ) {
    this.getStdList();
    this.getSubject();
  }

  ngOnInit(): void {
    this.addSubjects = [{ name: this.val }];
    this.val++;
  }
  addSubjectList() {
    this.val++;
    this.addSubjects.push({ name: this.val });
  }
  removeSubjectList(val) {
    this.addSubjects.splice(val, 1);
  }
  getStdList() {
    this.manageService.getStdList().subscribe((data: any) => {
      this.STD = data;
    });
  }
  selectSTDList(id) {
    this.stdId = id;
    this.STD.forEach(element => {
      if (element.id == id) {
        this.selectedStd = element.stdname;
      }
    })
  }
  saveSubject(data) {
    this.addSubjects.forEach(element => {
      element.id = this.stdId
    });
    this.manageService.addSubject(this.addSubjects).subscribe((data: any) => {
      this.getSubject();
    })
  }
  getSubject() {
    this.manageService.getSubjectList().subscribe((data: any) => {
      this.subjects = data;
    });
  }
  editSubject(data) {
    this.editSub = data;
    debugger
  }
  updateSubject(data) {

    this.manageService.updateSubjectList(data).subscribe((req) => {
      this.getSubject();
    })

  }
  removeSubject(id){
    this.manageService.removeSubjectList(id).subscribe((req) => {
      this.getSubject();
    })
  }


}
