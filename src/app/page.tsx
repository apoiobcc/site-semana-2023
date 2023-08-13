import Rodape from '@/components/Rodape/Rodape'
import Apresentacao from '@/components/apresentacao/Apresentacao'
import Cabecalho from '@/components/cabecalho/Cabecalho'
import Calendario from '@/components/calendario/Calendario'
import Mapa from '@/components/mapa/Mapa'
import React from 'react'

const Home = () => {
  return (
    <main className='flex flex-col gap-10 items-center'>
      <Cabecalho/>
      <Apresentacao/>
      <Calendario/>
      <Mapa/>
    </main>
  )
}

export default Home;