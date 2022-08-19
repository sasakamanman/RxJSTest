import { Subject, Observable } from "rxjs";

export class TestObserver {
  private testSubject: Subject<string> = new Subject();
  testObservable: Observable<string> = this.testSubject;
  constructor() {
    console.log("hello!");
  }

  fire() {
    this.testSubject.next("fired!");
  }
}