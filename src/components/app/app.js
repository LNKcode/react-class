import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
// import { Component } from 'react';

import './app.css';


// class WhyAmI extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     const {name, surname, link} = this.props
//     return (
//       <div>
//         <h1>
//           My name is {name}. surname{surname}
//         </h1>
//         <a href={link}>
//           My profile
//         </a>
//       </div>
//     )
//   }
// }

// function App() {
//   return (
//     <div className='App'>
//       <WhyAmI name={'John'} surname="Smith" link="vk.com" />
//       <WhyAmI name={'Alex'} surname="Rose" link="Facebook.com" />

//     </div>
//   )
// }

function App() {
  const data = [
    { name: "Maria P.", salary: 1000, increase: false, id: 1 },
    { name: "Igor A.", salary: 800, increase: true, id: 2 },
    { name: "Eva E.", salary: 500, increase: false, id: 3 }
  ]
  return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
        
            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    );
}


        export default App;
