
import { ListGroup } from "react-bootstrap"


const Singlecomment = ({ comment }) => (
    <ListGroup.Item>
        {comment.comment}
        
    </ListGroup.Item>
)

export default Singlecomment