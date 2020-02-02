=========
NodeJS
=========

1. O que é API e NodeJS?

1.1 NodeJS é uma plataforma multipropósito e multiparadigma para
desenvolvimento de aplicativos que utiliza JavaScript como linguagem de programação sem
depender de um web browser para interpretá-la.

1.2 No passado JavaScript era uma linguagem de programação para automação de pequenas tarefas no frontend do cliente
e era totalmente dependente do web browser.

1.3 API Rest é uma forma de arquitetar projetos separando-se o frontend do backend, tornando o desenvolvimento dessas
camadas flexível e independente uma da outra.

1.4 Verificando a versão instalada do Node
node -v

1.5 Verificando a versão instalada do NPM
npm -v

1.5.1 NPM (Node Package Manager) é a ferramenta responsável por fazer a gerencia de build e de dependências automaticamente de um projeto baseado na plataforma Node.

1.5.2 Com o NPM podemos ter dependências globais instaladas a nível
de usuário e dependências do projeto.

1.6 Criando o diretório do projeto
mkdir node-api

1.7 Iniciando um novo projeto NPM em modo não interativo
1.7.1 Nesse passo tornamos nosso projeto gerencíavel pelo NPM.
npm init -y

1.8 Instalar o Express como dependência do projeto
1.8.1 Express é um micro-framework MVC capaz de gerenciar routes e views.
npm install express

1.9 Para que server o arquivo package.json?
O arquivo package.json serve para declarar e gerenciar as tasks e dependencies do projeto.
É através dele que o NPM gerencia o processo de build do projeto.

1.9.1 E o arquivo package-lock.json para que serve?
Este é um arquivo de controle do cache das dependências declaradas que já foram baixadas.
Nele consta toda a árvore de dependências (transitivas) do projeto.

1.10 Instalar o módulo NodeMon como dependência de desenvolvimento do projeto

1.10.1 NodeMon é um utilitário que irá monitorar quaisquer mudanças no código-fonte
do projeto e automaticamente irá reiniciar o servidor (semelhante ao springboot-devtools).

1.10.2 npm install --save-dev nodemon

1.10.3 npm install -D nodemon

1.11 No arquivo package.json do projeto qual é a diferença entre
dependencies e devDependencies?

1.11.1 dependencies são as dependencias de produção ou de runtime do projeto.
São dependências necessárias para que o projeto seja implantado e executado
no host servidor.

1.12.2 devDependencies são dependências de desenvolvimento, ou seja, necessárias
apenas durante a fase de desenvolvimento do projeto e apenas no computador
do desenvolvedor/programamdor.
