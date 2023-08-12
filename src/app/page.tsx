import Rodape from '@/components/Rodape/Rodape'
import Apresentacao from '@/components/apresentacao/Apresentacao'
import Cabecalho from '@/components/cabecalho/Cabecalho'
import Calendario from '@/components/calendario/Calendario'
import Mapa from '@/components/mapa/Mapa'

export default function Home() {
  return (
    <main className='flex flex-col gap-10 items-center'>
      <Cabecalho/>
      <Apresentacao />
    </main>
  )
}
