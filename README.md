# Calculator
Projeto: Calculadora

## Aspetos a respeitar

- Para além de Javascript é necessário **HTML** e **CSS**
- Design deve ser respeitado ao máximo possível
- Estrutura do projeto fica a vosso critério
- **Regras de lógica a respeitar**
    - **Não é** para implementar a “percentagem” nem o “mais/menos”. É meramente visual.
    - Estado inicial do visor é o número 0
        - Validar lógicas com o valor 0
            - **Não é permitido múltiplos 0 como valor inicial a não ser precedido por um número**
            - 000(0) não é permitido no visor mas 80000000 é permitido
    - Implementar o botão **clear** ( C ) no desenho → Limpa o visor e coloca o visor no estado inicial
    - Tendo em conta que a calculador não funciona apenas para números inteiros, deve ser utilizado a virgula para valores decimais
    - Todas as operações númericas (multiplicação, divisão, adição e subtração) é para implementar
    - Botões de operação devem ser incluidos no visor
        - Se multiplicamos 8 por 8, deve aparecer no visor 8x8
    - Qualquer divisão por 0 deve aparecer o texto “Not a number” no visor.
        
        ![Screenshot 2022-04-22 at 16.21.48.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ce5494c9-e91c-4a47-8b88-f3e95c86b0ac/Screenshot_2022-04-22_at_16.21.48.png)
        
    - Quando carregamos no botão de igual → calcula o resultado atualmente no visor
    - Números negativos são possíveis
        - A operação `0 - 6` deve mostrar no visor `-6`
    - `OPCIONAL` → O visor ser uma input de html de maneira a dar suporte ao teclado para introdução dos números
