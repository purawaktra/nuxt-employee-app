import {getMSSQLPrismaClient} from "~/server/utils/db";

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  console.log(body)

  if (!body.email) {
    throw createError({
      statusCode: 400,
      statusMessage: "email is not provided"
    })
  }

  if (!body.password) {
    throw createError({
      statusCode: 400,
      statusMessage: "password is not provided"
    })
  }

  const email = body.email
  const password = body.password
  let result

  try{
    const connection = await getMSSQLPrismaClient();
    result = await connection.user.create({
      data:{
        email: email,
        password: password
      }
    })
  } catch (e){
    throw createError({
      statusCode: 404,
      statusMessage: "credential given is not valid"
    })
  }

})