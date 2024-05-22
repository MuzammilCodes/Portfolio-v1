import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project_P';

scrollToHome(){
  const contactElement = document.getElementById("container1");
  if (contactElement) {
    contactElement.scrollIntoView({ behavior: "smooth" });
  }
}
scrollToExperience(){
  const contactElement = document.getElementById("experience");
  if (contactElement) {
    contactElement.scrollIntoView({ behavior: "smooth" });
  }
}
scrollToAboutMe(){
  const contactElement = document.getElementById("container2");
  if (contactElement) {
    contactElement.scrollIntoView({ behavior: "smooth" });
  }
}
scrollToContact(){
  const contactElement = document.getElementById("contactContainer");
  if (contactElement) {
    contactElement.scrollIntoView({ behavior: "smooth" });
  }
}

}
