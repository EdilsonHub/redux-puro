//importa todos os reducers
import aluno from './aluno.js';
import aulas from './aulas.js';
//combine reducers

const reducers = Redux.combineReducers({
  aluno,
  aulas
});

//create store

const store = Redux.createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//export store
export default store;
