// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod command;

use command::set_commands;

fn main() {
    set_commands(tauri::Builder::default())
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
