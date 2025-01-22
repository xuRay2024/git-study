import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const client = new OpenAI({
  apiKey: process.env.API_KEY,
  baseURL: "https://www.gptapi.us",
});

const main = async () => {
  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: "给我返回一个模拟的人物信息:firstName 和 lastName, Do not include any  explanations, only provide a RFC8259 compliant JSON  response following this format without deviation",
            },
          ],
        },
      ],
      max_tokens: 300,
    });

    console.log(response.choices[0].message.content);
  } catch (error) {
    console.error("error:", error.message);
  }
};

main();
