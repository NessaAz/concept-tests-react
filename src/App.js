import './App.css';
import Employee from './components/employee';

function App() {
  console.log('here are some of them');
  const showEmployees = true;

  return (
    <div className="App">
      {console.log('console can also be inside return')}
      {showEmployees ?(
      <div>
        <Employee name='Anne' role='intern' />
        <Employee name='CAleb' />
        <Employee name='VIenna'  />
        </div>
      )
        :
        (<p>not viewable</p>)
      }
    </div>
  );
}

export default App;
