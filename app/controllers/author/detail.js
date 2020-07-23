import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AuthorDetailController extends Controller {

  @action
  deleteAuthor(author) {
    author.deleteRecord()

    author.save().then(() => {
      this.transitionToRoute("author.index")
    })
  }
}
