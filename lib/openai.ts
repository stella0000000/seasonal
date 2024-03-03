import openai from "openai";

export const openaiInstance = new openai({
  apiKey: process.env["NEXT_PUBLIC_OPENAI_API_KEY"], // This is the default and can be omitted
});

export { openaiInstance as openai };
