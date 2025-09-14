import express from "express";
import cors from "cors";
import OpenAI from "openai";

const app = express();
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.use(cors());
app.use(express.json());

app.post("/ai-suggest", async (req, res) => {
  const ctx = req.body; // age, interests, etc.
  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a career/study recommendation assistant." },
        { role: "user", content: `Based on this context: ${JSON.stringify(ctx)}, suggest study, career, and interest ideas.` }
      ],
    });
    const text = response.choices[0].message.content;

    // Basic parse (you could structure better with JSON mode)
    res.json({ career: [text], study: [], interests: [] });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "AI request failed" });
  }
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
