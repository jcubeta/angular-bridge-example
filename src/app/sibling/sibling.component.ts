import { Component, OnInit } from '@angular/core';
import { BridgeService } from '../bridge.service';

@Component({
  selector: 'sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit {

  constructor(private bridge: BridgeService) { }

  ngOnInit() {
    // subscribe to the sibling channel...
    this.bridge.toSiblings.subscribe(data => {
      console.log('i am sibling.component and i got some data on sibling channel: ', data);
    });
  }

}