jQuery(function ($) {

    $(document).ready(function(){
        $('#input-cpf').mask('000.000.000-00');
        $('#input-telefone').mask('00 00000-0000');
        $('#input-cep').mask('00000-000');
    });

    $('#input-nome').on("change", function(){
        if(!!$(this).val()){
            $('#bloco-input-cpf').removeClass('div-hidden');
        }else {
            $('#bloco-input-cpf').addClass('div-hidden');
            $('#input-cpf').val(null);
            $('#bloco-input-telefone').addClass('div-hidden');
            $('#input-telefone').val(null);
            $('#btn-avançar').css("visibility", "hidden");
        }
    });

    $('#input-cpf').on("change", function(){
        if(!!$(this).val()){
            $('#bloco-input-telefone').removeClass('div-hidden');
        }else {
            $('#bloco-input-telefone').addClass('div-hidden');
            $('#input-telefone').val(null);
            $('#btn-avançar').css("visibility", "hidden");
        }
    });

    $('#input-telefone').on("change", function(){
        if(!!$(this).val()){
            $('#btn-avançar').css("visibility", "visible");
        }else {
            $('#btn-avançar').css("visibility", "hidden");
        }
    });

    $('#btn-avançar').click(function(){
        if($('#section-user-info').css('display') != 'none'){
            $('#section-user-info').css('display', 'none');
            $('#section-address-info').css('display', 'block');
            $('#btn-voltar').css('display', 'block');
        }
    });

    $('#btn-voltar').click(function(){
        if($('#section-address-info').css('display') != 'none'){
            $('#section-address-info').css('display', 'none');
            $('#section-user-info').css('display', 'block');
            $('#btn-voltar').css('display', 'none');
        }
    });
    $('#input-cep').on("change", function(){
        if(!!$(this).val() && $(this).val().length >= 9){
            $('#div-container-spinner').css('display', 'flex');
            setTimeout(() => {
                handleGetAddress($(this).val());
            }, 2000);
        }else {
            console.log($(this).val());
        }
    });

    let handleGetAddress = async (cep) => {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const myJson = await response.json();
        handleLoadAddress(myJson);
        $('#div-container-spinner').css('display', 'none');
    }

    let handleLoadAddress = (response) => {
        if(!!response) {
            $('#bloco-input-rua').css('display', 'flex');
            $('#input-rua').val(response.logradouro);
            $('#bloco-input-numero').css('display', 'flex');
            $('#input-numero').val('');
            $('#bloco-input-complemento').css('display', 'flex');
            $('#input-complemento').val('');
            $('#bloco-input-bairro').css('display', 'flex');
            $('#input-bairro').val(response.bairro);
            $('#bloco-input-cidade').css('display', 'flex');
            $('#input-cidade').val(response.localidade);
            $('#bloco-input-uf').css('display', 'flex');
            $('#input-uf').val(response.uf);
        }
    }

});