import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from  '@angular/material';
import { BioComponent } from './bio/bio.component';
import { WorkComponent } from './work/work.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { ShowcaseComponent } from './showcase/showcase.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BioComponent,
    WorkComponent,
    SkillsComponent,
    ContactComponent,
    ShowcaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
