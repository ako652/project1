import { Component } from "react";
import {Form, Button} from 'react-bootstrap'





class AddComments extends Component {
    state ={
      Isform:{
          comment:"",
          Rate:"",
      }
    }
       render(){
           return (
               <>
               <Form>
               
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Example select</Form.Label>
    <Form.Control as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Button type="submit">Submit form</Button>
</Form>
                  
               
                </>
           )
       }

} 

export default AddComments