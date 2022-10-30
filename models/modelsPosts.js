const getAllPosts = () => {
  return db.query(
    "select * from Posts p inner join Autores a on p.idAutorPertenece = a.idAutor;"
  );
};

const getAllPostsByidAuthor = (idAutorPertenece) => {
  return db.query(
    "select * from Posts p inner join Autores a on p.idAutorPertenece = a.idAutor where a.idAutor = ?;",
    [idAutorPertenece]
  );
};

const getAllPostsByEmailAuthor = (emailAuthor) => {
  return db.query(
    "select * from Posts p inner join Autores a on p.idAutorPertenece = a.idAutor where a.email = ?;",
    [emailAuthor]
  );
};

const createPost = ({
  titulo,
  descripcion,
  fechaCreacion,
  categoria,
  idAutorPertenece,
}) => {
  return db.query(
    "insert into Posts (titulo, descripcion, fechaCreacion, categoria, idAutorPertenece) values (?, ?, ?, ?, ?)",
    [titulo, descripcion, fechaCreacion, categoria, idAutorPertenece]
  );
};

const updatePost = ({
  titulo,
  descripcion,
  fechaCreacion,
  categoria,
  idAutorPertenece,
}) => {
  return db.query(
    "UPDATE Posts SET descripcion= ?, fechaCreacion= ?, categoria= ? where idAutorPertenece =? and titulo =?",
    [descripcion, fechaCreacion, categoria, idAutorPertenece, titulo]
  );
};

const deletePost = ({ titulo, idAutorPertenece }) => {
  return db.query("DELETE from Posts where idAutorPertenece =? and titulo =?", [
    idAutorPertenece,
    titulo,
  ]);
};

module.exports = {
  getAllPosts,
  getAllPostsByidAuthor,
  getAllPostsByEmailAuthor,
  createPost,
  updatePost,
  deletePost,
};
