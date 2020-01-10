import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class IndexViewComponent extends Component {
  // #region Services

  @service router;

  // #endregion Services

  @tracked
  isSettingsOpen = false;

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
