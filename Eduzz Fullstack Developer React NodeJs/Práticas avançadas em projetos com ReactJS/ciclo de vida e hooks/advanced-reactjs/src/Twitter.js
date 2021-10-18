import React, { useEffect, useState, memo } from 'react';

//Quando é true, não é preciso renderizar novamente
//É muito útil para evitar re-render desnecessário
//Assim, vai agir como o shouldComponentUpdate, porém com a condição booleana oposta
const areEqual = (prevProps, nextProps) => {
  return prevProps.loading === nextProps.loading;
}

function Twitter(props) {

  const { loading } = props;

  // Primeiro argumento: state
  // Segundo argumento: é como um setState
  const [tweet, setTweet] = useState('title');

  // state = {
  //   tweet: 'title'
  // }

  //Com o array vazio, o useEffect tem o mesmo efeito do componentDidMount
  //Pois com o array vazio, ele vai executar somente uma vez
  useEffect(() => {
    const { posts, loading } = props;
    console.log('componentDidMount', posts);
    console.log('componentDidMount:loading', loading);
  })
  
  //componentDidUpdate
  useEffect(() => {
    console.log('componentDidUpdate')
  }, [loading])
  
  //sempre que o useEffect é usado com um return dessa forma,
  //esse retorno é o componentWillUnmount
  useEffect(() => {
    return () => {
      console.log('componentWillUnmount: fui removido :(');    
    }
  })
  
  // componentDidMount = () => {
  //   const { posts } = props;
  //   console.log('componentDidMount', posts);
  //   console.log('componentDidMount:loading', loading);
  // }

  // componentWillUnmount = () => {
    //   console.log('componentWillUnmount: fui removido :(');
    // }
    
  // shouldComponentUpdate = (nextProps, nextState) => {
  //   return state.tweet !== nextState.tweet || nextProps.loading !== props.loading;
  //   //return true;
  // }

  // tweet = () => {
  //   setState({
  //     tweet: true
  //   })
  // }

  //COM HOOKS
  const handleTweet = () => {
    setTweet('Tweet atualizado')
  }

  //const { posts } = props;
  //console.log('render', posts);

  console.log('Tweet atualizado', tweet);
  return (
    <div>
      <button onClick={handleTweet}>Re-render</button>
      tests
    </div>
  )
}

export default memo(Twitter, areEqual);