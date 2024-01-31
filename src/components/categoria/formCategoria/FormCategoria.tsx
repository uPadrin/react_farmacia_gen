import { useState, useEffect, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { buscar, atualizar, cadastrar } from "../../../service/Service";
import { RotatingLines } from "react-loader-spinner";

function FormularioCategoria() {

    const navigate = useNavigate();

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria)
        } catch (error: any) {
            alert("Erro ao buscar categoria!")
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }

    function retornar() {
        navigate("/categorias")
    }

    async function cadastrarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)
        if (id !== undefined) {
            try {
                await atualizar(`/categorias`, categoria, setCategoria)
                alert("Categoria atualizada com sucesso!")
            } catch (error: any) {
                alert("Erro ao atualizar a categoria.")
            }
        } else {
            try {
                await cadastrar(`/categorias`, categoria, setCategoria)
                alert("Categoria cadastrada com sucesso!")
            } catch (error: any) {
                alert('Erro ao cadastrar a categoria.')
            }
        }
        setIsLoading(false)
        retornar()
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                {id === undefined ? "Cadastrar categoria" : "Editar Categoria"}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={cadastrarNovaCategoria}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="Tipo">Tipo do categoria</label>
                    <input
                        type="text"
                        placeholder="tipo"
                        name='tipo'
                        className="border-2 border-slate-700 rounded p-2"
                        value={categoria.tipo}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    className="rounded text-slate-100 bg-sky-500 hover:bg-sky-900 w-1/2 py-2 mx-auto flex justify-center"
                    type="submit"
                >
                    {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>{id === undefined ? "Cadastrar" : "Editar"}</span>
                    }
                </button>
            </form>
        </div>
    );
}

export default FormularioCategoria;