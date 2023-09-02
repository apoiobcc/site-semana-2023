import Rodape from '@/components/Rodape/Rodape'
import Apresentacao from '@/components/apresentacao/Apresentacao'
import Aviso from '@/components/aviso/Aviso'
import Cabecalho from '@/components/cabecalho/Cabecalho'
import Calendario from '@/components/calendario/Calendario'
import Mapa from '@/components/mapa/Mapa'
import React from 'react'

const Home = () => {
  return (
    <main className='flex flex-col items-center'>
      <Cabecalho/>
      <div className='flex flex-col items-center w-full max-w-[1800px] p-12'>
        <Apresentacao/>
        <Aviso titulo="Calendario"/>
        <Aviso titulo="Como Chegar"/>
        <Aviso titulo="Colaboradores"/>
      </div>
    </main>
  )
}

export default Home;