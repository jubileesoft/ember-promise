import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class JubileeListComponent extends Component {
  // #region Fields

  _jubileeListItems = [];

  // #endregion Fields

  // #region Actions

  @action
  itemDidInsert(jubileeListItem) {
    this._jubileeListItems.push(jubileeListItem);
  }

  @action
  itemOnClick(itemId) {
    for (let i = 0; i < this._jubileeListItems.length; i++) {
      const element = this._jubileeListItems[i];
      if (element.id === itemId) {
        // unselect if already selected
        if (element.isSelected) {
          element.isSelected = false;
          if (element.args.isSelectedChanged) {
            element.args.isSelectedChanged(false);
          }
          break;
        }
        element.isSelected = true;
        if (element.args.isSelectedChanged) {
          element.args.isSelectedChanged(true);
        }
      } else {
        // only unselect if the element was selected
        if (element.isSelected) {
          element.isSelected = false;
          if (element.args.isSelectedChanged) {
            element.args.isSelectedChanged(false);
          }
        }
      }
    }
  }

  // #endregion Actions
}
