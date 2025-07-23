# Web Scraper com NodeJS

Este é um aplicativo Node.js que realiza web scraping do site [Books to Scrape](https://books.toscrape.com) para extrair informações de livros (título, preço e disponibilidade) e exportá-las para um arquivo `.csv`. O processo é agendado automaticamente todos os dias à meia-noite com o uso da biblioteca `node-cron`.

---

## Bibliotecas requeridas

- `axios` – Requisições HTTP
- `cheerio` – Manipulação de HTML
- `node-cron` – Agendamento de tarefas

``` bash
npm install axios cheerio node-cron
```

---

## Estrutura de pastas e arquivos principais

- **index.js** – Arquivo principal
- **scraper.js** – Função de scraping
- **agendador.js** – Função de agendamento
- **util/exportador.js** - Função de exportação para .CSV
- **livros/** - Diretório para armazenar os livros exportados

---

## Como executar
- Executar normalmente:
    ```bash
    node index.js
    ```

- Executar em segundo plano com pm2:
    ```bash
    pm2 start index.js
    ```
    > É necessário instalar a biblioteca pm2
