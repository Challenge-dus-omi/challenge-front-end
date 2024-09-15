import {Routes, Route} from 'react-router-dom'

import Home from './routes/Home/index'
import Servicos from './routes/Servicos/index'
import Sobre from './routes/Sobre/index'
import Contato from './routes/Contato/index'
import Error from './routes/Error/index'

export const AppRoutes = () => {

  return (
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/servicos' element={<Servicos />}/>
        <Route path='/sobre' element={<Sobre />}/>
        <Route path='/contato' element={<Contato />}/>

        <Route path='*'  element={<Error />}/>
      </Routes>
  )
}