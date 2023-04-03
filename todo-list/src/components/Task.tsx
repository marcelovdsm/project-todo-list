import { useState } from 'react'
import styles from './Task.module.css'
import { PlusCircle, ClipboardText, Trash } from "phosphor-react"



export const Task = () => {

  interface tasks {
  id: number
  content: string
  done: boolean
  }

  const [tasks, setTasks] = useState([
    {
      id: 1,
      content: 'Lavar o carro',
      done: false
    },
    {
      id: 2,
      content: 'Estudar',
      done: false
    },
    {
      id: 3,
      content: 'Beber água',
      done: true
    }
  ])

  function handleAddNewTask() {
    
  }

  function taskList(tasks:Array<tasks>) {
    if(tasks.length > 0) {
      return(
        <div className={styles.taskList}>
          {tasks.map((task, i) => {
            i = task.id
            return (
              <form key={i} className={styles.tasks}>
                <input type="checkbox" />
                <p key={i}>{task.content}</p>
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
      <div className={styles.addTask}>
        <input type="text" placeholder="Adicione uma nova tarefa"/>
        <button>Criar <PlusCircle size={16} weight="bold"/></button>
      </div>

      <div className={styles.taskMain}>
        <div className={styles.task}>
          <div className={styles.taskHeader}>
            <p>Tarefas criadas <span>0</span></p>
            <p>Tarefas concluídas <span>0</span></p>
          </div>
          {taskList(tasks)}
        </div>
      </div>

    </article>
    
  )
}