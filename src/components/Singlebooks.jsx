import { Component } from 'react'
import {Card,CardGroup} from 'react-bootstrap'

class Singlebooks extends Component{
  state={
    selected: false

  }

  render(){
    return(
       
        
    
    
    <CardGroup key={this.props.book.asin}>
  <Card onClick={()=>this.setState({selected: !this.state.selected})}
  style={{border: this.state.selected? '3px solid red' :'none'}}
  >
    <Card.Img variant="top" src={this.props.book.img} />
    <Card.Body>
      <Card.Title>{this.props.book.category}</Card.Title>
      <Card.Text>
        {this.props.book.title}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  
  
</CardGroup>
    
  
    






)}


    

}

export default Singlebooks