import logo from './logo.svg';
import './App.css';
import Form from './Forms';
import SignUp from './Signup';

function App() {
  return (
    <div className="App">
    {/* <Form/> */}
    <SignUp/>
      
    </div>
  );
}

export default App;



// if name exists in the database and you want to prevent the user from typing the same name
// const addPerson = (event) =>{
//   event.preventDefault()
// const nameAlreadyExist = persons.some((eachPerson) => eachPerson.name === newName);
// if(nameAlreadyExist){
//   alert(`${newName} is already added to phonebook`);

// }else{
//   const personObject = {
//     name: newName,
//     number : newNumber
// }

// axios
//     .post("http://localhost:3001/persons", personObject)
//     .then(response =>{
//       console.log(response)
//     })
// setPersons(persons.concat(personObject))
// setNewName('')
// setNewNumber('')
// }


// }
