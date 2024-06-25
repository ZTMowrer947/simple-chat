FROM denoland/deno:alpine-1.44.4

EXPOSE 8000
ENV NODE_ENV production
ENV DENO_ENV production

USER deno

WORKDIR /app

COPY --chown=deno:deno deno.json deno.lock package.json codegen.ts schema.graphql ./

RUN deno cache codegen.ts
RUN deno task generate

COPY --chown=deno:deno . .

RUN deno cache main.ts

CMD ["run", "--allow-env", "--allow-net", "--allow-read=schema.graphql", "main.ts"]
