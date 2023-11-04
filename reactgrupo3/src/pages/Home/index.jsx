import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <Link to="/acomodacoes">
                <button className='acomodacoes' > Acomodações</button>
            </Link>
            <h2>Aqui é a página home</h2>
        </div>
    )
}
