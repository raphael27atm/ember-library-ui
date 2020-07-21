import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AuthorCreateController extends Controller {
  // reset() {
  //   this.setProperties({
  //     first: '',
  //     last: '',
  //   })
  // }

  @action
  saveAuthor(e) {
    e.preventDefault();

    let author = this.store.createRecord('author', this.model)

    author.save()
      .then(() => {
        this.transitionToRoute('author.index');
      })
  }
}
