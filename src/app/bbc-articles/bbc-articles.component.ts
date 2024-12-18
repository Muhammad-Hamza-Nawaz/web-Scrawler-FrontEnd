import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { CommonModule } from '@angular/common';
import { ScraperService } from '../scraper.service';

@Component({
  selector: 'app-bbc-articles',
  standalone:true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './bbc-articles.component.html',
  styleUrls: ['./bbc-articles.component.css']
  
})
export class BbcArticlesComponent implements OnInit {
  articles: any[] = [];

  constructor(private scraperService : ScraperService) { }

  ngOnInit(): void {
    this.scraperService.getArticles().subscribe((data) => {
    
      this.articles = data;
    }, (error) => {
      console.error("Error fetching data:", error);
    });
  }
}

