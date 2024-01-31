import { FirstAidKit} from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div className='w-full bg-vermelho-3 text-white flex justify-center py-2'>
                <div className="container flex justify-between text-lg">
                    <Link to="/home" className='text-2xl font-bold uppercase'>
                        <div className='flex flex-row gap-2 justify-center items-center'>
                        <FirstAidKit size={40} weight='bold' />
                            <p className=''>Redenção</p>
                        </div>
                    </Link>


                    <div className='flex gap-4 justify-center items-center'>
                        <Link to="/produto" className='font-semibold'>Produtos</Link>
                        <Link to="/categorias" className='font-semibold'>Categorias</Link>
                        <Link to="/cadastroCategoria" className='font-semibold'>Cadastrar categoria</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar