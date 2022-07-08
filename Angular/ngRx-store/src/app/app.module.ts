import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { ArticleComponent } from './components/article.component';
import { reducers } from './reducers/reducers';

@NgModule({
      imports: [
            BrowserModule,
            StoreModule.forRoot(reducers)
      ],
      declarations: [
            AppComponent,
            ArticleComponent
      ],
      providers: [

      ],
      bootstrap: [
            AppComponent
      ]
})
export class AppModule { }
