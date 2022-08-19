import { TestObserver } from "@/observer";
import { TestSubscriber } from "@/subscriber";

const observer = new TestObserver();
const subscriber = new TestSubscriber();

subscriber.setObservable(observer);

observer.fire();