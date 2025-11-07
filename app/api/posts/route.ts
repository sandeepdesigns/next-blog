let posts: { id: number; title: string; content: string; image?: string }[] = [];

export async function GET() {
  return Response.json(posts);
}

export async function POST(req: Request) {
  const { title, content, image } = await req.json();
  const newPost = { id: Date.now(), title, content, image };
  posts.push(newPost);
  return Response.json({ success: true, post: newPost });
}
