import { Component } from "react";
import CommentList from './CommentList'




class CommentArea extends Component{
    state ={
        comments:[],
    }

     componentDidMount=async()=>{
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + this.props.asin,{
                headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNjA5MmIzNTgxNzAwMTVjMjI3MGIiLCJpYXQiOjE2Mzg1NTI5NDUsImV4cCI6MTYzOTc2MjU0NX0.yH-EK9yx64xgROfOIh6XWcpxnxdVV5XKn-oxoxGgyFM"
                }
                })
                console.log(response)
                
    if (response.ok){
        let comments = await response.json()
        
        this.setState=({
            comments:comments
        })
        console.log(comments)
    }else{
        console.log('my error')
    }
} catch (error) {
    console.log('network error')
}
  }

    render(){
        return(
            <div>
                
            
                <CommentList commentsToShow={this.state.comments} />
             
            </div>
        )
    }
}
export default CommentArea