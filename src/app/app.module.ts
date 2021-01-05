import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { ChildComponent } from "./child/child.component";
import { BridgeService } from "./bridge.service";
import { SiblingComponent } from './sibling/sibling.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, ChildComponent, SiblingComponent],
  bootstrap: [AppComponent],
  providers: [BridgeService]
})
export class AppModule {}
