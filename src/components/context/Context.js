import { createContext } from "react";

const Context = createContext({
  //! It's Just For AutoComplete
  todos: [],
  setTodos: () => {},
  todo: "",
  setTodo: () => {},
  categories: [],
  setCategories: () => {},
  currentCategori: "",
  setCurrentCategori: () => {},
  showCategoriPopUp: Boolean,
  setShowCategoriPopUp: () => {},
  showSearchBar: Boolean,
  setShowSearchBar: () => {},
  showMoreOptions: Boolean,
  setShowMoreOptions: () => {},
  showEditorContainer: Boolean,
  subject: "",
  setSubject: () => {},
  categoriEditMode: Boolean,
  setNewCategoriTitle: () => {},
  newCategoriTitle: "",
  showCategoriNameInput: Boolean,
  todosEditMode: Boolean,
  setCurrentEditingTodoID: () => {},

  handleNewTodo: () => {},
  handleSetShowCategoriPopUp: () => {},
  handleSetShowSearchBar: () => {},
  handleSetShowMoreOptions: () => {},
  handleSetShowEditorContainer: () => {},
  handleSetDefaultCategori: () => {},
  handleToggleCategoriEditMode: () => {},
  handleDeleteCategori: () => {},
  handleCategoriNameChange: () => {},
  handleAddNewCategori: () => {},
  handleToggleTodosEditMode: () => {},
  handleDeleteTodos: () => {},
  handleEditTodos: () => {},
});

export default Context;
