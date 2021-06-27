import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/* Material UI Components */
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import {MatSnackBarModule} from '@angular/material/snack-bar';
 import {MatExpansionModule} from '@angular/material/expansion'; 

/* IP Localisation */
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInComponent } from './sign-in/sign-in.component';
import { TermsComponent } from './terms/terms.component';
import { QuickLinkComponent } from './quick-link/quick-link.component';
import { AuthGuard } from './auth/auth.guard';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { AdDirective } from './main/ad.directive';
import { ServiceComponent } from './service/service.component';
import { GamesComponent } from './games/games.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    QuizComponent,
    ResultComponent,
    SignInComponent,
    TermsComponent,
    QuickLinkComponent,
    AboutComponent,
    MainComponent,
    AdDirective,
    ServiceComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    FormsModule, 
    ReactiveFormsModule,
    MatToolbarModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatExpansionModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
