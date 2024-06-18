import { Component, HostListener, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{ 
  constructor(private fb:FormBuilder){}

  ngOnInit() {
  }

  formApi:FormGroup = this.fb.group({
    from_name:'',
    from_email:'',
    message:''
  })

 async send(){
  emailjs.init('kJfS8RR9dekvphXCy'); 
      let response  = await emailjs.send("service_pwe1eny","template_r7ay4xe",{
        from_name: this.formApi.value.from_name,
        to_name: "Muzammil",
        from_email: this.formApi.value.from_email,
        message: this.formApi.value.message,
        });
      
      console.log(response, typeof(response));
      if(response.status == 200 && response.text == 'OK'){
        Swal.fire({
          title:"Thank You",
          text: "Got your message! I'll get back to you soon.",
          icon: 'success',
          confirmButtonColor:'#2778c4',
          confirmButtonText: 'OK',
          customClass: {
              popup: 'my-custom-swal',
              title: 'my-custom-title',
          }
      });
      }
      this.formApi.reset();
  }


// 
//onscroll change nav bar bg
@HostListener('window:scroll', [])
onWindowScroll() {
  const navbar = document.querySelector('.navbar') as HTMLElement;
  const navbartoggler = document.querySelector('.navbar-toggler') as HTMLElement;
  const scrollPosition = window.pageYOffset;
  const navbarHeight = navbar.offsetHeight;

  if (scrollPosition > navbarHeight) {
    navbar.classList.add('scrolled');
    navbartoggler.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
    navbartoggler.classList.remove('scrolled');
  }
}

scrollToContainer(container:string){
  const element = document.getElementById(container);
  if (element) {
    element.style.marginTop = '-50px';
    element.scrollIntoView({ behavior: "smooth" });
    element.style.marginTop = '0';
  }
}
// 

}
