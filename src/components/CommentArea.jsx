import { Component } from 'react'
import CommentList from './CommentList'
import AddComments from './AddComments'

import Error from './Error'
import Loading from './Loading'

class CommentArea extends Component {

    state = {
        comments: [],
        Isloading:true,
        IsError:true
        
    }

    componentDidMount = async () => {
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + this.props.asin, {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNjA5MmIzNTgxNzAwMTVjMjI3MGIiLCJpYXQiOjE2Mzg3MDE0MDUsImV4cCI6MTYzOTkxMTAwNX0.QIlhYQJuLxVAQ1YBmrHO4Iutg3NkyevRoh4_ZuktfaI'
                }
            })
            console.log(response)
            if (response.ok) {
                let comments = await response.json()
                this.setState({ comments: comments, Isloading:false, IsError:false})
            } else {
                console.log('error')
                this.setState({  Isloading:false, IsError:false})
            }
        } catch (error) {
            console.log(error)
           
        }
    }

    render() {
        return (
            <div>
                {this.state.Isloading && <Loading />}
                {this.state.IsError && <Error />}
               
                <CommentList commentsToShow={this.state.comments} />
                <AddComments asin={this.props.asin}/>
            </div>
        )
    }
}

export default CommentArea