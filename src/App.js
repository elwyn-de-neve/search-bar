import "./styles/global.css";
import { useMemo, useRef, useState } from "react";

function App() {
    const [ items, setItems ] = useState( [] );
    const [ query, setQuery ] = useState( "" );
    const inputRef = useRef( null );

    const filteredItems = useMemo( () => {
        return items.filter( item => {
            return item.toLowerCase().includes( query.toLowerCase() );
        })
    } ,[ items, query]);

    const onSubmitHandler = ( e ) => {
        e.preventDefault();
        const value = inputRef.current.value;
        if ( value === "" ) return;
        setItems( prev => {
            return [ ...prev, value ];
        } );
        inputRef.current.value = "";
    };

    return (
        <>
            Search: <input value={ query } onChange={ e => setQuery( e.target.value ) } type="search"/>
            <br/>
            <br/>
            <form onSubmit={ onSubmitHandler }>
                New Item: <input ref={ inputRef } type="text"/>
                <button type="submit">add</button>
            </form>
            <br/>
            <h3>Items: </h3>
            { filteredItems.map( item => (
                <p>{ item }</p>
            ) ) }
        </>
    );
}

export default App;
