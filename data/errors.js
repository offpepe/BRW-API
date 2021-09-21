const err400 = { 
    code: 400,
    message: `Nenhum resultado encontrado`,
   };
  
  const err401 = {
    code: 401,
    message: `Acesso não autorizado.`
}

module.exports = {
    err400,
    err401,
}