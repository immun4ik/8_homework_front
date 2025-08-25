import './chat.css';

export default class Chat {
  constructor(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('This is not HTML element!');
    }

    this.container = container;

    this.chat = document.createElement('div');
    this.chat.classList.add('chat');

    this.messages = document.createElement('div');
    this.messages.classList.add('messages');

    this.form = document.createElement('form');
    this.form.classList.add('chat__form');

    this.label = document.createElement('label');
    this.label.classList.add('chat__label', 'visually-hidden');
    this.label.for = 'text';
    this.label.textContent = 'Введите сообщение:';

    this.input = document.createElement('input');
    this.input.classList.add('chat__input');
    this.input.id = 'text';
    this.input.placeholder = 'Введите сообщение';
    this.input.required = true;

    this.btn = document.createElement('button');
    this.btn.classList.add('chat__btn');

    this.form.append(this.label, this.input, this.btn);

    this.chat.append(this.messages, this.form);

    this.container.append(this.chat);
  }

  addSubmitEvent(handler) {
    this.form.addEventListener('submit', handler);
  }

  getMessage() {
    return this.input.value.trim();
  }

  addMessage(msgInfo, msgText, isYours) {
    const message = document.createElement('div');
    message.classList.add('message');

    const info = document.createElement('div');
    info.classList.add('message__info');
    info.textContent = msgInfo;

    if (isYours) {
      message.classList.add('message_right');
      info.classList.add('message__info_you');
    }

    const text = document.createElement('div');
    text.classList.add('message__text');
    text.textContent = msgText;

    message.append(info, text);

    this.messages.append(message);

    message.scrollIntoView();
  }

  resetForm() {
    this.form.reset();
  }
}
