import {getMSSQLPrismaClient} from "~/server/utils/db";
import jwt from 'jsonwebtoken';
import {toJS} from "yaml/util";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const body = await readBody(event)
  const email = body.email
  const password = body.password

  if (!email) {
    throw createError({
      statusCode: 400,
      statusMessage: "email is not provided"
    })
  }

  if (!password) {
    throw createError({
      statusCode: 400,
      statusMessage: "password is not provided"
    })
  }

  let result
  try{
    const connection = await getMSSQLPrismaClient();
    result = await connection.user.findUniqueOrThrow({
      select: {
        id: true,
        email: true,
        password: true,
        is_active: true
      },
      where: {
        email: email,
        password: password,
      }
    })
  } catch (e){
    throw createError({
      statusCode: 404,
      statusMessage: "credential given is not valid"
    })
  }

  if(!result.is_active){
    throw createError({
      statusCode: 404,
      statusMessage: "account is not activated"
    })
  }

  // create JWT token
  const token = jwt.sign(
    {
      employee_id: result.id,
      email: result.email,
    },
    config.jwtSecret,
    {
      expiresIn: "30m",
    },
  );

  setResponseHeaders(event, { "Access-Control-Allow-Credentials": "true", "Set-Cookie": `user_token=${token}; path=/; HttpOnly;`, });
  return "login success"
})