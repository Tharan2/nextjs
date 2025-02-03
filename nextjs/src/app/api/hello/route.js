
export function GET(){
  return new Response(JSON.stringify({message:"Get"},{status:200}))
}

export async function POST(req){
  const body = await req.json();
  return new Response(JSON.stringify({message:"Post",data:body.post}),{status:200})
}

export async function PUT(req){
  const body = await req.json();
  return new Response(JSON.stringify({message:"Put",data:body.put}),{status:200})
}
export async function DELETE(req){
  const body = await req.json();
  return new Response(JSON.stringify({message:"Delete",data:body.delete}),{status:200})
}