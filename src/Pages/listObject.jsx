import React, {Component} from 'react'

class ListObject extends Component{
    render(){
        const posts = [
            {id: 1, title: "Prima tertangkap basah dengan Lola Zeita", content: "diduga prima tertangkap basah sedang jalan dengan lola zeita di tempat yang lumayan sepi"},
            
            {id: 2, title: "Andi pun marah melihat prima tertangkap basah dengan Lola Zeita", content: "Andi merasa di selingkuhi oleh lola zeita"}
        ]
        return(
        <div className="App-header">
            {posts.map((post) => (<div key={post.id}> 
                <p>{post.id}</p>
                <p>{post.title}</p>
                <p>{post.content}</p>
            </div>))}
        </div>
        )
    }
}

export default ListObject