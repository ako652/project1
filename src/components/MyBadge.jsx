import { Badge } from "react-bootstrap"


const MyBadge =(props)=>{
    return(
        <div>
            <Badge variant={props.colour}>{props.Title} is this your primary colour?</Badge>{' '}
        </div>
    )
}
export default MyBadge