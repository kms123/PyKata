import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { PokemonComponent } from './pokemon.component';
import { PokemonService } from './pokemon.service';
import { AppRoutingModule } from './app-routing.module';
import { PokemonDetailComponent } from './pokemon-details.component';
import { UppercaseFirstLettersPipe } from './uppercase-first-letter.pipe';
import { DataCleaningService } from './data-cleaning.service';
import { MoveDetailComponent } from './move-details.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, PokemonComponent, PokemonDetailComponent, MoveDetailComponent, UppercaseFirstLettersPipe ],
  providers: [ PokemonService, DataCleaningService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
