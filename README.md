# Clyvo Care - Compliance, Quality Assurance & Tests (Sprint 4)

## 📌 Sobre o Projeto
O **Clyvo Care** é uma plataforma voltada ao monitoramento clínico contínuo, preventivo e pós-operatório de animais de estimação. A solução integra telemetria de sensores, regras preditivas de alerta precoce e persistência relacional para apoiar clínicas veterinárias e tutores no acompanhamento da evolução e recuperação dos pets.

---

## 👥 Integrantes do Grupo

* **Geovanne Coneglian** — RM 562673

* **Guilherme Soares de Almeida** — RM 563143

* **Lucas Silva Gastão Pinheiro** — RM 563960

---

## 🛠️ Tecnologias Utilizadas

### Backend & APIs
* **C# / .NET Core & Java Spring Boot:** Construção das APIs RESTful, camadas de serviço e controle de regras clínicas.
* **Oracle Database (PL/SQL):** Persistência relacional, procedimentos e consultas analíticas de janela temporal (`LAG` e `LEAD`).
* **Node.js:** Execução de scripts locais e servidor de simulação (Mock Server) para testes automatizados.

### Testes, Qualidade & Gestão
* **Azure Boards (Azure DevOps):** Gestão ágil via Scrum, rastreabilidade de PBIs e planejamento de casos de testes manuais em nível de sistema.
* **Postman:** Automação de testes de integração de API, validação de esquemas JSON, contratos e tempos de resposta.
* **Git & GitHub:** Versionamento de código e documentação de entregas com fluxo de branches (`develop`).

---

## 📋 1. Testes Manuais (Azure Boards)
O planejamento e a validação em nível de sistema foram estruturados no Azure Boards cobrindo objetivos, dados de entrada, dados de saída e passos de execução com dados controlados:
* **Link de acesso ao Azure Boards:** https://dev.azure.com/ClyvoCare/ClyvoCare-Scrum/_boards/directory/backlogs

> **Permissões configuradas:** O perfil do professor foi adicionado com nível de licença **Basic** na Organização e atribuído como **Project Administrator** no projeto.

---

## 🚀 2. Automação de Testes (Postman)
Implementação de suíte de testes automatizados de integração cobrindo fluxos essenciais da API RESTful (criação de registros, validações Bean Validation, regras de telemetria com risco clínico e consultas analíticas com tempo de resposta):
* **Link do vídeo de evidências:** [COLE_AQUI_O_LINK_DO_SEU_VIDEO_DO_YOUTUBE_OU_DRIVE]
* **Arquivo da Collection:** `ClyvoCare_Collection.json`
* **Mock Server local:** `server.js`

### Instruções para reprodução:
1. Executar o servidor de mock local:
   ```
   node server.js
 
   ```

Importar o arquivo ClyvoCare_Collection.json no Postman.

Executar os testes via Collection Runner.
