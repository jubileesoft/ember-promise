import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class IndexViewComponent extends Component {
  // #region Services

  @service router;

  // #endregion Services

  // #region Actions

  @action
  aClicked() {
    this.router.transitionTo('a');
  }

  @action
  bClicked() {
    this.router.transitionTo('b');
  }

  @action
  cClicked() {
    this.router.transitionTo('c');
  }

  @action
  dClicked() {
    this.router.transitionTo('d');
  }

  // #endregion Actions
}
