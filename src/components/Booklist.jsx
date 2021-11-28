import { Component } from "react";
import Singlebooks from "./Singlebooks";
import Container from 'react-bootstrap/Container'
import { Row ,Col,Form} from "react-bootstrap";



class Booklist extends Component{

    state = {
        searchQuery: ''
    }

    render(){
        return(
            
            <Container>
                <Col>
                
                <Form.Group controlId="formBasicEmail">
                            <Form.Label>Search</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Search here"
                                value={this.state.searchQuery}
                                onChange={e => this.setState({ searchQuery: e.target.value })}
                            />
                        </Form.Group>
                </Col>
                
                <Row>
                    
                    {
        
                        this.props.bookpage.filter(bk=>bk.title.toLowerCase().includes(this.state.searchQuery)).map(bk =>(
                            <Col xs={3}>
                            <Singlebooks book={bk}/>
                            </Col>
                           

                        ))
                    }
                   
               
                </Row>
            </Container>
        )
    }

}

export default Booklist