-- CreateEnum
CREATE TYPE "Sexo" AS ENUM ('M', 'F');

-- CreateEnum
CREATE TYPE "EstadoCivil" AS ENUM ('C', 'S', 'D');

-- CreateTable
CREATE TABLE "Titulo" (
    "id_titulo" SERIAL NOT NULL,
    "tx_descricao" VARCHAR(150) NOT NULL,

    CONSTRAINT "Titulo_pkey" PRIMARY KEY ("id_titulo")
);

-- CreateTable
CREATE TABLE "Professor" (
    "id_professor" SERIAL NOT NULL,
    "id_titulo" INTEGER NOT NULL,
    "tx_nome" VARCHAR(50) NOT NULL,
    "tx_sexo" "Sexo" NOT NULL DEFAULT 'M',
    "tx_estado_civil" "EstadoCivil" NOT NULL DEFAULT 'S',
    "dt_nascimento" DATE NOT NULL,
    "tx_telefone" VARCHAR(13) NOT NULL,

    CONSTRAINT "Professor_pkey" PRIMARY KEY ("id_professor")
);

-- CreateTable
CREATE TABLE "Instituicao" (
    "id_instituicao" SERIAL NOT NULL,
    "tx_sigla" VARCHAR(15) NOT NULL,
    "tx_descricao" VARCHAR(150) NOT NULL,

    CONSTRAINT "Instituicao_pkey" PRIMARY KEY ("id_instituicao")
);

-- CreateTable
CREATE TABLE "TipoCurso" (
    "id_tipo_curso" SERIAL NOT NULL,
    "tx_descricao" VARCHAR(150) NOT NULL,

    CONSTRAINT "TipoCurso_pkey" PRIMARY KEY ("id_tipo_curso")
);

-- CreateTable
CREATE TABLE "Curso" (
    "id_curso" SERIAL NOT NULL,
    "id_instituicao" INTEGER NOT NULL,
    "id_tipo_curso" INTEGER NOT NULL,
    "tx_descricao" VARCHAR(150) NOT NULL,

    CONSTRAINT "Curso_pkey" PRIMARY KEY ("id_curso")
);

-- CreateTable
CREATE TABLE "TipoDisciplina" (
    "id_tipo_disciplina" SERIAL NOT NULL,
    "tx_descricao" VARCHAR(150) NOT NULL,

    CONSTRAINT "TipoDisciplina_pkey" PRIMARY KEY ("id_tipo_disciplina")
);

-- CreateTable
CREATE TABLE "Disciplina" (
    "id_disciplina" SERIAL NOT NULL,
    "id_curso" INTEGER NOT NULL,
    "id_tipo_disciplina" INTEGER NOT NULL,
    "tx_sigla" VARCHAR(10) NOT NULL,
    "tx_descricao" VARCHAR(150) NOT NULL,
    "in_periodo" INTEGER NOT NULL,
    "in_carga_horaria" INTEGER NOT NULL,

    CONSTRAINT "Disciplina_pkey" PRIMARY KEY ("id_disciplina")
);

-- CreateTable
CREATE TABLE "Leciona" (
    "id_leciona" SERIAL NOT NULL,
    "id_professor" INTEGER NOT NULL,
    "id_disciplina" INTEGER NOT NULL,

    CONSTRAINT "Leciona_pkey" PRIMARY KEY ("id_leciona")
);

-- CreateTable
CREATE TABLE "Aluno" (
    "id_aluno" SERIAL NOT NULL,
    "tx_nome" VARCHAR(100) NOT NULL,
    "tx_sexo" "Sexo" NOT NULL,
    "dt_nascimento" DATE NOT NULL,

    CONSTRAINT "Aluno_pkey" PRIMARY KEY ("id_aluno")
);

-- CreateTable
CREATE TABLE "Cursa" (
    "id_cursa" SERIAL NOT NULL,
    "id_aluno" INTEGER NOT NULL,
    "id_disciplina" INTEGER NOT NULL,
    "in_ano" INTEGER NOT NULL,
    "in_semestre" INTEGER NOT NULL,
    "in_faltas" INTEGER NOT NULL DEFAULT 0,
    "nm_nota1" DECIMAL(4,2) NOT NULL,
    "nm_nota2" DECIMAL(4,2) NOT NULL,
    "nm_nota3" DECIMAL(4,2) NOT NULL,
    "bl_aprovado" BOOLEAN NOT NULL,

    CONSTRAINT "Cursa_pkey" PRIMARY KEY ("id_cursa")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cursa_id_aluno_id_disciplina_in_ano_in_semestre_key" ON "Cursa"("id_aluno", "id_disciplina", "in_ano", "in_semestre");

-- AddForeignKey
ALTER TABLE "Professor" ADD CONSTRAINT "Professor_id_titulo_fkey" FOREIGN KEY ("id_titulo") REFERENCES "Titulo"("id_titulo") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Curso" ADD CONSTRAINT "Curso_id_instituicao_fkey" FOREIGN KEY ("id_instituicao") REFERENCES "Instituicao"("id_instituicao") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Curso" ADD CONSTRAINT "Curso_id_tipo_curso_fkey" FOREIGN KEY ("id_tipo_curso") REFERENCES "TipoCurso"("id_tipo_curso") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Disciplina" ADD CONSTRAINT "Disciplina_id_tipo_disciplina_fkey" FOREIGN KEY ("id_tipo_disciplina") REFERENCES "TipoDisciplina"("id_tipo_disciplina") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Disciplina" ADD CONSTRAINT "Disciplina_id_curso_fkey" FOREIGN KEY ("id_curso") REFERENCES "Curso"("id_curso") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Leciona" ADD CONSTRAINT "Leciona_id_professor_fkey" FOREIGN KEY ("id_professor") REFERENCES "Professor"("id_professor") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Leciona" ADD CONSTRAINT "Leciona_id_disciplina_fkey" FOREIGN KEY ("id_disciplina") REFERENCES "Disciplina"("id_disciplina") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cursa" ADD CONSTRAINT "Cursa_id_aluno_fkey" FOREIGN KEY ("id_aluno") REFERENCES "Aluno"("id_aluno") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cursa" ADD CONSTRAINT "Cursa_id_disciplina_fkey" FOREIGN KEY ("id_disciplina") REFERENCES "Disciplina"("id_disciplina") ON DELETE CASCADE ON UPDATE CASCADE;
