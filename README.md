# Clyvo Care - Compliance, Quality Assurance & Tests (Sprint 4)

Projeto acadêmico voltado ao monitoramento clínico preventivo e pós-operatório de pets.

---

## 1. Testes Manuais (Azure Boards)
O planejamento e a validação em nível de sistema foram estruturados no Azure Boards cobrindo objetivos, dados de entrada, dados de saída e passos de execução com dados controlados:
* **Link de acesso ao Azure Boards:** https://dev.azure.com/ClyvoCare/ClyvoCare-Scrum
> **Permissões configuradas:** O perfil do professor foi adicionado com nível de licença **Basic** na Organização e atribuído como **Project Administrator** no projeto.

---

## 2. Automação de Testes (Postman)
Implementação de suíte de testes automatizados de integração cobrindo fluxos essenciais da API RESTful (criação de registros, validações Bean Validation, regras de telemetria com risco clínico e consultas analíticas):
* **Link do vídeo de evidências:** https://youtu.be/O5CQkHyAVus
* **Arquivo da Collection:** `ClyvoCare_Collection.json`
* **Mock Server local:** `server.js`

### Instruções para reprodução:
1. Executar o servidor de mock local:
   ```
   node server.js
   ```

   Importar o arquivo ClyvoCare_Collection.json no Postman.

  Executar os testes via Collection Runner.

  ## 👥 Integrantes do Grupo

* **Geovanne Coneglian** — RM 562673

* **Guilherme Soares de Almeida** — RM 563143

* **Lucas Silva Gastão Pinheiro** — RM 563960
