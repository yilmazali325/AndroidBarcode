import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataService } from '../data.service';

@Component({
  selector: 'app-userdelete',
  templateUrl: './userdelete.page.html',
  styleUrls: ['./userdelete.page.scss'],
})
export class UserdeletePage implements OnInit {
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
