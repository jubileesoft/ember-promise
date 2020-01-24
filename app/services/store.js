import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class StoreService extends Service {
  // #region Properties

  @tracked firstName;
  @tracked lastName;

  // #endregion Properties

  // #region Fields

  _keys = [];

  // #endregion Fields

  // #region COnstructor

  constructor() {
    super(...arguments);

    const keysString = window.localStorage.getItem('keys');
    if (!keysString) {
      return;
    }

    const keys = keysString.split(',');
    keys.forEach(key => {
      this.set(key, window.localStorage.getItem(key));
    });
  }

  // #endregion COnstructor

  // #region Methods

  @action
  setProp(key, value) {
    this.set(key, value);
    window.localStorage.setItem(key, value);

    if (this._keys.indexOf(key) !== -1) {
      return;
    }

    this._keys.push(key);

    window.localStorage.setItem('keys', this._keys.join(','));
  }

  clearStorage() {
    this._keys.forEach(key => {
      this.set(key, null);
      window.localStorage.removeItem(key);
    });
  }

  // #endregion Methods
}
