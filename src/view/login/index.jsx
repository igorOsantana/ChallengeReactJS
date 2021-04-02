import React from 'react';
import { ContainerMain, IconGitHub, Feedback } from './loginStyle';

function login () {

    function formValidate () {
        var inputSearch = document.getElementsByClassName('inputSearch')[0];
        var message = document.getElementsByClassName('invalid-feedback')[0];

        if (inputSearch.value === "" ) {
            inputSearch.style.border = '2px solid #f00';
            message.style.display = 'flex';
            message.style.justifyContent = 'flex-end';
        } else {
            inputSearch.style.border = 'none';
            message.style.display = 'none';
        }
    }

    return (
        <ContainerMain>
            <IconGitHub>
            <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" fill="currentColor" className="bi bi-github color-warning" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            </IconGitHub>
            <form className="needs-validation" id="buttonSearch" noValidate>
                <input type="text" className="form-control mb-1 inputSearch" placeholder="Usuário" />
                <Feedback className="invalid-feedback">
                    Campo obrigatório
                </Feedback>
                <button type="button" className="btn btn-warning mt-2" form="buttonSearch" onClick={formValidate}>
                    ENTRAR
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                    </svg>                
                </button>
            </form>
        </ContainerMain>
    );

}

export default login;