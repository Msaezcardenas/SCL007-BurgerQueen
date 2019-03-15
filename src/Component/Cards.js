// import React, { Component } from 'react';
// import db from '../Services/firebase/setup';
// import PropTypes from 'prop-types';

// import {Menu} from './Menu.json';
// // console.log(Menu)

// class CardsMenu extends Component {
//     constructor() {
//       super();
//       this.state = {
//         Menu: ''
//       }
//     };

//     render () {
//         //this.state.menu= para acceder al menu.json
//         //Map para recorrer el json
//         const MenuRest= this.state.Menu.map((todo,i)=>{
//              return (
//                  <div className="col-md-4">
//                   <div className="card">
//                     <div className="card-header">
//                       <h3> {Menu.name} </h3>
//                  </div>
//                     <div className="card-body">
//                       <p> {Menu.cost}</p>
//                     </div>
//                  </div>
//                  </div>
//              )
//         })
    
//     return (
//         <div className = "App"> 
//         <div>
//         {MenuRest}
//         </div>
//         </div>
//     );
// }
// }


// export default CardsMenu;