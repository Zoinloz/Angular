import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { MatSpinner, MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInput, MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports :[FormsModule, MatProgressSpinnerModule, MatInputModule, HttpClientModule],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('good init', () => {
    
    expect(component.logged).toBeTruthy();
    expect(component.login).toBeTruthy();
    
  });

  it('connexion', () => {
    
    expect(component.logged).toBeTruthy();
    component.connexion();
    expect(component.connexion()).toBeTruthy();
  });

});
