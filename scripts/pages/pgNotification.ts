import PgNotificationDesign from 'generated/pages/pgNotification';
import { withDismissAndBackButton } from '@smartface/mixins';
import { Router, Route } from '@smartface/router';
import Color from '@smartface/native/ui/color';

export default class PgNotification extends withDismissAndBackButton(PgNotificationDesign) {
    isAll = false;
  constructor(private router?: Router, private route?: Route) {
    super({});
  }

  /**
   * @event onShow
   * This event is called when the page appears on the screen (everytime).
   */
  onShow() {
    super.onShow();
    this.initBackButton(this.router); //Addes a back button to the page headerbar.
    
  }

  toggle() {
    this.isAll = !this.isAll;
    this.lblAll.textColor = this.isAll ? Color.create("#4C9EEB") : Color.create("#687684");
    this.lblMention.textColor = !this.isAll ? Color.create("#4C9EEB") : Color.create("#687684");

    this.bottomLineAll.backgroundColor = this.isAll ? Color.create("#4C9EEB") : Color.TRANSPARENT;
    this.bottomLineMention.backgroundColor = !this.isAll ? Color.create("#4C9EEB") : Color.TRANSPARENT;
  }

  /**
   * @event onLoad
   * This event is called once when the page is created.
   */
  onLoad() {
    super.onLoad();
    this.toggle();
    this.flAll.onTouchEnded = () => {
        this.toggle();
    }
    this.flMention.onTouchEnded = () => {
        this.toggle();
    }
  }
}
