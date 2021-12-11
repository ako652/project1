

import { ListGroup ,Button} from "react-bootstrap"

const Deleteback=async(asin)=>{
  try {
    let response=await  fetch('https://striveschool-api.herokuapp.com/api/comments/' + asin, {
        method: 'DELETE',
        headers: {
           Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNjA5MmIzNTgxNzAwMTVjMjI3MGIiLCJpYXQiOjE2Mzg3MDE0MDUsImV4cCI6MTYzOTkxMTAwNX0.QIlhYQJuLxVAQ1YBmrHO4Iutg3NkyevRoh4_ZuktfaI'
        }
    })
    if (response.ok){
        alert("awesome")
    }else{
        console.log("error")
    }
  } catch (error) {
      console.log("error")
  }

}

   
    
   const Singlecomment=({comment})=>{
    return(
        <ListGroup.Item>
    {comment.comment}
    <Button variant="primary" style={{margin:'2px'}} onClick={()=> Deleteback(comment._id)}>delete</Button>{' '}
</ListGroup.Item>
    )
   }
    

    

  


export default Singlecomment