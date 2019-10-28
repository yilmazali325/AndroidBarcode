import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../data.service';
import { DatePipe } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSort } from '@angular/material';

@Component({
  selector: 'app-checkedoutitembybusiness',
  templateUrl: './checkedoutitembybusiness.page.html',
  styleUrls: ['./checkedoutitembybusiness.page.scss'],
})
export class CheckedoutitembybusinessPage implements OnInit {
 
  displayedColumns: string[] = ['id', 'barcodeNumber', 'name', 'isCheckedOut','quantity','email','date'];
  dataSource = new MatTableDataSource<any>();
  pipe: DatePipe;

  filterForm = new FormGroup({
      fromDate: new FormControl(),
      toDate: new FormControl(),
  });
  
  get fromDate() { return this.filterForm.get('fromDate').value; }
  get toDate() { return this.filterForm.get('toDate').value; }

  constructor(private httpService: DataService) { }

  ngOnInit() {
    this.httpService.get("http://localhost:8080/checkout/business?businessName=" + localStorage.getItem("businessName")).subscribe(res=>{
      console.log(res);
      this.dataSource.data = res as [];
    },err => {
      console.log(err);
    })
  }
  applyFilter() {
    this.dataSource.filter = ''+Math.random();
    this.pipe = new DatePipe('en');
    this.dataSource.filterPredicate = (data, filter) =>{
      if (this.fromDate && this.toDate) {
        return data.created >= this.fromDate && data.created <= this.toDate;
      }
      return true;
    }
  }

  @ViewChild(MatSort,null) sort: MatSort

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
}
