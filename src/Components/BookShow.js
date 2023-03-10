import { useState,useContext } from "react"
import BookEdit from "./BookEdit"
import BooksContext from "../context/books"
function BookShow({book}){
  const[ShowEdit,setShowEdit]=useState(false)
  const{deleteBookById}=useContext(BooksContext)



  const handleEditclick=()=>{
    setShowEdit(!ShowEdit)
    }

const handleDeleteClick=()=>{
  deleteBookById(book.id)


}
const handleSubmit=()=>{
  setShowEdit(false)
}

let content= <h3>{book.title}</h3>
if(ShowEdit){
  content= <BookEdit   book={book} onSubmit={handleSubmit}/>
}
  return <div className="book-show">
    <img  src={`https://picsum.photos/seed/${book.id}/200/300`} alt="pic of books"/>
   <div>{content}</div> 
  
  <div className="actions">
    <button className="edit" onClick={handleEditclick}>edit</button>
    <button onClick={handleDeleteClick} className="delete">Delete</button>
  </div>
    </div>
}
export default BookShow