import './App.css';
import Header from './HeaderandFooter/Header';
import Headmain from './Headmain';
import CourseSelection from './Course/CourseSelection';
import PopCourses from './Course/PopCourses';
import NewCourses from './Course/NewCourses';
import Form from './Form/Contact';
import Collaborate from './Collaborate';
import Footer from './HeaderandFooter/Footer';
import Learn from "./Learn";
function App() {
  return (
    <div className="App">
    <Header/>
    <Headmain/>
    <CourseSelection/>
    <PopCourses/>
    <NewCourses/>
    <Form/>
    <Learn/>
    <Collaborate/>
    <Footer/>
    </div>
  );
}

export default App;
