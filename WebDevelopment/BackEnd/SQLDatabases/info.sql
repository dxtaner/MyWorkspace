-- =========================================
-- info.sql
-- SQL TEMEL BİLGİLER & KOMUTLAR (CHEAT SHEET)
-- =========================================

-- SQL (Structured Query Language)
-- İlişkisel (Relational) veritabanları için kullanılır
-- Veri tablolar halinde saklanır

-- =========================================
-- 1. TABLE OLUŞTURMA (CREATE TABLE)
-- =========================================

CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    department VARCHAR(50),
    salary INT
);

-- =========================================
-- 2. VERİ EKLEME (INSERT INTO)
-- =========================================

INSERT INTO employees (id, name, department, salary)
VALUES (1, 'Taner', 'IT', 30000);

INSERT INTO employees (id, name, department, salary)
VALUES (2, 'Ayşe', 'HR', 22000);

-- =========================================
-- 3. VERİ OKUMA (SELECT)
-- =========================================

-- Tüm kayıtları getir
SELECT * FROM employees;

-- Belirli kolonları getir
SELECT name, salary FROM employees;

-- Şartlı sorgu (WHERE)
SELECT * FROM employees
WHERE salary > 25000;

-- Birden fazla koşul
SELECT * FROM employees
WHERE department = 'IT' AND salary > 25000;

-- =========================================
-- 4. VERİ GÜNCELLEME (UPDATE)
-- =========================================

-- Tek kayıt güncelleme
UPDATE employees
SET salary = 35000
WHERE id = 1;

-- ⚠️ WHERE yoksa tüm tablo güncellenir!

-- =========================================
-- 5. TABLOYA YENİ KOLON EKLEME (ALTER TABLE)
-- =========================================

ALTER TABLE employees
ADD email VARCHAR(100);

-- =========================================
-- 6. VERİ SİLME (DELETE)
-- =========================================

-- Belirli kayıt silme
DELETE FROM employees
WHERE id = 2;

-- ⚠️ TÜM tabloyu siler
-- DELETE FROM employees;

-- =========================================
-- 7. İLİŞKİLER & FOREIGN KEY
-- =========================================

CREATE TABLE departments (
    id INT PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE workers (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES departments(id)
);

-- =========================================
-- 8. INNER JOIN
-- =========================================

SELECT workers.name, departments.name
FROM workers
INNER JOIN departments
ON workers.department_id = departments.id;

-- Sadece eşleşen kayıtları getirir

SELECT name
FROM employees
WHERE salary > 30000;

-- =========================================
-- END OF FILE
-- =========================================
