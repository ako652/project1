import { Component } from "react";
import Singlebooks from "./Singlebooks";
import Container from 'react-bootstrap/Container'
import { Row ,Col} from "react-bootstrap";



class Booklist extends Component{


    render(){
        return(
            <Container>
                <Row>
                    
                    {
        
                        this.props.bookpage.map(bk =>(
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