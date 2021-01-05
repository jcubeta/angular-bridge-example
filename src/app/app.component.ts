import { Component, OnInit, VERSION } from "@angular/core";
import { BridgeService } from "./bridge.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  childTime: Date = null;

  constructor(private bridge: BridgeService) {}

  ngOnInit() {
    this.bridge.toParent.subscribe(res => {
      console.log('parent got this from child: ', res);
      this.childTime = res;
    });
  }

  signalChild() {
    this.bridge.sendToChild("parent says get me the time!");
  }
}
