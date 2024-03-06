Bun.serve({
  fetch(req: Request) {
    console.log("Request received", {
      url: req.url,
      method: req.method,
      headers: JSON.stringify(req.headers),
      body: JSON.stringify(req.body),
    });

    return new Response("OK");
  },
});
