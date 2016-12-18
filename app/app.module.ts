import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //for using the banana in the box
import { AppComponent } from './app.component';
import { HttpModule} from '@angular/http';



@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent ], //declare all the components in use!
  bootstrap: [ AppComponent ] //starting point
})
export class AppModule {}