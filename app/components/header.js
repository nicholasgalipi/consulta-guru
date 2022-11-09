import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class HeaderComponent extends Component {
  @tracked
  fixedHeader = false;
  @tracked
  scrolling = false;

  constructor(...args) {
    super(...args);

    window.onscroll = () => {
      if (this.scrolling === false) {
        this.scrolling = true;
        setTimeout(() => {
          if (window.scrollY >= 50) {
            this.fixedHeader = true;
          } else {
            this.fixedHeader = false;
          }
          this.scrolling = false;
        }, 100);
      }
    };
  }
}
