drop database nueveCristinaGalan;
CREATE SCHEMA nueveCristinaGalan DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ;
use nueveCristinaGalan;
create table Autores (
idAutor int unsigned not null unique auto_increment,
nombre varchar(100) not null,
email varchar(150) not null unique,
imagen varchar(250),
primary key (idAutor)
)ENGINE = InnoDB DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ;

create table Posts (
idPost int unsigned not null unique auto_increment,
titulo varchar(100) not null, 
descripcion text(500) not null,
fechaCreacion datetime,
categoria varchar(200) not null, 
idAutorPertenece int unsigned not null,
PRIMARY KEY (idPost),
FOREIGN KEY (idAutorPertenece) REFERENCES Autores(idAutor)
ON UPDATE CASCADE
ON DELETE RESTRICT
)ENGINE = InnoDB DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ;

insert into Autores ( nombre,email, imagen) values
('Rocio', 'ro@gmail.com','localhost:3000/public/images/ro@gmail'),
('Pedro', 'pd@gmail.com','localhost:3000/public/images/pd@gmail');

insert into Posts (titulo, descripcion, fechaCreacion, categoria, idAutorPertenece) values
( 'comiendo sano', 'come sano cada mañana', now(), 'alimentacion', 1),
('comida vegana', 'recetas veganas sencillas', now(), 'alimentacion', 2),
('en forma sin limite', 'ponerse en forma a diario', now(), 'fitness',2),
('los caminos del cancer', 'cuidarse para evitar el cancer', now(), 'salud', 1);


select * from Posts p inner join Autores a on p.idAutorPertenece = a.idAutor;



