/*
 * Import Actions { ... }
 * ********************** */
import * as Actions from "../actions/ActionTypes";

/*
 * Selector
 * ******** */
const initialState = {
  flash: "",
  listArticles: [],
  article: {},
  categories: [
    {
      id: 0,
      name: "NodeJS",
      description: 'Lorem ipsu ...',
      icon: "node",
      lists: [{ name: "01-http" }],
    },
    {
      id: 1,
      name: "VueJS",
      description: 'Lorem ipsu ...',
      icon: "react",
      lists: [{ name: "01-basic-app" }],
    },
    {
      id: 2,
      name: "ReactJS",
      description: 'Lorem ipsu ...',
      icon: "react",
      lists: [{ name: "01-create-app" }],
    },
    {
      id: 3,
      name: "Git",
      description: 'Lorem ipsu ...',
      icon: "git",
      lists: [{ name: "01-clone" }],
    },
    {
      id: 4,
      name: "Blockchain",
      description: 'Lorem ipsu ...',
      icon: "blockchain",
      lists: [{ name: "01-html-metamask" }],
    },
  ]
};

/*
 * Reducers
 * ******** */
export function ArticlesReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case Actions.GET_ALL_ARTICLE:
      return {
        ...state,
        flash: action.payload.flash,
        listArticles: action.payload.dbArticles,
      };
    case Actions.GET_ID_ARTICLE:
      return {
        ...state,
        flash: action.payload.flash,
        article: action.payload.article,
      };
    case Actions.POST_ARTICLE:
      return {
        ...state,
        flash: action.payload.flash,
        listArticles: action.payload.dbArticles,
      };
    case Actions.EDIT_ARTICLE:
      return {
        ...state,
        flash: action.payload.flash,
        listArticles: action.payload.dbArticles,
      };
    case Actions.DELETE_ARTICLE:
      return {
        ...state,
        flash: action.payload.flash,
        listArticles: action.payload.dbArticles,
      };
  }
}

/*
 * Getters
 * ******* */
