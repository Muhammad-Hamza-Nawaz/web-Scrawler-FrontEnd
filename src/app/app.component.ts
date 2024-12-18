import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BbcArticlesComponent } from './bbc-articles/bbc-articles.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone:true,
  imports: [HttpClientModule,CommonModule, BbcArticlesComponent],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  title = 'BBC News Articles';

  constructor() {
      console.log('AppComponent initialized');
  }
}
