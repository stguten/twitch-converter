import database from "../config/database.config.js";

const firstRun = async () => {
  await database.serialize(() => {
    database.run("CREATE TABLE logs (username TEXT,recompensa INTEGER, horario TEXT);");
    database.run("CREATE TABLE recompensas (id INTEGER, custo INTEGER, porcetagem REAL, valor_fixo INTEGER)");
    
  });
};
