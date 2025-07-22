import axios from "axios"
import * as cheerio from "cheerio"

const BASE_URL = "https://books.toscrape.com/"

export default async function scrapeLivros() {
  const livros = []

  const { data } = await axios.get(BASE_URL)
  const conteudo = cheerio.load(data)

  conteudo(".product_pod").each((_index, element) => {
    const titulo = conteudo(element).find("h3 a").attr("title")

    const preco = conteudo(element).find(".price_color").text().replace("£", "")

    const disponibilidade = conteudo(element)
      .find(".instock.availability")
      .text()
      .trim()

    livros.push({ titulo, preco, disponibilidade })
  })

  return livros
}
