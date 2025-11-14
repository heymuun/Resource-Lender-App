import prisma from "../prisma/client.js";

export async function signup(req, res){
  const {name, email, password} = req.body;
  
  const findUser = await prisma.user.findUnique({
    where : {
      email
    }
  });

  if(findUser){
    return res.status(400).json({message: "Email taken"})
  }

  const newUser = await prisma.user.create({
    data:{name, email, password}
  });

  return res.status(201).json({data: newUser, message: "User created"})

}

export async function login(req, res){
}
