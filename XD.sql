create database redeSocial
    default character set utf8
    default collate utf8_general_ci;

use redesocial;

drop table Usuario;

    CREATE TABLE Usuario (
    idUsuario INTEGER NOT NULL AUTO_INCREMENT,
    email_usuario VARCHAR(45) NOT NULL,
    dataNasc_usuario VARCHAR(10) NOT NULL,
    senha_usuario VARCHAR(45) NOT NULL,
    nome_usuario VARCHAR(45) NOT NULL,
    nick_usuario VARCHAR(45) NOT NULL,
    telefone_usuario VARCHAR(17),
    PRIMARY KEY (idUsuario)
);

drop table post;

select * from usuario;

CREATE TABLE post (
    idPost INTEGER NOT NULL AUTO_INCREMENT,
    usuario_idUsuario INTEGER NOT NULL,
    usuarioFoto_idFoto integer not null,
    title_post VARCHAR(20) NOT NULL,
    body_post VARCHAR(250) NOT NULL,
    tags_post VARCHAR(45) NOT NULL,
    foto_post VARCHAR(255),  -- coluna para o link da foto
    PRIMARY KEY (idPost),
    INDEX Cliente_FKIndex1(usuario_idUsuario),
    INDEX Cliente_FKIndex2(usuarioFoto_idFoto)
);
CREATE TABLE imagens (
    idImagens INT AUTO_INCREMENT,
    nome VARCHAR(100),
    foto LONGBLOB,
    PRIMARY KEY (idImagens)
);



drop table foto;

drop table comentarioPost;

create table comentarioPost(
    idComentarioPost integer not null auto_increment,
    usuarioComentario_idUsuario integer not null,
    usuarioFotoComentario_idFoto integer not null,
    title_comentarioPost varchar(20) not null,
    body_comentarioPost varchar(250) not null,
    tags_comentarioPost varchar(45) not null,
    primary key (idComentarioPost),
    index Cliente_FKIndex1(usuarioComentario_idUsuario),
    INDEX Cliente_FKIndex2(usuarioFotoComentario_idFoto)
);


