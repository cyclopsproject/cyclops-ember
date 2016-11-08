import Ember from 'ember';
import layout from '../templates/components/cyclops-toggle';

export default Ember.Component.extend({

  layout,
  value: false,

  didInsertElement() {
    let options = {
      defaultChecked: this.get('value'),
      onChange: Ember.run.bind(this, this.onChange)
    };

    this.$('input').toggle(options);
  },

  willDestroyElement() {
    this.$('input').toggle('destroy');
  },

  onChange(checked) {
    this.set('value', checked);
  }

});
