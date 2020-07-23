import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class AuthorFormComponent extends Component {
  @tracked first = this.args.author.first;

  @tracked last = this.args.author.last;

  @action submitChanges(ev) {
    ev.preventDefault();

    this.args.submitChanges({
      first: this.first,
      last: this.last,
    })
  }
}
