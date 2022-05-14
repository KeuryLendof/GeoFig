import {Routes, Route} from 'react-router-dom'
import App from '../App';
import Figuras from './Figuras/Figuras'


function Rutas(){



    return(
        <Routes>

            <Route path="/" exact element={<App/>}/>

            <Route path="figuras" element={<Figuras/>}>
                <Route path=":id" element={<Figuras/>} />
            </Route>

        </Routes>
    )
}


export default Rutas;