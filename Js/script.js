const inputDate = document.querySelector('.inputDate');
const btnSubmit = document.querySelector('.btnEnviar');
const  btnReiniciar = document.querySelector('.btnReiniciar')

const cadastrarData = () => {

    const dataResultado = inputDate.value;
    const ano = dataResultado[0] += dataResultado[1] += dataResultado[2] += dataResultado[3] 
    const mes = dataResultado[5] += dataResultado[6] 
    const dia = dataResultado[8] += dataResultado[9]

    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear()
    const diaAtual = dataAtual.getDate();
    const mesAtual = dataAtual.getMonth()+1;

    if (diaAtual > dia && mesAtual > mes && anoAtual > ano) {
        alert('Valor Invalido')
    } else {
        const resultDia = (dia - diaAtual);
        const resultMes = (mes - mesAtual);
        const resultAno = (ano - anoAtual);
        atualizarTela(Math.abs(resultDia), Math.abs(resultMes), Math.abs(resultAno));
    }

}
const atualizarTela = (dia, mes, ano) => {

    const divDias = document.querySelector('.dias');
    const divMes = document.querySelector('.mes');
    const divAno = document.querySelector('.ano');

    divDias.innerHTML = dia;
    divMes.innerHTML = mes;
    divAno.innerHTML = ano;
}
const reiniciarCont = _ => {
    inputDate.value = "";
    atualizarTela(0, 0, 0)
}

btnSubmit.addEventListener('click', cadastrarData);
btnReiniciar.addEventListener('click', reiniciarCont)