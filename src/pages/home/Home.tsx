function Home() {
    return (
        <>
            <div id="container"
                className="
                bg-vermelho-3
                flex 
                justify-center
                ">
                <div id="subcontainer"
                    className="container grid grid-cols-2 text-white"
                >
                    <div id="texto"
                        className="flex flex-col gap-4 items-center justify-center py-4"
                    >
                        <h2 className="text-4xl font-bold">Seja Bem-vindo(a) a redenção! </h2>
                        <p className="text-xl">Compre aqui seus remédios aqui</p>


                        <div className="flex justify-around gap-4">
                            <div className="rounded-3xl text-white bg-vermelho-5 border-solid border-2 px-4 py-2 font-semibold text-xl">
                                Produtos
                            </div>
                        </div>
                    </div>

                    <div id="imagem" className="flex place-items-center justify-center">
                        <img className="w-2/3"
                            src="https://ik.imagekit.io/padrin/World%20health%20day-cuate%20(2).png?updatedAt=1706706933877"
                            alt="Imagem da Página Home"
                        />
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;