import './App.css'
import Hello from './components/Hello'
import ClassCounter from './components/ClassCounter'
import Resume from './components/Resume';
import FunctionEvent from './components/FunctionEvent';
import ClassEvent from './components/ClassEvent';
import FunctionalCounter from './components/FunctionalCounter';
import ConditionalComponent from './components/ConditionalComponent';
import Product from './components/Product';
import Form from './components/Form';
import GoalTracker from './components/GoalTracker';
import InlineStyling from './components/InlineStyling';
import StyleSheet from './components/StyleSheet';
import ModuleStyling from './components/ModuleStyling';

function App() {
  return (
    <div className="App">
      <InlineStyling />
      <StyleSheet />
      <ModuleStyling />
      <GoalTracker />
    </div>
  );
}

export default App;
