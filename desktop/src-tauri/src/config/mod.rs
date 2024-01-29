#[path = "../types.rs"]
mod types;
mod plugins;

use types::TauriBuilder;
use pipe_trait::Pipe;
use plugins::set_plugins;

pub fn config(builder: TauriBuilder) -> TauriBuilder {
  builder
    .pipe(set_plugins)
}