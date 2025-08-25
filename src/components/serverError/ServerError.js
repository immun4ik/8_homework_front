import './serverError.css';

export default class ServerError {
  constructor(status) {
    this.element = document.createElement('p');
    this.element.classList.add('serverError');
    this.element.textContent = `Ошибка сервера - ${status}. Может быть позже зайдешь?...`;
    document.body.append(this.element);
  }
}
