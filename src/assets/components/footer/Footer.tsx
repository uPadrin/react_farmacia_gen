import { InstagramLogo, FacebookLogo } from '@phosphor-icons/react'

let data = new Date().getFullYear()

function Footer() {
    return (
        <>
            <div className="flex justify-center bg-vermelho-5 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>Farmácia Redenção | Copyright: {data} </p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
                        <InstagramLogo size={48} weight='bold' />
                        <FacebookLogo size={48} weight='bold' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer