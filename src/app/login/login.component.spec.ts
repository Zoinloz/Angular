import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { MatSpinner, MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInput, MatInputModule } from '@angular/material/input';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let httpTestingController : HttpTestingController

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports :[FormsModule, 
        MatProgressSpinnerModule, 
        MatInputModule, 
        HttpClientTestingModule,
        MatSnackBarModule,
        BrowserAnimationsModule],
      declarations: [ LoginComponent ]
    })
    .compileComponents(); 
    
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    httpTestingController = TestBed.get(HttpTestingController);
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

  it('connexion true', () => {
    // Test initialisation du test
    const user = 'Bret'
    expect(component.logged).toBeFalsy();
    expect(component.login).toBeUndefined();
    component.login = user;

    //Exe de la méthode de test
    component.connexion();

    // Attend toi à avoir une requête GET (par défaut) sur cette URL
    const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/users?username='+component.login)
    
    // Répond à la requête avec telle réponse
    req.flush([{}]);

    // Vérification que toutes les req sont traités
    httpTestingController.verify();

    // Test bon déroulement de la méthode
    expect(component.logged).toBeTruthy();
    
  });

  it('connexion false', () => {
    // Test initialisation du test
    const user = ''
    expect(component.logged).toBeFalsy();
    expect(component.login).toBeUndefined();
    component.login = user;

    //Exe de la méthode de test
    component.connexion();

    // Attend toi à avoir une requête GET (par défaut) sur cette URL
    const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/users?username='+component.login)
    
    // Répond à la requête avec telle réponse
    req.flush([]);

    // Vérification que toutes les req sont traités
    httpTestingController.verify();

    // Test bon déroulement de la méthode
    expect(component.logged).toBeFalsy();
    
  });

});
