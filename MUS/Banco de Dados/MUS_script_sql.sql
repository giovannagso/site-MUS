
create database sitemus;

use sitemus;


-- usuario
create table usuario (
idusuario int primary key auto_increment,
nome varchar (45),
email varchar (45),
senha varchar (45),
confirme_senha varchar (45),
fkvoto int,
fkavaliacao int,
foreign key (fkvoto) references vote (idvote),
foreign key (fkavaliacao) references avaliacao (idavaliacao)
);

create table vote (
idvote int primary key auto_increment,
estilo varchar(45),
qtdvoto int
);

create table musicas (
idmusica int primary key auto_increment,
fkusuario int,
foreign key (fkusuario) references usuario (idusuario),
nome_da_musica varchar(45),
comentario varchar(45)

);

create table avaliacao (
idavaliacao int primary key auto_increment,
comentario varchar(100)
);

insert into vote values
(null,"rock",0),
(null,"rap",0),
(null,"pop",0);


