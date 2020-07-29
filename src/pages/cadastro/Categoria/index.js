import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault'; 
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000',
  }

  const [categorias, setCategoria] = useState([]); 
  const [values, setValues] = useState(valoresIniciais);
  


  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleOnChange(infosDoEvento) {
    const { getAttribute, value } = infosDoEvento.target;

    setValue(
      getAttribute('name'), 
      value
    );
    }

  return (
      <PageDefault>
        <h1>Cadastro de Categoria: {values.nome}</h1>

        <form onSubmit={function handelSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategoria([
            ...categorias,
            values
          ]);

          setValues(valoresIniciais);
        }}>

          <FormField
            label="Nome da categoria" 
            type="text"
            name="nome"
            values={values.nome}
            onChange={handleOnChange}
          />

          <FormField
            label="Descrição" 
            type="text"
            name="descricao"
            values={values.descricao}
            onChange={handleOnChange}
          />

          <FormField 
            label="Cor"
            type="color" 
            name="cor"
            values={values.cor}
            onChange={handleOnChange}
          />

          <button>
            Cadastrar
          </button>

        </form>

        <ul>
          {categorias.map((categoria, index) => {
            return (
              <li key={`${categoria}${index}`}>
                {categoria.nome}
              </li>
            )
          })}
        </ul>

        <Link to="/">
          Ir para home
        </Link>
      </PageDefault> 
  )
};

export default CadastroCategoria;