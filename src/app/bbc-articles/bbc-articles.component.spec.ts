import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BbcArticlesComponent } from './bbc-articles.component';

describe('BbcArticlesComponent', () => {
  let component: BbcArticlesComponent;
  let fixture: ComponentFixture<BbcArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BbcArticlesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BbcArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
