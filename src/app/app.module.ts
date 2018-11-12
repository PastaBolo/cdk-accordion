import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CdkAccordionModule } from '@angular/cdk/accordion'

import { AppComponent } from './app.component'
import { ExpandableComponent } from './expandable/expandable.component'
import { AccordionComponent } from './accordion/accordion.component'

@NgModule({
  declarations: [AppComponent, ExpandableComponent, AccordionComponent],
  imports: [BrowserModule, BrowserAnimationsModule, CdkAccordionModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
