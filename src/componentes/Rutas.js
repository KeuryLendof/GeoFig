import {Routes, Route} from 'react-router-dom'
import App from '../App';
import Cuadrado from './Figuras/Cuadrado'


function Rutas(){



    return(
        <Routes>

            <Route path="/" exact element={<App/>}/>
            <Route path="/cuadrado" element={<Cuadrado/>}/>

        </Routes>
    )
}


export default Rutas;