import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreditCheckComponent } from './credit-check.component';

describe('CreditCheckComponent', () => {
  let component: CreditCheckComponent;
  let fixture: ComponentFixture<CreditCheckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditCheckComponent]
    });
    fixture = TestBed.createComponent(CreditCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
