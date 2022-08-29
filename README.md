# studyBlog
Blog desenvolvido para adicionar meus resumos de estudos.

## Rotas
 - `/` Retorna uma explicação do site, o porque da criação `GET: RESP { text }`
 - `/forgotpassword` envia um email para o usuario redefinir a senha `POST: { email } - RESP { message }`
 - `/resetpassword` altera a senha esquecida `POST: { email, senha, tokenDoEmail } - RESP { token }`
 - `/posts/{numberPage}` retorna 10 posts por paginacao `GET: RESP [{ titulo, autor, data, tag }]` 
 - `/posts/{nome-do-post}` retorna o post especifico `GET: RESP {titulo, texto, autor, data, tag}`
 - `/posts/create` cria um novo post `POST: { token, titulo, texto, tagId(o) } - RESP { message }`
 - `/users/signin` login do usuario `POST: { email && senha } - RESP { token }`
 - `/users/signup` cadastro do usuario `POST: { username, email, senha } - RESP { token }`
 - `/users/{numberPage}` retorna 10 usuarios por paginacao `GET: RESP [{ username, data, qtyPosts }]`
 - `/users/{username}` retorna o perfil do usuario `GET: RESP { username, datacadastro, posts: [{ titulo, data, tag }] }`
 - `/users/{username}/posts` retorna todos os posts do usuario especifico `GET: RESP [{ titulo, texto, data, tag }]`
 - `/tags/{numberPage}` retorna 10 tags por paginacao `GET: RESP [{ tag, qtyPosts }]`
 - `/tags/{tag}/posts/{numberPage}` retorna 10 tags por paginacao daquela tag especifica `GET: RESP [{ titulo, data, autor, tag }]`

 #### `o: Opcional`
 