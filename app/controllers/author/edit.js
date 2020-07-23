import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AuthorEditController extends Controller {
  @action submitChanges(form) {
    this.model.setProperties(form)

    this.model.save()
      .then(() => {
        this.transitionToRoute('author')
      })
  }
}
