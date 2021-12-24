//Constant
const INCREMENTAR_TEMPO = 'aluno/INCREMENTAR_TEMPO'; //Incrementa um dia de acesso
const REDUZIR_TEMPO = 'aluno/REDUZIR_TEMPO'; //reduz um dia de acesso
const MODIFICAR_EMAIL = 'aluno/MODIFICAR_EMAIL'; //altera o email do aluno

//action creators
export const incrementarTempo = () => ({ type: INCREMENTAR_TEMPO });
export const reduzirTempo = () => ({ type: REDUZIR_TEMPO });
export const modificarEmail = (payload) => ({ type: MODIFICAR_EMAIL, payload });

//inicial state
const initialState = {
  nome: 'Edilson Pereira da Silva',
  email: 'di3.pereiradasilva@gmail.com',
  diasRestantes: 365
};
//reducer

const reducer = immer.produce((state, action) => {
  switch (action.type) {
    case INCREMENTAR_TEMPO:
      state.diasRestantes += 1;
      break;
    case REDUZIR_TEMPO:
      state.diasRestantes -= 1;
      break;
    case MODIFICAR_EMAIL:
      state.email = action.payload;

  }
}, initialState);

//export o reducer como default
export default reducer;
