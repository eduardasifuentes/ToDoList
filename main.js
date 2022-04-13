//Buscar a ul e guardar numa costante
const listElement = document.querySelector('ul')
//A gente vai precisar do input pq é onde o usuario vai digitar a tarefa
const inputElement = document.querySelector('input')
//Buscando o Button e criando uma constante
const buttonElement = document.querySelector('Button')

//Constante task que recebe um arrey([])
const tasks = []

//funçao para adicionar os itens do array "tasks"
function showTasks() {
  listElement.innerHTML = ''

  for (task of tasks) {
    //essa contante tarefa vai criar no meu html li
    const taskElement = document.createElement('li')
    //vai criar o texto de acordo com o que tem dentro do tasks
    const textTask = document.createTextNode(task)

    const linkElement = document.createElement('a')
    //vai pegar a posição daquele momento do for e colocar para o item
    const pos = tasks.indexOf(task)

    const linkText = document.createTextNode('X')
    linkElement.appendChild(linkText)

    linkElement.setAttribute('onclick', `deleteTask(${pos})`)

    //agora vou pegar a minha "li" e vou colocar um filho nele que vai ser meu texto textTask que é cada item no meu array
    taskElement.appendChild(textTask)
    //agora vou pegar a "ul" e adicionar o "li" nele
    listElement.appendChild(taskElement)
    taskElement.appendChild(linkElement)
  }
}

showTasks()

function addTask() {
  //essa const pode ter o mesmo nome de outra pois esta dentro do escolpo dessa função. "inputElement.value" vai pegar apenas o valor que o usuario digitou
  const textTask = inputElement.value
  //dai vou adicionar o valor do input no meu array tasks
  tasks.push(textTask)
  //depois que adiciou o valor do input no array vou limpar o texto do input
  inputElement.value = ''

  showTasks()
}

// estou colocando um atributo no meu botão que o valor ao clique vai ser a function addTask
buttonElement.setAttribute('onclick', 'addTask()')

function deleteTask(pos) {
  //vai pegar meu array tasks vai usar o metodo splice que vai começar na posição que está e vai excluir apenas um item
  tasks.splice(pos, 1)
  //depois que excluir eu vou chamar a função mostra tarefas para renderizar porem sem aquele item que eu tirei
  showTasks()
}
