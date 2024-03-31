## Site de Agendamento de Checklists de Caminhões

**Descrição:**

Este site facilita o agendamento e acompanhamento de checklists de caminhões de uma empresa. Motoristas podem agendar checklists, que são então exibidos em uma agenda para o administrador do sistema.

**Funcionalidades:**

* **Agendamento de Checklists:** Motoristas podem agendar checklists informando a placa do caminhão, seu nome e a data e hora desejadas para a realização do checklist.
* **Visualização da Agenda:** O administrador pode visualizar uma agenda com todos os checklists agendados. Ao clicar em um dia específico, a lista de checklists agendados para aquele dia é exibida, ordenada por horário.
* **Lista de Frota:** O administrador tem acesso a uma lista de placas de caminhão da empresa, ordenadas de acordo com a data do último checklist realizado. As placas que não têm um checklist realizado nos últimos 30 dias são destacadas.
* **Registro de Cancelamentos:** Quando um checklist agendado não é realizado, essa informação é registrada em uma lista de cancelamentos.

**Tecnologias:**

**Frontend:**

* React
* Styled-components (SCSS)
* FullCalendar (com styled-components)

**Backend:**

* Node.js
* Express.js (para o servidor)
* Banco de Dados Relacional (por exemplo, MySQL ou PostgreSQL)

**Bibliotecas e Ferramentas Adicionais:**

* JSON Web Tokens (JWT): Para autenticação de usuários.
* Axios: Para fazer requisições HTTP entre o frontend e o backend.

**Como Executar o Projeto Localmente:**

1. Clone este repositório para o seu ambiente local.
2. No terminal, navegue até a pasta do projeto e instale as dependências do frontend e do backend:

```bash
cd site-agendamento-checklists
npm install
cd backend
npm install
```

3. Configure o banco de dados de acordo com as configurações do seu ambiente.
4. Inicie o servidor backend:

```bash
npm start
```

5. Em outro terminal, inicie o servidor frontend:

```bash
cd site-agendamento-checklists
npm start
```

**Contribuição:**

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request com melhorias ou correções.
