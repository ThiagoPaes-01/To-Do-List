import { useState } from "react";
import styles from "./Lista.module.css";

export function Lista() {
  const [tarefas, setTarefas] = useState([]);
  const [texto, setTexto] = useState("");

  function adicionarTarefa() {
    if (texto.trim() === "") return;
    const novaTarefa = { id: Date.now(), titulo: texto, concluida: false };
    setTarefas([...tarefas, novaTarefa]);
    setTexto("");
  }

  function alternarConcluida(id) {
    setTarefas(
      tarefas.map((t) => (t.id === id ? { ...t, concluida: !t.concluida } : t)),
    );
  }

  function excluirTarefa(id) {
    setTarefas(tarefas.filter((t) => t.id !== id));
  }

  return (
    <div className={styles.card}>
      <h1>Lista de Tarefas</h1>

      <p className={styles.stats}>
        Total: {tarefas.length} | Concluídas:{" "}
        {tarefas.filter((t) => t.concluida).length}
      </p>

      <div className={styles.inputGroup}>
        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Digite uma tarefa..."
        />
        <button className={styles.addButton} onClick={adicionarTarefa}>
          Adicionar
        </button>
      </div>

      <ul className={styles.listaTarefas}>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id} className={styles.itemTarefa}>
            <input
              type="checkbox"
              checked={tarefa.concluida}
              onChange={() => alternarConcluida(tarefa.id)}
            />
            <span
              className={styles.textoTarefa}
              style={{
                textDecoration: tarefa.concluida ? "line-through" : "none",
                color: tarefa.concluida ? "#aaa" : "inherit",
              }}
            >
              {tarefa.titulo}
            </span>
            <button
              className={styles.deleteButton}
              onClick={() => excluirTarefa(tarefa.id)}
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
