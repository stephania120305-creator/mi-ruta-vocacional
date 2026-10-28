import express from "express";
import cors from "cors";
import OpenAI from "openai";
import "dotenv/config";

const app = express();
app.use(cors());
app.use(express.json());

const openai = process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

app.get("/", (req, res) => {
  res.send("Servidor de Mi Ruta Vocacional funcionando");
});

// Respaldo si OpenAI no responde
function interpretacionLocal(resultados) {
  const partes = resultados.slice(0, 3).map(
    (r, i) =>
      `${i + 1}. ${r.area}\n   Carreras para explorar: ${(r.carreras || []).join(", ")}.`
  );
  return (
    `Según tus respuestas, tus intereses se inclinan hacia:\n\n${partes.join("\n\n")}\n\n` +
    "Para explorar: habla con profesionales de estas áreas, prueba cursos gratuitos introductorios, " +
    "visita ferias universitarias y empieza un proyecto pequeño para ver qué disfrutas de verdad. " +
    "Recuerda que este test es una orientación inicial, no una decisión definitiva."
  );
}

app.post("/api/interpretar", async (req, res) => {
  const { resultados, respuestas } = req.body;

  if (!Array.isArray(resultados) || resultados.length === 0) {
    return res.status(400).json({ error: "Faltan los resultados del test." });
  }

  try {
    if (!openai) throw new Error("Falta OPENAI_API_KEY en el archivo .env");

    const detalle = Array.isArray(respuestas)
      ? respuestas
          .filter((r) => r.respuesta)
          .map((r) => `- ${r.pregunta} → ${r.respuesta}`)
          .join("\n")
      : "";

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.9,
      max_tokens: 1000,
      messages: [
        {
          role: "system",
          content:
            "Eres un orientador vocacional cálido y claro que ayuda a estudiantes colombianos a explorar sus intereses. " +
            "Responde en español, sin diagnósticos ni decisiones definitivas. " +
            "Personaliza todo con base en las respuestas concretas de la persona; evita frases genéricas y repetitivas.",
        },
        {
          role: "user",
          content:
            `Ranking de áreas (respuestas afines de un total de ${resultados[0].de ?? 30}):\n` +
            `${JSON.stringify(resultados, null, 2)}\n\n` +
            `Respuestas que dio la persona:\n${detalle}\n\n` +
            "Haz lo siguiente:\n" +
            "1. Describe su perfil en 2 o 3 frases, citando rasgos que se notan en sus respuestas.\n" +
            "2. Explica las tres áreas principales y por qué encajan con ella.\n" +
            "3. Sugiere carreras, técnicos u oficios, incluyendo opciones que combinen dos áreas.\n" +
            "4. Da 4 acciones concretas para explorar (cursos, voluntariados, proyectos, entrevistas).\n" +
            "5. Menciona una área menos obvia que valga la pena explorar.",
        },
      ],
    });

    res.json({ interpretacion: completion.choices[0].message.content, origen: "ia" });
  } catch (error) {
    console.error("Error con OpenAI, se usa interpretación local:", error.message);
    res.json({ interpretacion: interpretacionLocal(resultados), origen: "local" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});