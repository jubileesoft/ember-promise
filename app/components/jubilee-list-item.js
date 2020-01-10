import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { uuid } from 'uuidv4';
import { computed } from '@ember/object';

export default class JubileeListItemComponent extends Component {
  // #region Fields

  _id = null;
  _argIsSelected = null;

  @tracked
  _isSelected = false;

  // #endregion Fields

  // #region Properties

  get id() {
    if (!this._id) {
      this._id = uuid();
    }
    return this._id;
  }

  // @computed('args.isSelected')
  get isSelected() {
    console.log('TADA');
    if (typeof this.args.isSelected === 'undefined') {
      return this._isSelected;
    }

    if (this.args.isSelected === this._argIsSelected) {
      return this._isSelected;
    }

    this._argIsSelected = this.args.isSelected;
    this._isSelected = this.args.isSelected;

    return this._isSelected;
  }
  set isSelected(value) {
    console.log(value);
    this._isSelected = value;
    return value;
  }

  // #endregion Properties
}
