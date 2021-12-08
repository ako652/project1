import { Component } from "react";
import {Form, Button} from 'react-bootstrap'





class AddComments extends Component {
    state ={
      Isform:{
          comment:"",
          rate:"",
          elementId: this.props.asin
      }
    
    }
    TextOn =async (e)=>{
        e.preventDefault()
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments', {
                method: 'POST',
                body: JSON.stringify(this.state.Isform),
                headers: {
                    'Content-type': 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNjA5MmIzNTgxNzAwMTVjMjI3MGIiLCJpYXQiOjE2Mzg3MDE0MDUsImV4cCI6MTYzOTkxMTAwNX0.QIlhYQJuLxVAQ1YBmrHO4Iutg3NkyevRoh4_ZuktfaI'
                }
            }
            

            )
            if (response.ok){
                alert('message sent success')
                this.setState({
                    Isform:{
                        comment:"",
                        rate:1,
                    }
                })
                

            }else{
                console.log('error')
            }
            
        } catch (error) {
            console.log(error)
        }


    }
       render() {
           return (
               <>
               <Form onSubmit={this.TextOn}>
               
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Example select</Form.Label>
    <Form.Control as="select"
    value={this.state.Isform.rate}
    onChange={
        e=>this.setState({
            Isform:{
                ...this.state.Isform,
                rate: e.target.value

            }
        })
    }
    >
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control 
    as="textarea" 
    rows={3} 
    value= {this.state.Isform.comment}
    onChange={e=> this.setState({
        Isform:{
            ...this.state.Isform,
            comment:e.target.value
        }
    }
        


    )
    }
    />
  </Form.Group>
  <Button type="submit">Submit form</Button>
</Form>
                  
               
                </>
           )
       }

} 

export default AddComments