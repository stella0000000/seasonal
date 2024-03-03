export const producePrompt = (produce: string) => {
  return `Tell me exactly 3 interesting sentences about ${produce} in paragraph format. Tell me how many calories are in ${produce} in exactly 1 sentence. Give me exactly 2 sentences describing its nutritional value. Give me exactly 1 thing I can make with ${produce}. Finally, write PS: and give me 1 kid friendly, and funny ${produce} pun, and add Haha! at the end.`;
};
