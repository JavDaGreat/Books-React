import { useState } from "react"
import BookEdit from "./BookEdit"
function BookShow({book,onDelete,onEdit}){
  const[ShowEdit,setShowEdit]=useState(false)



  const handleEditclick=()=>{
    setShowEdit(!ShowEdit)
    }

const handleDeleteClick=()=>{
  onDelete(book.id)


}
const handleSubmit=(id,newTitle)=>{
  setShowEdit(false)
  onEdit(id,newTitle)
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