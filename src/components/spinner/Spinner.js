import './spinner.css';
import spinner from '../../img/spinner.svg';

export default class Spinner {
  constructor() {
    this.spinner = document.createElement('img');
    this.spinner.classList = 'spinner';
    this.spinner.alt = 'preloader';
    this.spinner.src = spinner;
    document.body.append(this.spinner);
  }

  removeSpinner() {
    this.spinner.remove();
  }
}
