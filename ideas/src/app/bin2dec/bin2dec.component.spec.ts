import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { Bin2decComponent } from './bin2dec.component';

describe('Bin2decComponent', () => {
  let component: Bin2decComponent;
  let fixture: ComponentFixture<Bin2decComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bin2decComponent ],
      imports:[FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bin2decComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be 4', () => {
    expect(4).toEqual(component.valorMudouBin("100"));
  });
});
