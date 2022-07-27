

function Card(props){
    return  <div style={{backgroundColor:'red',width:'100px',height:'auto'}}>
        <h2>this is the header of card</h2>
        <p>{props.titleText}</p>
        <p>{props.desc}</p>
    </div>
  }

  export default Card;