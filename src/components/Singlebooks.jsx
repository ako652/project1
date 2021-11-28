
import {Card,CardGroup} from 'react-bootstrap'

const Singlebooks =(props)=>{
    return(
       
        
    

    
    <CardGroup key={props.book.asin}>
  <Card>
    <Card.Img variant="top" src={props.book.img} />
    <Card.Body>
      <Card.Title>{props.book.category}</Card.Title>
      <Card.Text>
        {props.book.title}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  
  
</CardGroup>
  
    






)


    

}

export default Singlebooks