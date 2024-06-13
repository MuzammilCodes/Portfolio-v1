import { Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy {
  constructor(private router: Router) { }
  
  @ViewChild('videoPlayer') videoPlayer: ElementRef;

  ngOnDestroy() {
    if (this.videoPlayer && this.videoPlayer.nativeElement) {
      this.videoPlayer.nativeElement.pause();
      console.log('Video has been paused by ngOnDestroy');
    }
  }

  onPlay() {
    console.log('Video is playing');
  }

  onPause() {
    console.log('Video has been paused');
  }
  redirectToPortfolio(){
    this.router.navigate(['/Portfolio']);
  }

}
