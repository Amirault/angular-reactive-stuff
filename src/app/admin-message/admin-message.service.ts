import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

type Message = String;

@Injectable({
  providedIn: 'root'
})
export class AdminMessageService {

  private messagePipe : BehaviorSubject<Message>;

  constructor() {
    this.messagePipe = new BehaviorSubject<Message>("Hello World, your room is ready !");
  }

  public publishNewMessage(message : Message){
    this.messagePipe.next(message);
  }

  public message() : Observable<Message>{
    return this.messagePipe.asObservable();
  }
}
