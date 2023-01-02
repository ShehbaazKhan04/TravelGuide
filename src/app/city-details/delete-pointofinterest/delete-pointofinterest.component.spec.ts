import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePointofinterestComponent } from './delete-pointofinterest.component';

describe('DeletePointofinterestComponent', () => {
  let component: DeletePointofinterestComponent;
  let fixture: ComponentFixture<DeletePointofinterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePointofinterestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletePointofinterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
