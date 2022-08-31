import {useState} from 'react'

const Counter = ({stock, onAdd , min, sum ,res  }) => {
    const [count, setCount] = useState(min)

    function add(){
       if(count < stock){
                 setCount(count + sum )
        }          
    }

    function substract(){
           if(count >= min){
                setCount(count - res )
           }
        }
    

    function reset(){
        setCount(min)
    }

  return (
    <div className='card'>
        <div className="counter-box card-title">
            <h1>Producto</h1>
            <p>Stock: {stock} </p>
            <p>Cantidad: {count} </p>
        
            <div className='card-body'>
                <button className="btn" onClick={substract}> - </button>
                <button className="btn" onClick={reset} > Reset </button>
                <button className="btn" onClick={add}> + </button>
            </div>
            <div>
                <button className="btn" onClick={() => onAdd(count)}>Comprar</button>
            </div>
        </div>
    </div>
  )
}

export default Counter