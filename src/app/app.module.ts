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
import {MatMenuModule} from '@angular/material/menu'; 
/* IP Localisation */
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { ResultComponent } from './components/result/result.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { TermsComponent } from './components/terms/terms.component';
import { QuickLinkComponent } from './components/quick-link/quick-link.component';
import { AuthGuard } from './services/auth/auth.guard';
import { AboutComponent } from './components/about/about.component';
import { MainComponent } from './components/main/main.component';
import { AdDirective } from './components/main/ad.directive';
import { ServiceComponent } from './components/service/service.component';
import { GamesComponent } from './components/games/games.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { AccountPopupComponent } from './components/account-popup/account-popup.component';

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
    GamesComponent,
    ScrollToTopComponent,
    AccountPopupComponent
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
    MatExpansionModule,
    MatMenuModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
