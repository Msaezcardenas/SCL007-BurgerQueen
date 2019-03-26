import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import db from './Services/firebase/setup';

class App extends Component {
  constructor(props) {
    super(props);
    this.ref = db.collection('boards');
    this.unsubscribe = null;
    this.state = {
      boards: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const boards = [];
    querySnapshot.forEach((doc) => {
      const { title, description, author } = doc.data();
      boards.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        description,
        author,
      });
    });
    this.setState({
      boards
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              BOARD LIST
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/create">Add Board</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Author</th>
                </tr>
              </thead>
              <tbody>
                {this.state.boards.map(board =>
                  <tr>
                    <td><Link to={`/show/${board.key}`}>{board.title}</Link></td>
                    <td>{board.description}</td>
                    <td>{board.author}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;












// //Dependencias
// import React, { Component } from 'react';
// // import { Link } from 'react-router-dom';


// //CSS
// import './App.css';


// //Componentes
// import Navigation from './Component/NavProyect';
// import NameForm from './Component/NameForm';
// import Desayuno from './Component/Desayuno';
// import RestoDia from './Component/RestoDia';
// // import Content from './Component/Content';



// class App extends Component {

//   render() {
//     return (
//       <div>
//          < Navigation />
//          <br></br>
//           < NameForm/>
//           < Desayuno /> 
//           < RestoDia />

//       </div>
//     );
//   }
// }

// export default App;