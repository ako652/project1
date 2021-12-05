import { ListGroup} from "react-bootstrap"
import Singlecomment from './Singlecomment'

  

const CommentList = ({ commentsToShow }) => (
    <ListGroup style={{ color: 'black' }}>
        {
            commentsToShow.map(comment => (
                
                <Singlecomment comment={comment} key={comment._id} />
            ))
        }
    </ListGroup>
)
  export default CommentList