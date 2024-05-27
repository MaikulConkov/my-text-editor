import { EditorController } from '../../src/controllers/editorController.js';

document.addEventListener('DOMContentLoaded', () => {
  const editorController = new EditorController();
  editorController.init();
});
