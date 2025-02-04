
export function GET(){
  const data = [
    {id:1,name:"hello",},
    {id:2,name:"hai"},
    {id:3,name:"world"}
  ]
  return new Response(JSON.stringify({data:data},{status:200}))
}

export async function POST(req){
  let data = [
    {id:1,name:"hello",},
    {id:2,name:"hai"},
    {id:3,name:"world"}
  ]
  const body = await req.json();
  console.log(body)
  data = [...data,body]
  return new Response(JSON.stringify({data:data}),{status:200})
}

export async function PUT(req){
  let data = [
    {id:1,name:"hello",},
    {id:2,name:"hai"},
    {id:3,name:"world"}
  ]
  let body = await req.json();
  const id =body.id;
  const index = data.findIndex((obj)=>obj.id==id)
  data[index]=body
  return new Response(JSON.stringify({message:data}),{status:200})
}

export async function DELETE(req){
  const data = [
    {id:1,name:"hello",},
    {id:2,name:"hai"},
    {id:3,name:"world"}
  ]
  let body = await req.json();
  body = body.id
  const index = data.findIndex((obj)=>obj.id==body)
  data.splice(index,1)
  return new Response(JSON.stringify({message:data}),{status:200})
}