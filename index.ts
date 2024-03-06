Bun.serve({
  async fetch(req: Request) {
    console.log("Request received", {
      url: req.url,
      method: req.method,
      headers: JSON.stringify(req.headers),
      body: await req.text(),
    });

    return new Response("OK");
  },
});
