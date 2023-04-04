import { ChangeEvent, useState } from 'react'
import styles from './Task.module.css'
import { PlusCircle, ClipboardText, Trash } from "phosphor-react"

export const Task = () => {

  interface tasks {
  id: number
  content: string
  }

  const [inputValue, setInputValue] = useState<any>("")

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
    setTasks([...tasks, { id: tasks.length, content: inputValue }])

    setInputValue("")
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
                <p>{task.content}</p>
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
          <input 
          value={inputValue}
          onInput={(e) => {
            setInputValue(e.currentTarget.value)
          }}
          type="text" 
          name="task" 
          placeholder="Adicione uma nova tarefa"
          />       
          <button onClick={() => handleAddNewTask()}>
            Criar <PlusCircle size={16} weight="bold" />
          </button>
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