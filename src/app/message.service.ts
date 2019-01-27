import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { AppState } from "./store/app.state";
import { selectMessages } from "./store/messages.selector";
import { Add, Clear } from "./store/messages.action";

@Injectable({
  providedIn: "root"
})
export class MessageService {
  add(message: string) {
    this.store.dispatch(new Add({ message }));
  }

  getMessages() {
    return this.store.pipe(select(selectMessages));
  }

  clear() {
    this.store.dispatch(new Clear());
  }

  constructor(private store: Store<AppState>) {}
}
