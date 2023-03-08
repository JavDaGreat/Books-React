import BookCreate from "./Components/BookCreate";
import { useEffect, useState } from "react"
import BookList from "./Components/BookList";
import axios from "axios";

function App(){
  const [Books,setBooks]=useState([])

  const fetchBooks= async()=>{
    const resp=await axios.get('http://localhost:3001/books')
    setBooks(resp.data)
  }

  useEffect(()=>{
    fetchBooks()
  },[])
  const createBook=async (title)=>{
    const resp= await axios.post('http://localhost:3001/books',{
      title:title
    })
    const updatedBooks=[...Books,resp.data]
    setBooks(updatedBooks)

  }
  const deleteBookId=async(id)=>{
    await axios.delete('http://localhost:3001/books/'+id)
    const updatedBooks=Books.filter((book)=>{
      return id !== book.id
    })
    setBooks(updatedBooks)
  }
  const editBookById= async (id,newTitle)=>{
    const resp=await axios.put('http://localhost:3001/books/'+ id,{
      title:newTitle
    })
    const UpdatedBooks=Books.map((book)=>{
      if(book.id===id){
        return {...book,...resp.data}
      }
      return book
    })
    setBooks(UpdatedBooks)

  }
  return(
    <div className="app">   
    <h1>Reading List</h1>
    <BookList  books={Books} onDelete={deleteBookId} onEdit={editBookById}/>
    <BookCreate onCreate={createBook} />

      
      </div>
  )
}
export default App