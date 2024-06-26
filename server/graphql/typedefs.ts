async function getTypeDefs(): Promise<string> {
  // Open schema file for reading
  using schemaFile = await Deno.open('./schema.graphql', { read: true });

  let typeDefs = '';

  // Stream chunks into string
  const decoder = new TextDecoder();

  for await (const chunk of schemaFile.readable) {
    typeDefs += decoder.decode(chunk);
  }

  return typeDefs;
}


export const typeDefs = await getTypeDefs();
