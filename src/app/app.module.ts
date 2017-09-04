import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AuthService } from './auth/auth.service';
import { ToolListComponent } from './tool-list/tool-list.component';
import { ToolItemComponent } from './tool-item/tool-item.component';
import { ToolFormComponent } from './tool-form/tool-form.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { ToolModule } from './tool/tool.module';
import { ToolService } from './tool/tool.service';

const appRoutes: Routes = [
  { path: 'tool/create', component: ToolFormComponent },
  { path: 'tools',      component: ToolListComponent },
  // { path: 'tool/:id',      component: ToolListComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  { path: '**',
    redirectTo: '/tools',
    pathMatch: 'full'
  }
  // { path: '**', component: ToolListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ToolListComponent,
    ToolItemComponent,
    ToolFormComponent,
    AppHeaderComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    ToolModule
  ],
  providers: [
    AuthService,
    ToolService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
