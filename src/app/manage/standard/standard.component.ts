import { Component, OnInit } from '@angular/core';
import { ManageService } from '../manage.service';
import { Std } from './standard.model';

@Component({
  selector: 'app-standard',
  templateUrl: './standard.component.html',
  styleUrls: ['./standard.component.css']
})
export class StandardComponent implements OnInit {
  public StdModel: Std = new Std;
  public STD: Std[] = [];
  constructor(
    private manageService: ManageService
  ) {
    this.getStdList();
   }

  ngOnInit(): void {
  }
  addStdList() {
    this.StdModel.isactive = true;
    this.manageService.saveStdList(this.StdModel).subscribe((response) => {
      this.getStdList();
    })
  }
  getStdList() {
    this.manageService.getStdList().subscribe((data: any) => {
      this.STD = data;
    });
  }
  removeStandard(id){
    this.manageService.removeStdList(id).subscribe((req) => {
      this.getStdList();
    })
  }

}
