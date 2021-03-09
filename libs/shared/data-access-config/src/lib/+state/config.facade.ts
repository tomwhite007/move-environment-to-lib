import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ConfigPartialState } from './config.reducer';
@Injectable()
export class ConfigFacade {
  // showPopupToRestartJourney$ = this.store.pipe(
  //   select(CheckoutPageSelectors.showPopupToRestartCheckoutJourney),
  //   filter((showPopup) => !!showPopup)
  // );

  constructor(private store: Store<ConfigPartialState>) {}

  // checkoutGuest() {
  //   this.store.dispatch(CheckoutActions.checkoutGuest());
  // }
}
