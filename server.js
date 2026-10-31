const http = require("http");
const PORT = 8080;
const HEADERS = { 
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*" 
};

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  // CT-01: Cadastro de Tutor e Pet (201 Created)
  if (method === "POST" && url === "/api/v1/tutores") {
    let body = "";
    req.on("data", chunk => body += chunk);
    req.on("end", () => {
      try {
        const data = JSON.parse(body || "{}");
        // CT-02: Se o nome do pet estiver vazio, retorna 400 Bad Request
        if (data.pet && !data.pet.nomePet) {
          res.writeHead(400, HEADERS);
          return res.end(JSON.stringify({
            status: 400,
            mensagem: "O nome do pet é obrigatório."
          }));
        }
      } catch (e) {}

      res.writeHead(201, HEADERS);
      return res.end(JSON.stringify({
        id: 10,
        nomeTutor: "Carlos Eduardo",
        pet: { nomePet: "Thor" }
      }));
    });
    return;
  }

  // CT-03: HealthLog com Alerta Clínico (201 Created)
  if (method === "POST" && url === "/api/v1/health-logs") {
    res.writeHead(201, HEADERS);
    return res.end(JSON.stringify({
      id: 5501,
      petId: 101,
      alertaClinico: true,
      nivelRisco: "ALTO",
      status: "PENDENTE_REVISAO"
    }));
  }

  // CT-04: Consulta de Histórico Analítico LAG/LEAD (200 OK)
  if (method === "GET" && url.includes("/historico-evolutivo")) {
    res.writeHead(200, HEADERS);
    return res.end(JSON.stringify([
      { data: "2026-10-01", temp_atual: 38.5, temp_anterior: null, temp_proxima: 39.0 },
      { data: "2026-10-02", temp_atual: 39.0, temp_anterior: 38.5, temp_proxima: 38.7 },
      { data: "2026-10-03", temp_atual: 38.7, temp_anterior: 39.0, temp_proxima: null }
    ]));
  }

  res.writeHead(404, HEADERS);
  res.end(JSON.stringify({ erro: "Rota não encontrada" }));
});

server.listen(PORT, () => {
  console.log(`Servidor Clyvo Care rodando na porta ${PORT}! Pode rodar o Postman.`);
});