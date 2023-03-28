import { valida } from "./validador.js";

const inputs = document.querySelectorAll('input, textarea');
inputs.forEach(inputs =>{
        if(inputs.dataset.tipo == 'p_preco'){
            SimpleMaskMoney.setMask(inputs, {
                prefix: 'R$',
                fixed: true,
                fractionDigits: 2,
                decimalSeparator: ',',
                thousandsSeparator: '.',
                cursor: 'end'
            });
    
        }

    inputs.addEventListener('blur', (e) =>{
        valida(e.target);
    })

});