import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.page.html',
  styleUrls: ['./deleteproduct.page.scss'],
})
export class DeleteproductPage implements OnInit {

  public id ;

  constructor(private httpService : DataService) { }

  ngOnInit() {
  }
  deleteProductById(){
    let url = environment.url + "/product?id=" + this.id;
    this.httpService.delete(url).subscribe(res=>{
      alert("Succesfully deleted!");
    },err=>{
      alert(err);
      alert("An error has been occurred!")
    })
  }
}
