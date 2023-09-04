import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/boostrap.min.css";

import Navbar from "./components/navbar.component";
import StudentList from "./components/student-list.component";
import EditStudent from "./components/edit-student.component";
import AddStudent from "./components/add-student.component";
import ViewStudent from "./components/view-student.component";

function App() {
  return (
    <Router>
    <Navbar />
    <br />
    <Route path="/students" exact component={StudentList} />
    <Route path="/students/update/:id" component={EditStudent} />
    <Route path="/add" component={AddStudent} />
    <Route path="/students/:id" component={ViewStudent} />
    </Router>
  );
}

export default App;
