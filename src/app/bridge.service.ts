import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { PersonData } from "./person-data";

@Injectable()
export class BridgeService {
  private toChildConduit = new Subject<string>();
  private toParentConduit = new Subject<Date>();
  private toSiblingsConduit = new Subject<Object>();

  private personDataChannel = new Subject<PersonData>();

  // Observable string streams
  toChild = this.toChildConduit.asObservable();
  toParent = this.toParentConduit.asObservable();
  toSiblings = this.toSiblingsConduit.asObservable();
  
  personDataReceiver = this.personDataChannel.asObservable();

  sendPersonData(person: PersonData) { 
    this.personDataChannel.next(person);
  }


  // Service message commands
  sendToChild(msg: string) {
    this.toChildConduit.next(msg);
  }

  sendToParent(currentTime: Date) {
    this.toParentConduit.next(currentTime);
  }

  sendToSiblings(data: Object) {
    this.toSiblingsConduit.next(data);
  }
}
