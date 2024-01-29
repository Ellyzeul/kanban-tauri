// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod command;
mod config;

use config::config;
use pipe_trait::Pipe;
use command::set_commands;

fn main() {
    tauri::Builder::default()
        .pipe(config)
        .pipe(set_commands)
        .pipe(|builder| builder
            .run(tauri::generate_context!())
            .expect("error while running tauri application")
        );
}
