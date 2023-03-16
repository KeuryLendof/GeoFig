import {Routes, Route} from 'react-router-dom'
import App from '../App';
import Figuras from './Figuras/Figuras';
import Operaciones from './Operaciones/operaciones';

function Rutas(){



    return(
        <Routes>

            <Route path="/" exact element={<App/>}/>

            <Route path="figuras" element={<Figuras/>}>
                <Route path=":id" element={<Figuras/>} />
            </Route>

            <Route path="operaciones" element={<Operaciones/>}>
                <Route path=":id" element={<Operaciones/>}/>
            </Route>

        </Routes>
    )
}


export default Rutas;