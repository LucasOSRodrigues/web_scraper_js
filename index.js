import scrapeLivros from "./scraper.js"
import exportarParaCSV from "./util/exportador.js"
import iniciarAgendamento from "./agendador.js"

// Executa imediatamente ao iniciar
async function initScraping() {
  try {
    const livros = await scrapeLivros()
    exportarParaCSV(livros)
  } catch (erro) {
    console.error("Erro ao executar scraping inicial:", erro.message)
  }
}
// Executa imediatamente ao iniciar
initScraping()

// Agenda o cron diário
iniciarAgendamento()
