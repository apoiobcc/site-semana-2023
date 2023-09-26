import Rodape from '@/components/Rodape/Rodape'
import Apresentacao from '@/components/apresentacao/Apresentacao'
import Aviso from '@/components/aviso/Aviso'
import Cabecalho from '@/components/cabecalho/Cabecalho'
import Calendario from '@/components/calendario/Calendario'
import Mapa from '@/components/mapa/Mapa'
import React from 'react'
import Apoio from '@/components/Rodape/Apoio/Apoio'

const Home = () => {
  return (
    <main className='flex flex-col items-center w-[100vw]'>
      <Cabecalho/>
      <div className='flex flex-col items-center w-full max-w-[1800px] p-12'>
        <Apresentacao/>
        <Calendario/>
        <Mapa />
      </div>
      <Apoio/>
    </main>
  )
}

export default Home;