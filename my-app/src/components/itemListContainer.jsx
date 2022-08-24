import React from 'react'
import Counter from './counter'
import CounterCustomHook from './counterCustomHook'
import CounterDisabledButton from './counterDisabledButton.jsx'

const itemListContainer = () => {
    function onAdd(count){
        console.log(`Se han seleccionado ${count} productos`)
    }
  return (
    <div>
        <Counter stock={5} onAdd={onAdd} min={1} sum={1} res={1}/>
        <CounterDisabledButton stock={5} onAdd={onAdd} min={1} sum={1} res={1}/>
        <CounterCustomHook stock={5} onAdd={onAdd}/>
    </div>
  )
}

export default itemListContainer