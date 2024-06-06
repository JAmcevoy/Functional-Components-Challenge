import css from './App.module.css';
import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <StatefulGreeting greeting="I am a Stateful Class Compopent" name="John" />
    </div>
  );
}

export default App;