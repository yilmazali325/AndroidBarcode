import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-businessaccountdisable',
  templateUrl: './businessaccountdisable.page.html',
  styleUrls: ['./businessaccountdisable.page.scss'],
})
export class BusinessaccountdisablePage implements OnInit {
  public id;
  constructor(private httpService : DataService) { }

  ngOnInit() {
  }
  deleteUser(){
    let url = environment.url + "/user/delete?id=" + this.id;
    this.httpService.delete(url).subscribe(res=>{
      console.log(res);
      alert("User has been deleted!")
    },err=>{
      console.log(err);
      alert("An error has been occurred!")
    })
  }
}
