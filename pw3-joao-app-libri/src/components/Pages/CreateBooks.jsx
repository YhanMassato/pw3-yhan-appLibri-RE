import React, { useEffect, useState } from "react";
import style from './CreateBooks.module.css'
import Input from "../../forms/Input";
import Select from "../../forms/Select";
import Button from "../../forms/Button";

const CreateBooks = () => {

    const [categorias, setCategorias] = useState([]);
    const [book, setBook] = useState({});


    function handlerChangeBook(event) {
        setBook({...book, [event.target.name] : event.target.value});
        console.log(book)
    }

    function handlerChangeCat(event){
        setBook({...book, categoria:{
            cod_categoria:event.target.name,
            categoria:event.target.options[event.target.selectedIndex].text
        }})
        console.log(book)
    }

    useEffect(() =>{
        fetch('http://localhost:5000/listagemCateorias',{
            method: 'GET',
            headers:{
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Headers' : '*'
            }
        }).then(
            (resp) =>{
                return resp.json()
            }
        ).then(
            (data) =>{
                setCategorias(data.data)
                console.log(data.data)
            }
        ).catch(
            (error) =>{
                console.log(error)
            }
        )
    },[]);

    
    function cadastrarLivro(livro){

        console.log(JSON.stringify(livro))

        fetch('http://localhost:5000/inserirLivro',{
            method: 'POST',
            mode:"cors",
            body: JSON.stringify(livro),
            headers:{
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Headers' : '*'
            },
        }).then(
            (resp) =>{
                return resp.json()
            }
        ).then(
            (data) =>{
                console.log(data)
            }
        ).catch(
            (error) =>{
                console.log(error)
            }
        )

    }

    function submit(event){
        event.preventDefault()
        cadastrarLivro(book)
    }

    return(
        <section className={style.createBooks_container}>

            <h1>CADASTRO DE LIVROS</h1>
            <form onSubmit={submit}>

                <Input
                    type='text'
                    name='nome_livro'
                    placeHolder='digite o nome do livro a ser cadastrado'
                    text='Titulo do livro'
                    handlerChangeBook={handlerChangeBook}
                />
                <Input
                    type='text'
                    name='autor_livro'
                    placeHolder='digite o nome do autor do livro'
                    text='Nome autor do livro'
                    handlerChangeBook={handlerChangeBook}
                />
                <Input
                    type='text'
                    name='descricao_livro'
                    placeHolder='digite uma breve descrição do livro'
                    text='Descrição do livro'
                    handlerChangeBook={handlerChangeBook}
                />

                <Select 
                    name='categoria'
                    text='Selecione a categoria do livro'   
                    options={categorias}
                    // handlerChangeCat={handlerChangeCat}
                />

                <Button rotulo='Cadastrar Livro'/>

            </form>
        </section>
    )
}

export default CreateBooks