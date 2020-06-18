import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  state = {
    user: [
    {nomeUsuario: 'paulinha',
    fotoUsuario:'https://picsum.photos/50/50',
    fotoPost:'https://picsum.photos/200/150'
    },
    {
      nomeUsuario: 'bombonatti',
      fotoUsuario: 'https://pbs.twimg.com/profile_images/927547501745442816/qvY5gg4c_400x400.jpg',
      fotoPost: 'https://pbs.twimg.com/media/EWE4rgjUMAMNOHk?format=jpg&name=4096x4096'
},
    {
      nomeUsuario: 'naruto',
      fotoUsuario: 'data:image/jpeg;base64,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',
      fotoPost: 'https://i.pinimg.com/236x/a9/f5/09/a9f509152d78de5d06ea0f422ba5c1ba.jpg'
}
]
  }
  render() {
      const usuario = this.state.user.map(post =>{
       return (
         <Post
         nomeUsuario={post.nomeUsuario}
         fotoUsuario={post.fotoUsuario}
         fotoPost={post.fotoPost}
         />
       )
      })
      return(
        <div className={'app-container'}>
          {usuario}
        </div>
      )
      }
    }

export default App;
