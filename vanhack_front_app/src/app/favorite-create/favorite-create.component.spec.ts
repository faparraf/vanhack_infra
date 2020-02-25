import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteCreateComponent } from './favorite-create.component';

describe('FavoriteCreateComponent', () => {
  let component: FavoriteCreateComponent;
  let fixture: ComponentFixture<FavoriteCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
