import './index.css';
import Employee from './components/employee';
import {useState} from 'react';

function App() {
  const [role, setRole] = useState();
  const showEmployees = true;

  return (
    <div className="App">
      {console.log('console can also be inside return')}
      {showEmployees ?(
      <div>
        <input 
          type='text' onChange={(e) =>{
          console.log(e.target.value);
          role = e.target.value;
          }} 
        />
          <Employee name='Anne' role='intern' />
          <Employee name='CAleb' role={role} />
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
