import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageWyswygComponent } from './image-wyswyg.component';

describe('ImageWyswygComponent', () => {
  let component: ImageWyswygComponent;
  let fixture: ComponentFixture<ImageWyswygComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageWyswygComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageWyswygComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
