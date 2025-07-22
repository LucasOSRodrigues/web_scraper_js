import cron from "node-cron"
import scrapeLivros from "./scraper.js"
import exportarParaCSV from "./util/exportador.js"

export default function iniciarAgendamento() {
  // agendado para executar diariamente à meia-noite (00:00)
  cron.schedule("0 0 * * *", async () => {
    console.log(
      `[${new Date().toLocaleString()}] Executando scraping diário...`
    )
    try {
      const livros = await scrapeLivros()
      exportarParaCSV(livros)
    } catch (erro) {
      console.error(
        `[${new Date().toLocaleString()}] Erro durante o scraping:`,
        erro.message
      )
    }
  })
}
