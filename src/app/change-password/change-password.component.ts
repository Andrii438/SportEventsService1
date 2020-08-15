import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
   username:string='';
   email:string='';
   password:string='';
  constructor(private service:DataService,
    private router:Router) { }

  ngOnInit(): void {

  }
  // showData(){
  //   console.log(this.username+" Email:"+this.email+" Password:"+this.password)
  // }
  changePassword(){
    this.service.forgotPassword(this.username,this.email,this.password).subscribe(
      data=>{
        if(data===null){
          console.log("no data")
        }else{
        console.log(data)
        this.router.navigate(['login'])
        }
      }
    )
  }
}
