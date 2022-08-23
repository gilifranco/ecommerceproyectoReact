import React from 'react';

const Form = ({contenBuscar}) => {
    return (
        <>
         <form className="d-flex">
        <input className="form-control me-sm-2" type="text" placeholder={contenBuscar} />
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Buscador</button>
      </form>
        </>
    );
}

export default Form;
