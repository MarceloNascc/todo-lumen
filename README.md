# PROCESSO SELETIVO - LUMEN GAMES

Este projeto faz parte do processo seletivo para o estágio em Front-end.

### PROTOTIPO

Para a prototipação foi utilizado o [Figma](<https://www.figma.com>).
[PROTÓTIPO](<https://www.figma.com/file/2JYOruSG34lGNfpGkkHohJ/Lumen-Games-To-do-list?node-id=0%3A1>)

### GIF DO RESULTADO FINAL

![](/src/assets/img/todo.gif)

### ESTRUTURAÇÃO DOS COMPONENTES
```

├── src/                    # Incluso todo o código
    ├── index.css           # Arquivo de estilização mais geral
    ├── index.js            # Insere o componente principal no html
    ├── App.css             # Arquivo de estilização do componente principal
    ├── App.js              # Componente principal, cuida da exibição e transição dos dois componentes que implementam o que foi pedido no projeto. Nele estão contidos outros três componentes: TransitionButton, ToDoList e Calendar.
    ├── components/         # Incluso todos os componentes (cada componente está dentro de uma pasta que tem o seu nome. Na pasta podem ser encontrados dois arquivos: index.js que exporta o componente e style.css que estiliza o componente. Em alguns casos esse padrão é quebrado e a pasta só contém o index.js. Isso acontece em alguns componentes criados a partir do Material UI).
        ├── TransitionButton# Componente que implementa um botão para fazer a trasição entre componentes.
        ├── ToDoList        # Componente que implementa a parte do to do list, usando três listas: Fazer (do), Fazendo (doing) e Feito (done). Nele está contido outro componente: List.
        ├── List            # Componente que implementa uma das listas, podendo ser a 'do', ou 'doing'... Nele estão contidos outros dois componentes: ActionButton e Task.
        ├── ActionButton    # Componente que implementa um botão de ação, como salvar, excluir e atualizar.
        ├── Task            # Componente que implementa um card com uma tarefa. Nele estão contidos outros três componentes: ActionButton, RadioButton e EditModal.
        ├── RadioButton     # Componente que implementa um radio button para representar uma List.
        ├── EditModal       # Componente que implementa um modal para fazer a atualização de uma tarefa. Nele está contido outro componente: ActionButton.
        ├── Calendar        # Componente que implementa a parte do calendário. Nele estão contidos outros dois componentes: SelectMonth e Day.
        ├── SelectMonth     # Componente que implementa um campo select para a seleção do mês que será visualizado.
        ├── Day             # Componente que implementa a visualização de um dia no mês. Nele está contido outro componente: DayTasksModal.
        ├── DayTasksModal   # Componente que implementa a visualização das tarefas de um dia.

```

### Instalação

O projeto requer os seguintes recursos instalados:

[Node.js]

[NPM]

Instale as dependências e execute o aplicativo da seguinte maneira:

```sh
$ git clone https://github.com/MarceloNascc/todo-lumen
$ cd todo-lumen
$ npm install
$ npm start
```

### Scripts Disponíveis

No diretório do projeto, você pode executar:

#### `npm start`

Executa a aplicação no modo de desenvolvimento.<br>
Uma aba do navegador será aberta em [http://localhost:3000](http://localhost:3000).

#### `npm run build`

Faz a construção da aplicação para produção na pasta `build`.

#### `npm run eject`

Faz a ejeção do react-create-app.

[node.js]: <http://nodejs.org>  
[NPM]: <https://www.npmjs.com/>