import Service from '@ember/service';

const keys = {
  FIRST_NAME: 'firstName',
  LAST_NAME: 'lastName'
};

export default class StoreService extends Service {
  // #region Properties

  get firstName() {
    return window.localStorage.getItem(keys.FIRST_NAME);
  }
  set firstName(value) {
    if (value == null) {
      return value;
    }
    window.localStorage.setItem(keys.FIRST_NAME, value);
    return value;
  }

  get lastName() {
    return window.localStorage.getItem(keys.LAST_NAME);
  }
  set lastName(value) {
    window.localStorage.setItem(keys.LAST_NAME, value);
    return value;
  }

  // #endregion Properties

  // #region Methods

  clearStorage() {
    for (let key in keys) {
      //console.log(key);
      this.set(keys[key], null);
      window.localStorage.removeItem(keys[key]);
    }

    //window.localStorage.clearStorage();
  }

  // #endregion Methods
}
