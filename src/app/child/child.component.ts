import { Component, OnInit } from "@angular/core";
import { BridgeService } from "../bridge.service";

@Component({
  selector: "child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit {
  constructor(private bridge: BridgeService) {}

  ngOnInit() {
    // subscribe to the 'toChild' channel coming from the parent...
    this.bridge.toChild.subscribe(msg => {
      console.log("child got this from parent: ", msg);
      this.bridge.sendToParent(new Date());

      // also tell the siblings stuff...
      this.bridge.sendToSiblings({data: 'important data'});
    });

    // Subscribe to the sibling channel...
    this.bridge.toSiblings.subscribe(data => {
      console.log('i am child.component and i got some data on sibling channel: ', data);
    });

  }
}
