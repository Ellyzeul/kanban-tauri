import Kanban from "./components/Kanban";

function App() {
  return (
    <div className="w-full h-full bg-slate-200 flex justify-evenly items-center">
      <Kanban
        display_info={{
          columns: [
            { title: 'A Fazer', tasks: [{ title: 'Adicionar tarefas', description: 'Tornar a interface dinâmica e permitir a inserção e remoção de tarefas do kanban.' }, { title: 'Salvar tarefas', description: 'Estudar melhor maneira de persistir os dados no Tauri: se usando alguma ferramenta de storage ou partir direto para o SQLite.' }] },
            { title: 'Em Progresso', tasks: [] },
            { title: 'Finalizado', tasks: [{ title: 'Comandos Tauri', description: 'Estudar como os comandos do Tauri são implementados no Rust.' }] },
          ]
        }}
      />
    </div>
  )
}

export default App;
