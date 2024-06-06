import css from './App.module.css';
import StatefulgreetingWithPrevState from './components/StatefulgreetingWithPrevState';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <StatefulgreetingWithPrevState greeting="I am a Stateful Class Compopent" name="John" />
    </div>
  );
}

export default App;