/* 33 Celsius em Fahrenheit

    Crie uma função que receba uma string em celsius 
    ou fahrenheit e faça a transformção de uma unidade 
    para outra.

    C = (F - 32) * 5/9
    F = C * 9/5 + 32
    
    */

    function alterandograu(grau) {
        const celsiusExiste = grau.toUpperCase().includes('C')
        const fahrenheitExiste = grau.toUpperCase().includes('F')

        //fluxo de erro
        if(!celsiusExiste && !fahrenheitExiste) {
            throw new Error('Grau não identificado.') // criando erro caso grau não seja colocado correto
        }

        //fluxo ideal, F -> C
        let atualizarGrau = Number(grau.toUpperCase().replace("F", ""))
        let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
        let sinalGrau = 'C'

        //fluxo alternativo, C -> F
        if(celsiusExiste){            
        atualizarGrau = Number(grau.toUpperCase().replace("C", ""))
        formula = (celsius) => celsius * 9/5 + 32 
        sinalGrau = 'F'
        }

        return formula(atualizarGrau) + sinalGrau
    }
    
    try {
        console.log(alterandograu('50F'))
        console.log(alterandograu('10C'))
        console.log(alterandograu('50Z'))  // exemplo de grau errado
    } catch (error) {
        console.log(error.message)   //aparecer apenas a mensagem sem descrição     
    }

    