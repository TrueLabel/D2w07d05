
import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';




const App = () => {

  const[newDescription, setNewDescription] = useState('');
  const[newComplete, setNewComplete] = useState(false);
  const[newSpec, setNewSpec] = useState('')
  const [newCard, setNewCard] = useState('')
  const[newImg, setNewImg] = useState('')
  const[d2, setD2] = useState([]);
 

  
  console.log(newDescription);
  console.log(newComplete);
  console.log(newCard);
  console.log(newSpec);
  console.log(newImg);

  const handleNewDescriptionChange = (event) => {
    setNewDescription(event.target.value);
  }

  const handleNewSpecChange = (event) => {
    setNewSpec(event.target.value);
  }

  const handleNewCardChange = (event) => {
    setNewCard(event.target.value);
  }

   const handleNewImgChange = (event) => {
    setNewImg(event.target.value);
  }

  const handleNewCompleteChange = (event) => {
    setNewComplete(event.target.checked);
  }

  const handleNewTodoFormSubmit = (event) =>{
    event.preventDefault();
    axios.post(
      'http://localhost:3000/d2',
      {
        library: newDescription,
        readcheck: newComplete,
        book: newSpec,
		card: newCard,
        image: newImg
      }
    ).then(() => {
      axios
      .get('http://localhost:3000/d2')
      .then((response) => {
        setD2(response.data)
      })
    })
  }
    

  useEffect(() => {
    axios
    .get('http://localhost:3000/d2')
    .then((response) => {
      setD2(response.data)
    })
  },[])

const handleDelete = (todoData) => {
  // console.log(todoData);
  axios
  .delete(`http://localhost:3000/d2/${todoData._id}`)
  .then(() => {
    axios
      .get('http://localhost:3000/d2')
      .then((response) => {
        setD2(response.data)
      })
  })
}

const handleEdit = (todoData) => {
  // console.log(todoData);
  axios
  .edit(`http://localhost:3000/d2/${todoData._id}`)
  .then(() => {
    axios
      .get('http://localhost:3000/d2')
      .then((response) => {
        setD2(response.data)
      })
  })
}

const handleToggleComplete = (todoData) => {
  axios
  .put(`http://localhost:3000/d2/${todoData._id}`,
  {
    library: todoData.library,
    readcheck: !todoData.readcheck,
	book: todoData.book,
    card: todoData.species,
    image: todoData.image
  }
  )
 .then(() => {
  axios
  .get('http://localhost:3000/d2')
  .then((response) => {
    setD2(response.data)
  })
 })
}

  return (
    <main>
      <h1>Destiny Lore Database</h1>
      <section>
        <h2 class='container'>D2 Lore</h2>
        <form class='form-control' onSubmit={handleNewTodoFormSubmit}>
          Library: <input class='form-control' placeholder='Ex: Taken King' type='text' onChange={handleNewDescriptionChange}/><br/>
          Book: <input class='form-control' placeholder='Book of Sorrow' type="text" onChange={handleNewSpecChange}/><br/>
          Card: <input class='form-control' placeholder='Origin of Fundament' type="text" onChange={handleNewCardChange}/><br/>
          <input class='form-control' placeholder='Insert Image URL' type='url' onChange={handleNewImgChange}/><br/>
          Read  <input type="checkbox" onChange={handleNewCompleteChange}/><br/>
          <br/>
          <input class= 'btn btn-primary' type="submit" value="Create"/>
          <br/>
        </form>
      </section>
    <section>
      <br/>
      <h2 class='container'>D2 Lore Libraries:</h2>
      <ul>
        {
          d2.map((d2) => {
            return ( <li
              onClick = {() => {
                handleToggleComplete(d2)
              }}
            key={d2._id}>
              

              {
              (d2.readcheck)?
              <div class='container'><h2>You have already read the {d2.library}</h2></div>
              :
              <div class='container'> <h2>{d2.library} | Not read</h2> <h2>{d2.book}</h2> 
              <h2><img src={d2.image}/></h2> </div>
              }
              <div>
              <button class= 'btn btn-danger' onClick={(event) => {handleDelete(d2)}}>Delete
              </button> 
              <button class= 'btn btn-warning' onClick={(event) => {handleEdit(d2)}}>Edit
              </button>
              </div>
              

              </li>
              
            )
          
  
        })
      }
      
      </ul>
    </section>
    </main>
  )
}

export default App;
