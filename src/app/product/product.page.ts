import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSortable, MatSort } from '@angular/material';
export interface PeriodicElement {
  id:number,
  barcodeNumber:string,
  name: string,
  isCheckedOut: string

}
@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
 
  displayedColumns: string[] = ['id', 'barcodeNumber', 'name', 'quantity'];
  dataSource = new MatTableDataSource<any>();

  constructor(private httpService:DataService) { }
// to put next to the class fields of the component


  ngOnInit() {
    this.httpService.get("http://localhost:8080/product/business?businessName=" + localStorage.getItem("businessName")).subscribe(res=>{
      console.log(res);
      this.dataSource.data = res as [];
    },err => {
      console.log(err);
    })
  }
  @ViewChild(MatSort,null) sort: MatSort

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
}

