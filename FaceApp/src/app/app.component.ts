import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'FaceApp';

  //Captura de video WebCam
  public MediaStream?: MediaStream;

  //SlideNav
  showFiller = false;

  ngOnInit(): void {
  
  }

}
