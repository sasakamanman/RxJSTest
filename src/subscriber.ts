import {TestObserver} from "./observer";

export class TestSubscriber {
  private observable: null | TestObserver = null;

  setObservable(observable: TestObserver) {
    this.observable = observable;
    this.observable.testObservable.subscribe((message) => {
      console.log(message);
    });
  }
}