CREATE database apilogin;

use apilogin;

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `user_name` varchar(100) DEFAULT NULL,
  `senha` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `atribuicao_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `usuario_FK` (`atribuicao_id`),
  CONSTRAINT `usuario_FK` FOREIGN KEY (`atribuicao_id`) REFERENCES `usuario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
); 


CREATE TABLE `atribuicao` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descricao` varchar(100) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
);


CREATE TABLE `rec_senha` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario_id` int(11) NOT NULL,
  `chave` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `rec_senha_FK` (`usuario_id`),
  CONSTRAINT `rec_senha_FK` FOREIGN KEY (`usuario_id`) REFERENCES `rec_senha` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);