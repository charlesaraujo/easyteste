<h1  align="center">
	 Front End Easynvest
</h1>
<p  align="center">
Este projeto foi feito para o teste da easynvest, seguindo o que foi solicitado no link abaixo:
<p>
<p  align="center">
https://github.com/easynvest/teste-front-end
</p>
<p  align="center">
Desenvolvido em javascript e utilizando o conceito de web componentes, sass, jest, cypress, e localStorage como banco de dados

</p>

### :rocket: Get started

Clone o projeto e instale as dependencias

```sh
git clone https://github.com/charlesaraujo/easyteste.git
cd easyteste/
npm install
```

Inicia o server de dev

```sh
npm run dev
```

O comando de build gera a pasta /dist no projeto onde fica o codigo otimizado para prod

```sh
npm run build
```

### :hammer: Testing

Separei os testes em 2 partes, onde os unitarios testam apenas serviços e o end-to-end testa o layout.

Como utilizei web components tive dificuldade de fazer testes com o jest em classes que extendiam HTMLElement, por isso criei os testes End to End

#### Testes Unitarios

Para executar os testes basta executar o seguinte comando

```sh
npm run test
```

Ou para verificar a cobertura

```sh
npm run test:coverage
```

#### Testes End to End

Para executar todos os testes no terminal basta executar o seguinte comando

```sh
npm run e2e

```

Ou voce pode abrir a interface do cypress e testar um de cada vez sendo reproduzido no navegador

```sh
npm run e2e:open
```
