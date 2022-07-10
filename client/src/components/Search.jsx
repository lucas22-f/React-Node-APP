import { Container } from 'react-bootstrap'

import React from 'react'

function Search({searchParams,setSearchParams}) {
    return (
        <Container className='d-flex justify-content-end text-black'>
            <div>
                <i className='ion-ios-search-strong'></i>
                <input type="text" className='m-3' placeholder='Buscar ej"Fiat Siena"' value={searchParams.get("filter")||""} 
                onChange={(e)=> {
                        let filter = e.target.value
                        if(filter){
                            setSearchParams({filter})
                        }else{
                            setSearchParams({})
                        }
                    }} />
            </div>
        </Container>
    )
}

export default Search