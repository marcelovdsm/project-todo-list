import { ChangeEvent, useState } from 'react'
import styles from './Task.module.css'
import { PlusCircle, ClipboardText, Trash } from "phosphor-react"

export const Task = ({ content }) => {

  interface tasks {
  id: number
  content: string
  }

  let [tasks, setTasks] = useState([
    {
      id: 1,
      content: 'Lavar o carro',
    },
    {
      id: 2,
      content: 'Estudar',
    },
    {
      id: 3,
      content: 'Beber água',
    }
  ])

  function handleAddNewTask() {
    event.preventDefault()

    const newTaskText = event.target.task.value

    console.log(newTaskText)

    setTasks([...tasks, newTaskText])
  }

  function taskList(tasks:Array<tasks>, content:string) {

    if(tasks.length > 0) {
      return(
        <div className={styles.taskList}>
          {tasks.map((task, i) => {
            content = handleAddNewTask
            i = task.id
            return (
              <form key={i} className={styles.tasks}>
                <input type="checkbox" />
                <p>{content}</p>
                <Trash size={20} className={styles.trash}/>
              </form>
            )
          })}
        </div>
      )
    } else {
      return(
        <div className={styles.emptyTaskList}>
          <ClipboardText size={70} weight="bold" />
          <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      )
    }
  }


  
  return(
    <article className={styles.task}>
      <form className={styles.addTask} onSubmit={handleAddNewTask}>
        <input type="text" name="task" placeholder="Adicione uma nova tarefa"/>
        <button>Criar <PlusCircle size={16} weight="bold"/></button>
      </form>

      <div className={styles.taskMain}>
        <div className={styles.task}>
          <div className={styles.taskHeader}>
            <p>Tarefas criadas <span>0</span></p>
            <p>Tarefas concluídas <span>0</span></p>
          </div>
          {taskList(tasks, handleAddNewTask)}
        </div>
      </div>

    </article>
    
  )
}