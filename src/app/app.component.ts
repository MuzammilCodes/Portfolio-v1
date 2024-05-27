import { Component, HostListener } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project_P';

  //onscroll change nav bar bg
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = document.querySelector('.navbar') as HTMLElement;
    const scrollPosition = window.pageYOffset;
    const navbarHeight = navbar.offsetHeight;

    if (scrollPosition > navbarHeight) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

scrollToHome(){
  const element = document.getElementById("container1");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
scrollToExperience(){
  const element = document.getElementById("experience");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
scrollToEducation(){
  const element = document.getElementById("education");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
scrollToContact(){
  const element = document.getElementById("contactContainer");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

}
