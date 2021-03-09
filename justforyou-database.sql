CREATE DATABASE justforyou;
USE justforyou;
DROP DATABASE justforyou;
CREATE TABLE clients (
id INT PRIMARY KEY AUTO_INCREMENT,
clientname VARCHAR(50) NOT NULL,
clientphone VARCHAR(12) NOT NULL,
clientmail VARCHAR(50) NOT NULL,
clientpassword VARCHAR(20) NOT NULL
);

INSERT INTO clients 
(clientname, clientphone, clientmail, clientpassword)
VALUES
('Валерия Долматова', '+79644316799', 'valery.pisannyh@gmail.com', 'qazwsxedc'),
('Марина Титова', '+79088888888', 'm.titova@mail.ru', '12345678!'),
('Елена Мозговая', '+79245275992', 'e.mozgovaya@gmail.com', 'qaz123wsx456');



CREATE TABLE procedurs (
id INT PRIMARY KEY AUTO_INCREMENT,
procedurname VARCHAR(150) NOT NULL,
procedurprice INT
);

INSERT INTO procedurs 
(procedurname, procedurprice)
VALUES
('Подмышки', 800),
('Бикини глубокое', 1550),
('Бикини классическое', 800),
('Ноги полностью', 2300),
('Голени + колени', 1650),
('Руки до локтя', 1000),
('Руки полностью', 1500),
('Ареолы', 550),
('Белая линия живота', 650),
('Лицо/1 зона', 450),
('Карбоновый пилинг', 1500),
('Липолитики: лицо', 1500),
('Липолитики: живот', 2000),
('Липолитики: бёдра', 2500),
('Удаление тату', 500),
('Консультация с мастером', 0),
('Комплекс: Подмышки + глубокое бикини', 0),
('Комплекс: Подмышки + классическое бикини', 0),
('Комплекс: Подмышки + классическое бикини + ноги полностью', 0),
('Комплекс: Голени + глубокое бикини + подмышки', 0),
('Комплекс: Верхняя губа + подмышки + белая линия живота + глубокое бикини + голени с коленями', 0),
('Всё тело: Верхняя губа + подмышки + белая линия живота + глубокое бикини + ноги полностью', 0);

CREATE TABLE records (
id INT PRIMARY KEY AUTO_INCREMENT,
client_id INT,
recordday DATE NOT NULL,
recordtime TIME NOT NULL,
procedur_id INT
);
drop table records;

INSERT INTO records
(client_id, recordday, recordtime, procedur_id)
VALUES
(1,'2021-03-15', '10:00', 2),
(2,'2021-03-15', '11:00', 4),
(3, '2021-03-16', '12:00', 6);

SELECT * FROM clients;
SELECT * FROM procedurs;
SELECT * FROM records;

SELECT clients.clientname, records.recordday, records.recordtime, procedurs.procedurname
FROM clients
INNER JOIN records
ON clients.id = records.client_id
LEFT JOIN procedurs
ON procedurs.id = records.procedur_id











