let arregloNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        let resultadoNumeros = '';
        let resultadoFactoriales = '';

        for (let iteracion = 0; iteracion < arregloNumeros.length; iteracion++) {
            let numero = arregloNumeros[iteracion];
            let factorialNumero = 1;

            for (let i = 2; i <= numero; i++) {
                factorialNumero *= i;
            }
            resultadoNumeros += '<li class="list-group-item">' + numero + '</li>';
            resultadoFactoriales += '<li class="list-group-item">' + factorialNumero + '</li>';
        }
        document.getElementById('lista-numeros').innerHTML = resultadoNumeros;
        document.getElementById('lista-factoriales').innerHTML = resultadoFactoriales;