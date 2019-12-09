import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { MatSpinner, MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInput, MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports :[FormsModule, 
        MatProgressSpinnerModule, 
        MatInputModule, 
        HttpClientModule,
        MatSnackBarModule,
        BrowserAnimationsModule],
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
    
    expect(component.logged).toBeFalsy();
    expect(component.login).toBeUndefined();
    expect(component.mdp).toBeUndefined();
    expect(component.loading).toBeFalsy();
    
  });

  // it('connexion', () => {
    
  //   expect(component.logged).toBeFalsy();
  //   component.connexion();
  //   expect(component.login).toBeDefined();
  //   expect(component.mdp).toBeNull();
  //   expect(component.loading).toBeTruthy();
    
  // });

});
