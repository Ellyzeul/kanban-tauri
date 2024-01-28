#[tauri::command]
pub fn hello(name: String) -> String {
  return format!("Hello World, {}!", name);
}
