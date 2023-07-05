-- Excluindo o database caso ele já exista e criando-o logo em seguida

DROP DATABASE IF EXISTS newpacedb;
CREATE DATABASE newpacedb;

-- Usando o banco trybecashdb
USE newpacedb;

-- Excluindo as tabelas se as mesmas existirem
DROP TABLE IF EXISTS plans;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS address_users;

-- Criando a tabela plans
CREATE TABLE IF NOT EXISTS plans (
	id INTEGER NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    PRIMARY KEY (id)
);

-- Criando a tabela users
CREATE TABLE IF NOT EXISTS users (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    born_date DATE NOT NULL,
    sex VARCHAR(45) NOT NULL,
    cpf VARCHAR(20) NOT NULL,
    status VARCHAR(20) NOT NULL,
    plan_id INT NOT NULL,
    FOREIGN KEY (plan_id) REFERENCES plans(id),
    PRIMARY KEY (id)
);

-- Criando a tabela address_users
CREATE TABLE IF NOT EXISTS address_users (
	id INT NOT NULL AUTO_INCREMENT,
    address VARCHAR(100) NOT NULL,
    complement VARCHAR(45) NOT NULL,
    district VARCHAR(45) NOT NULL,
    city VARCHAR(45) NOT NULL,
    state VARCHAR(45) NOT NULL,
    cep VARCHAR(20) NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
      ON DELETE CASCADE
      ON UPDATE CASCADE,
    PRIMARY KEY (id)
);

-- Pré populando a tabela plans
INSERT INTO plans (name) VALUES 
	('Online 01 Mensal'),
  ('Online 01 Trimestral'),
  ('Online 01 Semestral'), 
  ('Online 01 Anual');

-- Pré populando a tabela users
INSERT INTO users (name, email, phone, born_date, sex, cpf, status, plan_id) VALUES 
	('Lucas Langsch', 'lucas.langsch@gmail.com', 47984771281, '1993-09-29', 'masculino', '06480968905', 'ativo', 1);

-- Pré populando a address_users
INSERT INTO address_users (address, complement, district, city, state, cep, user_id) VALUES 
	('rua tal', 'bloco tal', 'bairro tal', 'florianópolis', 'santa catarina', 88036605, 1);