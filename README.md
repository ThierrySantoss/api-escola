# 🚀 API Escola - Prisma + Node.js

API para gestão escolar com Prisma ORM, Node.js e Express.

## 📋 Pré-requisitos
- Node.js 18+
- npm ou yarn
- Banco de dados configurado (PostgreSQL/MySQL/SQLite)

## 🛠️ Configuração

1. **Clone o repositório**
   ```bash
   git clone https://github.com/ThierrySantoss/api-escola.git
   cd api-escola
   
# Instale as dependências  
    npm install

# Configure o ambiente
Crie um arquivo .env na raiz do projeto:

-Exemplo
DATABASE_URL="sua_url_de_conexao"
-Exemplo para SQLite:
DATABASE_URL="file:./dev.db"

# Prepare o Prisma

    npx prisma generate  # Gera o cliente do Prisma
    npx prisma migrate dev  # Executa migrações e cria o banco

# Inicie o servidor
    npm run dev
- A API estará disponível em: http://localhost:3000

## 📚 Rotas da API

### 🔵 **Títulos Acadêmicos**
- `POST    /titulo`       - Cria novo título  
- `GET     /titulo`       - Lista todos  
- `GET     /titulo/:id`   - Busca por ID  
- `PUT     /titulo/:id`   - Atualiza  
- `DELETE  /titulo/:id`   - Remove  

### 🟢 **Professores**
- `POST    /professor`       - Cadastra professor  
- `GET     /professor`       - Lista todos  
- `GET     /professor/:id`   - Busca por ID  
- `PUT     /professor/:id`   - Atualiza  
- `DELETE  /professor/:id`   - Remove  

### 🟣 **Instituições**
- `POST    /instituicao`       - Cria instituição  
- `GET     /instituicao`       - Lista todas  
- `GET     /instituicao/:id`   - Busca por ID  
- `PUT     /instituicao/:id`   - Atualiza  
- `DELETE  /instituicao/:id`   - Remove  

### 🟠 **Cursos**
- `POST    /curso`       - Cria curso  
- `GET     /curso`       - Lista todos  
- `GET     /curso/:id`   - Busca por ID  
- `PUT     /curso/:id`   - Atualiza  
- `DELETE  /curso/:id`   - Remove  

### 🔴 **Disciplinas**
- `POST    /disciplina`       - Cria disciplina  
- `GET     /disciplina`       - Lista todas  
- `GET     /disciplina/:id`   - Busca por ID  
- `PUT     /disciplina/:id`   - Atualiza  
- `DELETE  /disciplina/:id`   - Remove  

### 🟡 **Alunos**
- `POST    /aluno`       - Matricula aluno  
- `GET     /aluno`       - Lista todos  
- `GET     /aluno/:id`   - Busca por ID  
- `PUT     /aluno/:id`   - Atualiza  
- `DELETE  /aluno/:id`   - Remove  

### 🔶 **Matrículas (Cursa)**
- `POST    /cursa`       - Cria matrícula  
- `GET     /cursa`       - Lista todas  
- `GET     /cursa/:id`   - Busca por ID  
- `PUT     /cursa/:id`   - Atualiza  
- `DELETE  /cursa/:id`   - Remove matrícula  

### 🔷 **Professor-Disciplina (Leciona)**
- `POST    /leciona`       - Associa professor  
- `GET     /leciona`       - Lista associações  
- `GET     /leciona/:id`   - Busca por ID  
- `PUT     /leciona/:id`   - Atualiza  
- `DELETE  /leciona/:id`   - Remove associação 

## 🗄️ **Estrutura do Banco de Dados**

### 📂 **Arquivos Principais**
- **Modelos de dados**:  
  `prisma/schema.prisma`  
  *(Define todas as tabelas e relacionamentos)*

- **Migrações**:  
  `prisma/migrations/`  
  *(Contém scripts SQL de evolução do banco)*

### ✨ Como visualizar?
    npx prisma studio
