import React from 'react'
import PageHeader from '../templat/pageHeader'
import './abaut.css'

export default props => (
    <div>
        <PageHeader name="UML e seus diagramas" small="Luciano da Costa de Sousa "></PageHeader>
        <h2>Introdução</h2>
        <p>A UML (Linguagem Unificada de Modelagem) é uma linguagem gráfica de modelagem para visualização,
        especificação, construção e documentação para desenvolver sistemas computacionais orientados a
        objeto, esta modelagem é apresentada através de diagramas. É utilizada para uma melhor
        compreensão do sistema que será desenvolvido, especificar comportamentos internos que são as
        variáveis que interagem com o sistema (usuário e ambiente) e internos (sistema e suas especificações)
            e documentar as decisões tomadas (Vergilio, 2011).</p>

        <p> Este artigo tem como objetivo apresentar algums dos diagramas da UML, com uma breve explicação de como são utilizados atualmente,
        dando ênfase aos principais. Os diagramas apresentados neste artigo serão os diagrama de Casos de Uso, diagrama de Classes e o
            diagrama de Sequência.</p>

        <p>No início da utilização do paradigma de orientação a objetos, diversos métodos foram apresentados para a comunidade. Chegaram a
        mais de cinquenta entre os anos de 1989 a 1994, porem a maioria deles cometeu o erro de tentar estender os métodos estruturados
        da época. Com isso os maiores prejudicados foram os usuários que não conseguiam encontrar uma maneira satisfatória de modelar
        seus sistemas. Foi a partir da década de 90 que começaram a surgir teorias que procuravam trabalhar de forma mais ativa com o
        paradigma da orientação a objetos. Diversos autores famosos contribuíram com publicações de seus respectivos métodos. (SAMPAIO, 2007)
            </p>
        <p>Em outubro de 1994, começaram os esforços para unificação dos métodos. Já em outubro de 1995, Booch e Rumbaugh lançaram um rascunho
        do Método Unificado” unificando o Booch’93 e o OMT-2. Após isso, Jacobson se juntou a equipe do projeto e o “Método Unificado”
        passou a incorporar o OOSE. Em junho de 1996, os três amigos, como já eram conhecidos, lançaram a primeira versão com os três
            métodos - a versão 0.9 que foi batizada como UML (FOWLER, 2003)</p>

        <p> A UML possui um total de treze diagramas. Eles são divididos em  dois grupos: Diagramas Estruturais e Diagramas Comportamentais,
        sendo que os comportamentais possuem uma subdivisão chamada de Diagramas de Interação [Martinez, 2015]. Sendo estes os diagramas
        da UML. A UML define um número de diagramas que permite dirigir o foco para aspectos diferentes do sistema de maneira independente.
        Se bem usados, os diagramas facilitam a compreensão do sistema que está sendo desenvolvido.
</p>
    </div>
)