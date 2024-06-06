import css from './App.module.css';
import StatefulgreetingWithCallback from './components/StatefulgreetingWithCallback';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <StatefulgreetingWithCallback greeting="I am a Stateful Class Compopent" name="John" />
    </div>
  );
}

export default App;