import store from './redux/store.js'
import { incrementarTempo, reduzirTempo, modificarEmail } from './redux/aluno.js'
import { completarAula, completarCurso, resetarCurso, addNovaAula } from './redux/aulas.js'


function render() {
  const { aluno, aulas } = store.getState();
  renderizaViewAluno(aluno);
  renderizaViewAulas(aulas);
}

function addOnchangeAulas() {
  const lista = document.getElementById("listaAulas");
  const onclik = n => {
    if(n.target.tagName === 'TD') {
      const idAula = n.path[1].querySelector('td').innerText;
      marcarAulaCompleta(idAula);
    }
  }

  lista.onclick = onclik;
}

function renderizaViewAulas(aulas) {
  const append = html => document.getElementById("listaAulas").innerHTML = html;
  const createTable = (trs) => (`
    <table style="margin: 20px auto auto auto" border="1">
      <thead>
        <th>ID</th>
        <th>AULAS</th>
        <th>STATUS DA AULA</th>
      </thead>
      <tbody>
      ${trs}
      </tbody>
      <tfoot>
      <tr>
      <td colspan="3"><input id="inputNovaAula" placeholder="Digite aqui para acrescentar uma nova aula"></td>
      </tr>
      </tfoot>
    </table>
    `);
  const trs = aulas.map(aula => `
    <tr>
      <td>${aula.id}</td>
      <td>${aula.nome}</td>
      <td>${aula.completa ? 'COMPLETA' : ''}</td>
    </tr>
  `).join('');

  append(createTable(trs));
}

function renderizaViewAluno({nome, email, diasRestantes}) {
  const addValueElement = (id, value) => document.getElementById(id).innerText = value;
  addValueElement("nomeAluno", nome);
  addValueElement("emailAluno", email);
  addValueElement("diasRestantes", diasRestantes);
}

function subscribe() {
  render();
  addOnchangeAulas();
  return store.subscribe(render);
}

function acrecentarDiasRestantes() {
  store.dispatch(incrementarTempo());
}
function diminuirDiasRestantes() {
  store.dispatch(reduzirTempo());
}
function salvarAlteracoesEmail() {
  const email = document.getElementById("emailAlunoInput").value;
  store.dispatch(modificarEmail(email));
}
function marcarAulaCompleta(idAula) {
  store.dispatch(completarAula(idAula));
}
function completarTodasAulas() {
  store.dispatch(completarCurso());
}
function restarTodasAulas() {
  store.dispatch(resetarCurso());
}
function adicionarNovaAula() {
  const nomeNovaAula = document.getElementById("inputNovaAula").value;
  store.dispatch(addNovaAula(nomeNovaAula));
}

export {subscribe, acrecentarDiasRestantes, diminuirDiasRestantes, salvarAlteracoesEmail, completarTodasAulas, restarTodasAulas, adicionarNovaAula}
