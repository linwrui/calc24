import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CardsPanelComponent } from "./components/cards-panel/cards-panel/cards-panel.component";

@NgModule({
  declarations: [
    AppComponent,
    CardsPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [CardsPanelComponent]
})
export class AppModule { }
