import '../style/style.css';
import '../style/app.scss';

async function log() {
  const resp = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  console.log(resp);
}
log();