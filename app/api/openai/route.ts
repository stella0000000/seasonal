// import { NextRequest, NextResponse } from "next/server";
// import { openai } from "@/lib/openai";
// export async function POST(req: NextRequest, resp: NextResponse) {
//   const { prompt } = await req.json();

//   const stream = await openai.beta.chat.completions.stream({
//     model: "gpt-3.5-turbo",
//     messages: [{ role: "user", content: prompt }],
//     stream: true,
//   });

//   for await (const chunk of stream) {
//     process.stdout.write(chunk.choices[0]?.delta?.content || "");
//   }

//   const chatCompletion = await stream.finalChatCompletion();
//   // console.log(chatCompletion.choices[0].message.content); // {id: "…", choices: […], …}

//   return new Response(chatCompletion as any);
// }

import { NextResponse, NextRequest } from "next/server";
// import { openai } from "@/lib/openai";
import { OpenAIStream, OpenAIStreamPayload } from "@/lib/openai-stream";

export async function POST(req: NextRequest, resp: NextResponse) {
  const { prompt } = await req.json();

  const payload: OpenAIStreamPayload = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
    temperature: 0.8,
    max_tokens: 1024,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stream: true,
  };

  const stream = await OpenAIStream(payload);
  console.log({ stream });
  return new Response(stream);
}

// // export const POST = async (request: NextRequest, response: NextResponse) => {
// //   try {
// //     const { prompt } = await request.json();

// //     const response = await openai.chat.completions.create({
// //       model: "gpt-3.5-turbo",
// //       messages: [
// //         {
// //           role: "user",
// //           content: prompt,
// //         },
// //       ],
// //       temperature: 0.8,
// //       max_tokens: 1024,
// //       top_p: 1,
// //       frequency_penalty: 0,
// //       presence_penalty: 0,
// //     });

// //     const content = response.choices[0].message.content;

// //     return new Response(content as any); // fix type
// //   } catch (error) {
// //     // console.error(error);
// //     return NextResponse.json(
// //       { error: "Internal Server Error" },
// //       { status: 500 }
// //     );
// //   }
// // };
