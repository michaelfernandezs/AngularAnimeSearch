import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerAnimeComponent } from './ver-anime.component';

describe('VerAnimeComponent', () => {
  let component: VerAnimeComponent;
  let fixture: ComponentFixture<VerAnimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerAnimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
