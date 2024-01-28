mod hello;

use tauri::{Builder, Wry, generate_handler};

pub fn set_commands(builder: Builder<Wry>) -> Builder<Wry> {
  return builder.invoke_handler(
    generate_handler![
      hello::hello,
    ]
  );
}
