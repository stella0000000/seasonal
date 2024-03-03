import openai from "openai";

export const openaiInstance = new openai({
  apiKey: process.env["OPENAI_API_KEY"], // This is the default and can be omitted
});

export { openaiInstance as openai };
