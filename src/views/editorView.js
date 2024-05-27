export class EditorView {
  #editor;
  #toolbar;

  constructor() {
    this.#editor = document.querySelector('.editor');
    this.#toolbar = document.querySelector('.toolbar');
  }

  get editor() {
    return this.#editor;
  }

  init(content) {
    this.#editor.innerHTML = content;
  }

  getEditorContent() {
    return this.#editor.innerHTML;
  }

  bindToolbarClick(handler) {
    this.#toolbar.addEventListener('click', event => {
      const button = event.target.closes('button');
      if (button) {
        handler(button.id);
      }
    });
  }
}
