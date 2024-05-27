import { EditorModel } from '../models/editorModel.js';
import { EditroView } from '../views/editorView.js';

export class EditorView {
  #model;
  #view;
  constructor() {
    this.#model = new EditorModel();
    this.#view = new EditorView();
  }

  init() {
    this.#view.init(this.#model.content);
    this.#view.bindToolbarClick(this.handleToolbarClick.bind(this));
    this.#view.editor.addEvenListener('input', this.handleEditorInput.bind(this));
  }

  handleEditorInput(command) {
    document.execCommand(command, false, null);
  }

  handleEditorInput() {
    const content = this.#view.getEditorContent();
    this.#model.content(content);
  }
}
