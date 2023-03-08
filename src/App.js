import BookCreate from "./Components/BookCreate";
import { useState } from "react"
import BookList from "./Components/BookList";

function App(){
  const [Books,setBooks]=useState([])

  
  const createBook= (title)=>{
    const updatedBooks=[...Books,{id: Math.round(Math.random() * 9999),title:title}]
    setBooks(updatedBooks)

  }
  const deleteBookId=(id)=>{
    const updatedBooks=Books.filter((book)=>{
      return id !== book.id
    })
    setBooks(updatedBooks)
  }
  const editBookById=(id,newTitle)=>{
    const UpdatedBooks=Books.map((book)=>{
      if(book.id===id){
        return {...book,title:newTitle}
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