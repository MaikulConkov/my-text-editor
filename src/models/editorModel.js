export class EditorModel {
  #content;

  constructor() {
    this.content = localStorage.getItem('editorContent' || '');
  }

  get content() {
    return this.#content;
  }

  set content(content) {
    this.#content = content;
    localStorage.setItem('editorContent', content);
  }
}
