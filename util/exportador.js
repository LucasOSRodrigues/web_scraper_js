import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
import { dirname } from "path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default function exportarParaCSV(dados, prefixo = "livros") {
  const agora = new Date()
  const dataStr = agora.toISOString().split("T")[0]
  const nomeArquivo = `${prefixo}-${dataStr}.csv`
  const pasta = path.join(__dirname, "..", "livros")

  if (!fs.existsSync(pasta)) {
    fs.mkdirSync(pasta)
  }

  const header = "Título,Preço,Livros em estoque\n"
  const linhas = dados
    .map(
      (livro) => `"${livro.titulo}","${livro.preco}","${livro.disponibilidade}"`
    )
    .join("\n")

  fs.writeFileSync(path.join(pasta, nomeArquivo), header + linhas)
  console.log(
    `[${agora.toLocaleString()}] Arquivo ${nomeArquivo} salvo com sucesso!`
  )
}
