// ⛰️ Summit Rush: the battle server for this game (the engine is in ./shared, from kittyhome-shared).
import { startBattleServer } from "./shared/battle/server.js";

await startBattleServer("summit", { port: 5202 });
