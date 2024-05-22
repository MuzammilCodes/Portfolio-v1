import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs from '@emailjs/browser';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{ 
  isResponseOk: boolean = false;
  gifPlayedOnce:boolean = false;
  ngOnInit(): void {
    
  }
  constructor(private fb:FormBuilder){

  }
  formApi:FormGroup = this.fb.group({
    from_name:'',
    to_name:'ADMIN',
    message:''
  })

//  async send(){
//   emailjs.init('iC9MB9sJVXQ47tbuf');
//     let response  = await emailjs.send("service_kyt60zb","template_qb54fz8",{
//       from_name: this.formApi.value.from_name,
//       to_name: "muzammil",
//       message: this.formApi.value.message,
//       });
//       console.log(response, typeof(response));
//       if(response.status == 200 && response.text == 'OK'){

//       }
//       this.formApi.reset();
//   }

async send(){
    this.isResponseOk = true;
}

  
}
