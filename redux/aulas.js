//Constant
const COMPLETAR_AULA = 'aulas/COMPLETAR_AULAS'; //Conpleta a aula com base no id da aula
const COMPLETAR_CURSO = 'aulas/COMPLETAR_CURSO'; //Completa todas as aulas
const RESETAR_CURSO = 'aulas/RESETAR_CURSO'; //Reseta todas as aulas completas
const ADD_NOVA_AULA = 'aulas/ADD_NOVA_AULA'; //adiciona uma nova aula a lista de aulas

//action creators
export const completarAula = (payload) => ({ type: COMPLETAR_AULA, payload });
export const completarCurso = () => ({ type: COMPLETAR_CURSO });
export const resetarCurso = () => ({ type: RESETAR_CURSO });
export const addNovaAula = (payload) => ({ type: ADD_NOVA_AULA, payload });

//inicial state

const initialState = [
  {
    id: 1,
    nome: 'HTML',
    completa: true
  },
  {
    id: 2,
    nome: 'javascript',
    completa: false
  },
  {
    id: 3,
    nome: 'Typescript',
    completa: true
  },
  {
    id: 4,
    nome: 'PHP',
    completa: false
  },
  {
    id: 5,
    nome: 'JAVA',
    completa: false
  },
  {
    id: 6,
    nome: 'Linguagem C',
    completa: true
  },
  {
    id: 7,
    nome: 'CSS',
    completa: false
  },

  {
    id: 8,
    nome: 'SQL',
    completa: false
  },
];

//reducer
const reducer = immer.produce((state, action) => {
  switch (action.type) {
    case COMPLETAR_AULA:
      let aula = state.forEach(n => {
        if(n.id == action.payload) {
          n.completa = true;
        }
      });
      break;
    case COMPLETAR_CURSO:
      state.forEach(aula => aula.completa = true);
      break;
    case RESETAR_CURSO:
      state.forEach(aula => aula.completa = false);
      break;
    case ADD_NOVA_AULA:
      if(action.payload.trim() != ""){
        let ultimoId = state[state.length - 1].id
        state.push(  {
            id: (ultimoId + 1),
            nome: action.payload,
            completa: false
          })
      }
  }
}, initialState);

//export o reducer como default
export default reducer;
