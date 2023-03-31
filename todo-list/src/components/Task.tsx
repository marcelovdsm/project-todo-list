import styles from './Task.module.css'
import { PlusCircle, ClipboardText } from "phosphor-react"

export const Task = () => {
  return(
    <article className={styles.task}>
      <div className={styles.addTask}>
        <input type="text" placeholder="Adicione uma nova tarefa"/>
        <button>Criar <PlusCircle size={16} weight="bold"/></button>
      </div>

      <div className={styles.taskMain}>
        <div className={styles.tasks}>
          <div className={styles.taskHeader}>
            <p>Tarefas criadas <span>0</span></p>
            <p>Tarefas concluídas <span>0</span></p>
        </div>

        <div className={styles.emptyTaskList}>
          <ClipboardText size={70} weight="bold" />
          <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>
       
      </div>

    </article>
    
  )
}