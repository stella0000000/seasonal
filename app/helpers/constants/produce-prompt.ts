export const producePrompt = (produce: string) => {
  return `Tell me exactly 3 interesting sentences about ${produce} in paragraph format. Tell me how many calories are in ${produce} in exactly 1 sentence. Give me exactly 2 sentences describing its nutritional value. Give me exactly 1 thing I can make with ${produce}. Finally, in a new paragraph, write PS: and give me 1 professional, kid-friendly, and funny ${produce} pun.`;
};
