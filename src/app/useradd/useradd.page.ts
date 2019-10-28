import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-useradd',
  templateUrl: './useradd.page.html',
  styleUrls: ['./useradd.page.scss'],
})
export class UseraddPage implements OnInit {

  private firstName;
  private lastName;
  private email;
  private role;
  private password;

  public accountStatuses:any;
  public accountStatus;
  constructor(private httpService : DataService) {
    this.accountStatuses = [true,false];
   }

  ngOnInit() {
  }

  addUser(){
    let obj = {
      "firstName" : this.firstName,
      "lastName" : this.lastName,
      "email" : this.email,
      "role" : "local",
      "password" : this.password,
      "accountDisabledStatus" : this.accountStatus,
      "businessName" : localStorage.getItem("businessName")
    }
    let url = environment.url + "/user/register";
    this.httpService.post(url,obj).subscribe(res=>{
        console.log(res);
        alert("User has been updated!")
    },err=>{
        console.log(err);
        alert("An error has been occurred!")
    })

  }

}
