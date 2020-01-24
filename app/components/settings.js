import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class SettingsComponent extends Component {
  // #region Services

  @service store;

  // #endregion Services

  // #region Methods

  @action
  clear() {
    this.store.clearStorage();
  }

  // #endregion Methods
}
