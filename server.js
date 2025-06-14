import express from "express";
import { PrismaClient } from "./generated/prisma/index.js";
import cors from "cors";
import { z } from "zod";

const prisma = new PrismaClient();
const PORT = 3000;
const app = express();

app.use(express.json());
app.use(cors());

//-----------------------------------------------------------------------------------------------------
// Titulos
//-----------------------------------------------------------------------------------------------------

// Criar Titulo
app.post("/titulo", async (req, res) => {
  const { tx_descricao } = req.body;

  try {
    const novoTitulo = await prisma.titulo.create({
      data: { tx_descricao },
    });
    res.status(201).json(novoTitulo);
  } catch (error) {
    res.status(400).json({ error: "Erro ao criar titulo" });
  }
});

// Listar Todos os Titulo
app.get("/titulo", async (req, res) => {
  try {
    const titulos = await prisma.titulo.findMany();
    res.status(200).json(titulos);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar títulos" });
  }
});

// Retorna o Titulo do ID passado
app.get("/titulo/:id", async (req, res) => {
  const id = Number(req.params.id);
  console.log(id);

  try {
    const titulo = await prisma.titulo.findUnique({
      where: { id_titulo: id },
    });

    if (!titulo) {
      return res.status(404).json({ error: "Título não encontrado" });
    }

    res.status(200).json(titulo);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar título" });
  }
});

// Atualizar um Titulo existente
app.put("/titulo/:id", async (req, res) => {
  const id = req.params.id;
  const { tx_descricao } = req.body;

  try {
    const tituloAtualizado = await prisma.titulo.update({
      where: { id_titulo: Number(id) },
      data: { tx_descricao },
    });
    res.status(200).json(tituloAtualizado);
  } catch (error) {
    res.status(400).json({ error: "Erro ao atualizar título" });
  }
});

//Deletar um Titulo
app.delete("/titulo/:id", async (req, res) => {
  const id = req.params.id;

  try {
    await prisma.titulo.delete({
      where: { id_titulo: Number(id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: "Erro ao deletar titulo" });
  }
});

//-----------------------------------------------------------------------------------------------------
// Professor
//-----------------------------------------------------------------------------------------------------

//Validação Professor com Zod
const professorSchema = z.object({
  id_titulo: z.number({ required_error: "Campo Id Titulo não foi preenchido" }),
  tx_nome: z
    .string({ required_error: "Campo Nome Professor não foi preenchido" })
    .trim()
    .min(1, "Nome é Obrigatorio!"),
  tx_sexo: z.enum(["M", "F"], { required_error: "Campo Sexo é obrigatório" }),
  tx_estado_civil: z.enum(["C", "S", "D"], {
    required_error: "Campo Estado Civil é obrigatório",
  }),
  dt_nascimento: z
    .string({ required_error: "Campo Data de Nascimento não foi preenchido" })
    .regex(/^\d{4}[-/]\d{2}[-/]\d{2}$/, {
      message: "Data de nascimento inválida, use yyyy-mm-dd",
    })
    .refine((val) => !isNaN(Date.parse(val)), {
      message: "Data de nascimento inválida use yyyy-mm-dd",
    }),
  tx_telefone: z
    .string({ required_error: "Campo Telefone não foi preenchido" })
    .min(11, "Telefone deve ter pelo menos 11 dígitos"),
});

// Criar Professor
app.post("/professor", async (req, res) => {
  try {
    const dadosValidados = professorSchema.parse(req.body);

    const dataParaSalvar = {
      ...dadosValidados,
      dt_nascimento: new Date(dadosValidados.dt_nascimento),
    };

    const novoProfessor = await prisma.professor.create({
      data: dataParaSalvar,
    });

    res
      .status(201)
      .json({ message: "Professor criado com sucesso", data: novoProfessor });
  } catch (error) {
    if (error.name === "ZodError") {
      res.status(422).json({
        mensagem: "Erro de validação",
        erros: error.errors,
      });
    } else {
      console.error(error);
      res.status(500).json({ mensagem: "Error interno ao criar professor" });
    }
  }
});

// Listar Todos os Professores
app.get("/professor", async (req, res) => {
  try {
    const professores = await prisma.professor.findMany();
    res.status(200).json(professores);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar professores" });
  }
});

// Retorna o Professor do ID passado
app.get("/professor/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const professor = await prisma.professor.findUnique({
      where: { id_professor: Number(id) },
    });

    if (!professor) {
      return res.status(404).json({ error: "Professor não encontrado" });
    }

    res.status(200).json(professor);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar Professor" });
  }
});

// Atualizar um Professor existente
app.put("/professor/:id", async (req, res) => {
  const id = Number(req.params.id);
  const updateProfessorSchema = professorSchema.partial();

  try {
    const dadosValidados = updateProfessorSchema.parse(req.body);

    if (dadosValidados.dt_nascimento) {
      dadosValidados.dt_nascimento = new Date(dadosValidados.dt_nascimento);
    }

    const professorAtualizado = await prisma.professor.update({
      where: { id_professor: id },
      data: dadosValidados,
    });
    res.json({
      message: "Professor atualizado com sucesso",
      data: professorAtualizado,
    });
  } catch (error) {
    if (error.name === "ZodError") {
      return res
        .status(422)
        .json({ mensagem: "Erro de validação", erros: error.errors });
    }
    if (error.code === "P2025") {
      return res.status(404).json({ mensagem: "Professor não encontrado" });
    }
    console.error(error);
    res.status(500).json({ mensagem: "Erro interno ao atualizar professor" });
  }
});

//Deletar um Professor
app.delete("/professor/:id", async (req, res) => {
  const id = Number(req.params.id);

  try {
    await prisma.professor.delete({
      where: { id_professor: id },
    });
    res.status(204).send();
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Professor não encontrado" });
    }
    res.status(500).json({ error: "Erro interno ao deletar professor" });
  }
});

//-----------------------------------------------------------------------------------------------------
// Instituição
//-----------------------------------------------------------------------------------------------------

//Validação Instituição com Zod
const instituicaoSchema = z.object({
  tx_descricao: z
    .string({ required_error: "Campo Descrição não foi preenchido" })
    .trim()
    .min(1, "Descrição é Obrigatorio"),
  tx_sigla: z
    .string({ required_error: "Campo Sigla não foi preenchido" })
    .trim()
    .min(1, "Sigla é Obrigatorio"),
});

// Criar Instituição
app.post("/instituicao", async (req, res) => {
  try {
    const dadosValidados = instituicaoSchema.parse(req.body);

    const novaInstituicao = await prisma.instituicao.create({
      data: dadosValidados,
    });

    res.status(201).json({
      message: "Instituição criado com sucesso",
      data: novaInstituicao,
    });
  } catch (error) {
    if (error.name === "ZodError") {
      res.status(422).json({
        mensagem: "Erro de validação",
        erros: error.errors,
      });
    } else {
      console.error(error);
      res.status(500).json({ mensagem: "Error interno ao criar Instituição" });
    }
  }
});

// Listar Todas as Instituiçoes
app.get("/instituicao", async (req, res) => {
  try {
    const instituicoes = await prisma.instituicao.findMany();
    res.status(200).json(instituicoes);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar Instituições" });
  }
});

// Retorna a Instituição do ID passado
app.get("/instituicao/:id", async (req, res) => {
  const id = Number(req.params.id);

  try {
    const instituicao = await prisma.instituicao.findUnique({
      where: { id_instituicao: id },
    });

    if (!instituicao) {
      return res.status(404).json({ error: "Instituição não encontrado" });
    }

    res.status(200).json(instituicao);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar Instituição" });
  }
});

// Atualizar uma Instituição existente
app.put("/instituicao/:id", async (req, res) => {
  const id = Number(req.params.id);
  const updateInstituicaoSchema = instituicaoSchema.partial();

  try {
    const dadosValidados = updateInstituicaoSchema.parse(req.body);

    const instituicaoAtualizado = await prisma.instituicao.update({
      where: { id_instituicao: id },
      data: dadosValidados,
    });
    res.json({
      message: "Instituição atualizado com sucesso",
      data: instituicaoAtualizado,
    });
  } catch (error) {
    if (error.name === "ZodError") {
      return res
        .status(422)
        .json({ mensagem: "Erro de validação", erros: error.errors });
    }
    if (error.code === "P2025") {
      return res.status(404).json({ mensagem: "Instituição não encontrado" });
    }
    console.error(error);
    res.status(500).json({ mensagem: "Erro interno ao atualizar instituição" });
  }
});

//Deletar uma Instituição
app.delete("/instituicao/:id", async (req, res) => {
  const id = Number(req.params.id);

  try {
    await prisma.instituicao.delete({
      where: { id_instituicao: id },
    });
    res.status(204).send();
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Instituição não encontrado" });
    }
    res.status(500).json({ error: "Erro interno ao deletar Instituição" });
  }
});

//-----------------------------------------------------------------------------------------------------
// Tipo de Curso
//-----------------------------------------------------------------------------------------------------

//Validação Instituição com Zod
const tipoCursoSchema = z.object({
  tx_descricao: z
    .string({ required_error: "Campo Descrição não foi preenchido" })
    .trim()
    .min(1, "Descrição é Obrigatorio"),
});

// Criar Tipo de Curso
app.post("/tipo-curso", async (req, res) => {
  try {
    const dadosValidados = tipoCursoSchema.parse(req.body);

    const novoTipoCurso = await prisma.tipoCurso.create({
      data: dadosValidados,
    });

    res.status(201).json({
      message: "Tipo de Curso criado com sucesso",
      data: novoTipoCurso,
    });
  } catch (error) {
    if (error.name === "ZodError") {
      res.status(422).json({
        mensagem: "Erro de validação",
        erros: error.errors,
      });
    } else {
      console.error(error);
      res
        .status(500)
        .json({ mensagem: "Error interno ao criar Tipo de Curso" });
    }
  }
});

// Listar Todos os Tipo de Cursos
app.get("/tipo-curso", async (req, res) => {
  try {
    const tipoCurso = await prisma.tipoCurso.findMany();
    res.status(200).json(tipoCurso);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar Tipo de Curso" });
  }
});

// Retorna o Tipo de Curso do ID passado
app.get("/tipo-curso/:id", async (req, res) => {
  const id = Number(req.params.id);

  try {
    const tipoCurso = await prisma.tipoCurso.findUnique({
      where: { id_tipo_curso: id },
    });

    if (!tipoCurso) {
      return res.status(404).json({ error: "Tipo de Curso não encontrado" });
    }

    res.status(200).json(tipoCurso);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar Tipo de Curso" });
  }
});

// Atualizar um Tipo de Curso existente
app.put("/tipo-curso/:id", async (req, res) => {
  const id = Number(req.params.id);
  const updatetipoCursoSchema = tipoCursoSchema.partial();

  try {
    const dadosValidados = updatetipoCursoSchema.parse(req.body);

    const tipoCursoAtualizado = await prisma.tipoCurso.update({
      where: { id_tipo_curso: id },
      data: dadosValidados,
    });
    res.json({
      message: "Tipo de Curso atualizado com sucesso",
      data: tipoCursoAtualizado,
    });
  } catch (error) {
    if (error.name === "ZodError") {
      return res
        .status(422)
        .json({ mensagem: "Erro de validação", erros: error.errors });
    }
    if (error.code === "P2025") {
      return res.status(404).json({ mensagem: "Tipo de Curso não encontrado" });
    }
    console.error(error);
    res
      .status(500)
      .json({ mensagem: "Erro interno ao atualizar Tipo de Curso" });
  }
});

//Deletar um Tipo de Curso
app.delete("/tipo-curso/:id", async (req, res) => {
  const id = Number(req.params.id);

  try {
    await prisma.tipoCurso.delete({
      where: { id_tipo_curso: id },
    });
    res.status(204).send();
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Tipo de Curso não encontrado" });
    }
    res.status(500).json({ error: "Erro interno ao deletar Tipo de Curso" });
  }
});

//-----------------------------------------------------------------------------------------------------
// Curso
//-----------------------------------------------------------------------------------------------------

//Validação Instituição com Zod
const CursoSchema = z.object({
  id_instituicao: z.number({
    required_error: "Campo Id da Instituição não foi preenchido",
  }),
  id_tipo_curso: z.number({
    required_error: "Campo Id Tipo de Curso não foi preeenchido",
  }),
  tx_descricao: z
    .string({ required_error: "Campo Descrição não foi preenchido" })
    .trim()
    .min(1, "Descrição é Obrigatorio"),
});

// Criar Curso
app.post("/curso", async (req, res) => {
  try {
    const dadosValidados = CursoSchema.parse(req.body);

    const novoCurso = await prisma.curso.create({ data: dadosValidados });

    res
      .status(201)
      .json({ message: "Curso criado com sucesso", data: novoCurso });
  } catch (error) {
    if (error.name === "ZodError") {
      res.status(422).json({
        mensagem: "Erro de validação",
        erros: error.errors,
      });
    } else {
      console.error(error);
      res.status(500).json({ mensagem: "Error interno ao Curso" });
    }
  }
});

// Listar Todos os Cursos
app.get("/curso", async (req, res) => {
  try {
    const curso = await prisma.curso.findMany();
    res.status(200).json(curso);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar Tipo de Curso" });
  }
});

// Retorna o Curso do ID passado
app.get("/curso/:id", async (req, res) => {
  const id = Number(req.params.id);

  try {
    const curso = await prisma.curso.findUnique({
      where: { id_curso: id },
    });

    if (!curso) {
      return res.status(404).json({ error: "Curso não encontrado" });
    }

    res.status(200).json(curso);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar Curso" });
  }
});

// Atualizar Curso existente
app.put("/curso/:id", async (req, res) => {
  const id = Number(req.params.id);
  const updatetipoCursoSchema = CursoSchema.partial();

  try {
    const dadosValidados = updatetipoCursoSchema.parse(req.body);

    const cursoAtualizado = await prisma.curso.update({
      where: { id_curso: id },
      data: dadosValidados,
    });
    res.json({
      message: "Curso atualizado com sucesso",
      data: cursoAtualizado,
    });
  } catch (error) {
    if (error.name === "ZodError") {
      return res
        .status(422)
        .json({ mensagem: "Erro de validação", erros: error.errors });
    }
    if (error.code === "P2025") {
      return res.status(404).json({ mensagem: "Curso não encontrado" });
    }
    console.error(error);
    res.status(500).json({ mensagem: "Erro interno ao atualizar Curso" });
  }
});

//Deletar um Curso
app.delete("/curso/:id", async (req, res) => {
  const id = Number(req.params.id);

  try {
    await prisma.curso.delete({
      where: { id_curso: id },
    });
    res.status(204).send();
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Curso não encontrado" });
    }
    res.status(500).json({ error: "Erro interno ao deletar Curso" });
  }
});

//-----------------------------------------------------------------------------------------------------
// Tipo Disciplina
//-----------------------------------------------------------------------------------------------------

//Validação Tipo Disciplina com Zod
const tipoDisciplinaSchema = z.object({
  tx_descricao: z
    .string({ required_error: "Campo Descrição não foi preenchido" })
    .trim()
    .min(1, "Descrição é Obrigatorio"),
});

// Criar Tipo Disciplina
app.post("/tipo-disciplina", async (req, res) => {
  try {
    const dadosValidados = tipoDisciplinaSchema.parse(req.body);

    const novoTipoDisciplina = await prisma.tipoDisciplina.create({
      data: dadosValidados,
    });

    res.status(201).json({
      message: "Tipo de Curso criado com sucesso",
      data: novoTipoDisciplina,
    });
  } catch (error) {
    if (error.name === "ZodError") {
      res.status(422).json({
        mensagem: "Erro de validação",
        erros: error.errors,
      });
    } else {
      console.error(error);
      res.status(500).json({ mensagem: "Error interno ao Tipo de Curso" });
    }
  }
});

// Listar Todos os Tipo de Disciplina
app.get("/tipo-disciplina", async (req, res) => {
  try {
    const tipoDisciplina = await prisma.tipoDisciplina.findMany();
    res.status(200).json(tipoDisciplina);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar Tipo de Disciplina" });
  }
});

// Retorna o Tipo Disciplina do ID passado
app.get("/tipo-disciplina/:id", async (req, res) => {
  const id = Number(req.params.id);

  try {
    const tipoDisciplina = await prisma.tipoDisciplina.findUnique({
      where: { id_tipo_disciplina: id },
    });

    if (!tipoDisciplina) {
      return res.status(404).json({ error: "Tipo Disciplina não encontrado" });
    }

    res.status(200).json(tipoDisciplina);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar Tipo Disciplina" });
  }
});

// Atualizar Tipo Disciplina existente
app.put("/tipo-disciplina/:id", async (req, res) => {
  const id = Number(req.params.id);
  const updatetipoDisciplinaSchema = tipoDisciplinaSchema.partial();

  try {
    const dadosValidados = updatetipoDisciplinaSchema.parse(req.body);

    const tipoDisciplinaAtualizado = await prisma.tipoDisciplina.update({
      where: { id_tipo_disciplina: id },
      data: dadosValidados,
    });
    res.json({
      message: "Tipo Disciplina atualizado com sucesso",
      data: tipoDisciplinaAtualizado,
    });
  } catch (error) {
    if (error.name === "ZodError") {
      return res
        .status(422)
        .json({ mensagem: "Erro de validação", erros: error.errors });
    }
    if (error.code === "P2025") {
      return res
        .status(404)
        .json({ mensagem: "Tipo Disciplina não encontrado" });
    }
    console.error(error);
    res
      .status(500)
      .json({ mensagem: "Erro interno ao atualizar Tipo Disciplina" });
  }
});

//Deletar um Tipo Disciplina
app.delete("/tipo-disciplina/:id", async (req, res) => {
  const id = Number(req.params.id);

  try {
    await prisma.tipoDisciplina.delete({
      where: { id_tipo_disciplina: id },
    });
    res.status(204).send();
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Tipo Disciplina não encontrado" });
    }
    res.status(500).json({ error: "Erro interno ao deletar Tipo Disciplina" });
  }
});

//-----------------------------------------------------------------------------------------------------
// Disciplina
//-----------------------------------------------------------------------------------------------------

//Validação Disciplina com Zod
const disciplinaSchema = z.object({
  id_curso: z.number({ required_error: "Campo ID Curso não foi preenchido" }),
  id_tipo_disciplina: z.number({
    required_error: "Campo ID Tipo Disciplina não foi preenchido",
  }),
  tx_sigla: z
    .string({ required_error: "Campo Sigla não foi preenchido" })
    .trim()
    .min(1, "Sigla é Obrigatorio"),
  tx_descricao: z
    .string({ required_error: "Campo Descrição não foi preenchido" })
    .trim()
    .min(1, "Descrição é Obrigatorio"),
  in_periodo: z
    .number({ required_error: "Campo Periodo não foi preenchido" })
    .min(1, "Periodo é Obrigatorio e maior ou igual a 1!"),
  in_carga_horaria: z
    .number({ required_error: "Campo Carga Horaria não foi preenchido" })
    .min(40, "Carga Horaria é Obrigatoria e maior ou igual a 40!"),
});

// Criar Disciplina
app.post("/disciplina", async (req, res) => {
  try {
    const dadosValidados = disciplinaSchema.parse(req.body);

    const novaDisciplina = await prisma.disciplina.create({
      data: dadosValidados,
    });

    res
      .status(201)
      .json({ message: "Disciplina criado com sucesso", data: novaDisciplina });
  } catch (error) {
    if (error.name === "ZodError") {
      res.status(422).json({
        mensagem: "Erro de validação",
        erros: error.errors,
      });
    } else {
      console.error(error);
      res.status(500).json({ mensagem: "Error interno ao criar Disciplina" });
    }
  }
});

// Listar Todos as Disciplina
app.get("/disciplina", async (req, res) => {
  try {
    const disciplina = await prisma.disciplina.findMany();
    res.status(200).json(disciplina);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar Disciplinas" });
  }
});

// Retorna a Disciplina do ID passado
app.get("/disciplina/:id", async (req, res) => {
  const id = Number(req.params.id);

  try {
    const disciplina = await prisma.disciplina.findUnique({
      where: { id_disciplina: id },
    });

    if (!disciplina) {
      return res.status(404).json({ error: "Disciplina não encontrado" });
    }

    res.status(200).json(disciplina);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar Disciplina" });
  }
});

// Atualizar Disciplina existente
app.put("/disciplina/:id", async (req, res) => {
  const id = Number(req.params.id);
  const updateDisciplinaSchema = disciplinaSchema.partial();

  try {
    const dadosValidados = updateDisciplinaSchema.parse(req.body);

    const disciplinaAtualizado = await prisma.disciplina.update({
      where: { id_disciplina: id },
      data: dadosValidados,
    });
    res.json({
      message: "Disciplina atualizado com sucesso",
      data: disciplinaAtualizado,
    });
  } catch (error) {
    if (error.name === "ZodError") {
      return res
        .status(422)
        .json({ mensagem: "Erro de validação", erros: error.errors });
    }
    if (error.code === "P2025") {
      return res.status(404).json({ mensagem: "Disciplina não encontrado" });
    }
    console.error(error);
    res.status(500).json({ mensagem: "Erro interno ao atualizar Disciplina" });
  }
});

//Deletar uma Disciplina
app.delete("/disciplina/:id", async (req, res) => {
  const id = Number(req.params.id);

  try {
    await prisma.disciplina.delete({
      where: { id_disciplina: id },
    });
    res.status(204).send();
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Disciplina não encontrado" });
    }
    res.status(500).json({ error: "Erro interno ao deletar Disciplina" });
  }
});

//-----------------------------------------------------------------------------------------------------
// Leciona
//-----------------------------------------------------------------------------------------------------

//Validação Disciplina com Zod
const lecionaSchema = z.object({
  id_professor: z.number({
    required_error: "Campo ID Professor não foi preenchido",
  }),
  id_disciplina: z.number({
    required_error: "Campo ID Disciplina não foi preenchido",
  }),
});

// Criar Leciona
app.post("/leciona", async (req, res) => {
  try {
    const dadosValidados = lecionaSchema.parse(req.body);

    const novaLeciona = await prisma.leciona.create({ data: dadosValidados });

    res
      .status(201)
      .json({ message: "Leciona criado com sucesso", data: novaLeciona });
  } catch (error) {
    if (error.name === "ZodError") {
      res.status(422).json({
        mensagem: "Erro de validação",
        erros: error.errors,
      });
    } else {
      console.error(error);
      res.status(500).json({ mensagem: "Error interno ao criar Leciona" });
    }
  }
});

// Listar Todos as Leciona
app.get("/leciona", async (req, res) => {
  try {
    const leciona = await prisma.leciona.findMany();
    res.status(200).json(leciona);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar Leciona" });
  }
});

// Retorna a Leciona do ID passado
app.get("/leciona/:id", async (req, res) => {
  const id = Number(req.params.id);

  try {
    const leciona = await prisma.leciona.findUnique({
      where: { id_leciona: id },
    });

    if (!leciona) {
      return res.status(404).json({ error: "Leciona não encontrado" });
    }

    res.status(200).json(leciona);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar Leciona" });
  }
});

// Atualizar Leciona existente
app.put("/leciona/:id", async (req, res) => {
  const id = Number(req.params.id);
  const updateLecionaSchema = lecionaSchema.partial();

  try {
    const dadosValidados = updateLecionaSchema.parse(req.body);

    const lecionaAtualizado = await prisma.leciona.update({
      where: { id_leciona: id },
      data: dadosValidados,
    });
    res.json({
      message: "Leciona atualizado com sucesso",
      data: lecionaAtualizado,
    });
  } catch (error) {
    if (error.name === "ZodError") {
      return res
        .status(422)
        .json({ mensagem: "Erro de validação", erros: error.errors });
    }
    if (error.code === "P2025") {
      return res.status(404).json({ mensagem: "Leciona não encontrado" });
    }
    console.error(error);
    res.status(500).json({ mensagem: "Erro interno ao atualizar Leciona" });
  }
});

//Deletar uma Leciona
app.delete("/leciona/:id", async (req, res) => {
  const id = Number(req.params.id);

  try {
    await prisma.leciona.delete({
      where: { id_leciona: id },
    });
    res.status(204).send();
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Leciona não encontrado" });
    }
    res.status(500).json({ error: "Erro interno ao deletar Leciona" });
  }
});

//-----------------------------------------------------------------------------------------------------
// Aluno
//-----------------------------------------------------------------------------------------------------

//Validação Aluno com Zod
const alunoSchema = z.object({
  tx_nome: z
    .string({ required_error: "Campo Nome Aluno não foi preenchido" })
    .trim()
    .min(1, "Nome é Obrigatorio!"),
  tx_sexo: z.enum(["M", "F"], { required_error: "Campo Sexo é obrigatório" }),
  dt_nascimento: z
    .string({ required_error: "Campo Data de Nascimento não foi preenchido" })
    .regex(/^\d{4}[-/]\d{2}[-/]\d{2}$/, {
      message: "Data de nascimento inválida, use yyyy-mm-dd",
    })
    .refine((val) => !isNaN(Date.parse(val)), {
      message: "Data de nascimento inválida use yyyy-mm-dd",
    }),
});

// Criar Aluno
app.post("/aluno", async (req, res) => {
  try {
    const dadosValidados = alunoSchema.parse(req.body);

    const dataParaSalvar = {
      ...dadosValidados,
      dt_nascimento: new Date(dadosValidados.dt_nascimento),
    };

    const novoAluno = await prisma.aluno.create({ data: dataParaSalvar });

    res
      .status(201)
      .json({ message: "Aluno criado com sucesso", data: novoAluno });
  } catch (error) {
    if (error.name === "ZodError") {
      res.status(422).json({
        mensagem: "Erro de validação",
        erros: error.errors,
      });
    } else {
      console.error(error);
      res.status(500).json({ mensagem: "Error interno ao criar Aluno" });
    }
  }
});

// Listar Todos os Alunos
app.get("/aluno", async (req, res) => {
  try {
    const aluno = await prisma.aluno.findMany();
    res.status(200).json(aluno);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar Alunos" });
  }
});

// Retorna o Aluno do ID passado
app.get("/aluno/:id", async (req, res) => {
  const id = Number(req.params.id);

  try {
    const aluno = await prisma.aluno.findUnique({
      where: { id_aluno: id },
    });

    if (!aluno) {
      return res.status(404).json({ error: "Aluno não encontrado" });
    }

    res.status(200).json(aluno);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar Aluno" });
  }
});

// Atualizar Aluno existente
app.put("/aluno/:id", async (req, res) => {
  const id = Number(req.params.id);
  const updateAlunoSchema = alunoSchema.partial();

  try {
    const dadosValidados = updateAlunoSchema.parse(req.body);

    if (dadosValidados.dt_nascimento) {
      dadosValidados.dt_nascimento = new Date(dadosValidados.dt_nascimento);
    }

    const alunoAtualizado = await prisma.aluno.update({
      where: { id_aluno: id },
      data: dadosValidados,
    });
    res.json({
      message: "Aluno atualizado com sucesso",
      data: alunoAtualizado,
    });
  } catch (error) {
    if (error.name === "ZodError") {
      return res
        .status(422)
        .json({ mensagem: "Erro de validação", erros: error.errors });
    }
    if (error.code === "P2025") {
      return res.status(404).json({ mensagem: "Aluno não encontrado" });
    }
    console.error(error);
    res.status(500).json({ mensagem: "Erro interno ao atualizar Aluno" });
  }
});

//Deletar uma Aluno
app.delete("/aluno/:id", async (req, res) => {
  const id = Number(req.params.id);

  try {
    await prisma.aluno.delete({
      where: { id_aluno: id },
    });
    res.status(204).send();
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Aluno não encontrado" });
    }
    res.status(500).json({ error: "Erro interno ao deletar Aluno" });
  }
});

//-----------------------------------------------------------------------------------------------------
// Cursa
//-----------------------------------------------------------------------------------------------------

//Validação Aluno com Zod
const cursaSchema = z.object({
  id_aluno: z.number({ required_error: "Campo ID Aluno não foi preenchido" }),
  id_disciplina: z.number({
    required_error: "Campo ID Disciplina não foi preenchido",
  }),
  in_ano: z
    .number({ required_error: "Campo Ano não foi preenchido" })
    .min(0, "Ano tem que ser maior que 0"),
  in_semestre: z
    .number({ required_error: "Campo Semestre não foi preenchido" })
    .min(0, "Semestre tem que ser maior que 0"),
  in_faltas: z
    .number()
    .min(0, "Campo Faltas tem que ser maior que 0")
    .optional(),
  nm_nota1: z
    .number()
    .min(0, "Campo Nota 1 tem que ser maior que 0")
    .optional(),
  nm_nota2: z
    .number()
    .min(0, "Campo Nota 2 tem que ser maior que 0")
    .optional(),
  nm_nota3: z
    .number()
    .min(0, "Campo Nota 3 tem que ser maior que 0")
    .optional(),
  bl_aprovado: z
    .boolean({ invalid_type_errorr: "Campo tem que ser true ou false" })
    .optional(),
});

// Criar Cursa
app.post("/cursa", async (req, res) => {
  try {
    const dadosValidados = cursaSchema.parse(req.body);

    const novoCursa = await prisma.cursa.create({ data: dadosValidados });

    res
      .status(201)
      .json({ message: "Cursa criado com sucesso", data: novoCursa });
  } catch (error) {
    if (error.name === "ZodError") {
      res.status(422).json({
        mensagem: "Erro de validação",
        erros: error.errors,
      });
    } else {
      console.error(error);
      res.status(500).json({ mensagem: "Error interno ao criar Cursa" });
    }
  }
});

// Listar Todos os Cursa
app.get("/cursa", async (req, res) => {
  try {
    const cursa = await prisma.cursa.findMany();
    res.status(200).json(cursa);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar Cursa" });
  }
});

// Retorna o Cursa do ID passado
app.get("/cursa/:id", async (req, res) => {
  const id = Number(req.params.id);

  try {
    const cursa = await prisma.cursa.findUnique({
      where: { id_cursa: id },
    });

    if (!cursa) {
      return res.status(404).json({ error: "Cursa não encontrado" });
    }

    res.status(200).json(cursa);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar Cursa" });
  }
});

// Atualizar Cursa existente
app.put("/cursa/:id", async (req, res) => {
  const id = Number(req.params.id);
  const updateCursaSchema = cursaSchema.partial();

  try {
    const dadosValidados = updateCursaSchema.parse(req.body);

    const cursaAtualizado = await prisma.cursa.update({
      where: { id_cursa: id },
      data: dadosValidados,
    });
    res.json({
      message: "Cursa atualizado com sucesso",
      data: cursaAtualizado,
    });
  } catch (error) {
    if (error.name === "ZodError") {
      return res
        .status(422)
        .json({ mensagem: "Erro de validação", erros: error.errors });
    }
    if (error.code === "P2025") {
      return res.status(404).json({ mensagem: "Cursa não encontrado" });
    }
    console.error(error);
    res.status(500).json({ mensagem: "Erro interno ao atualizar Cursa" });
  }
});

//Deletar uma Cursa
app.delete("/cursa/:id", async (req, res) => {
  const id = Number(req.params.id);

  try {
    await prisma.cursa.delete({
      where: { id_cursa: id },
    });
    res.status(204).send();
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Cursa não encontrado" });
    }
    res.status(500).json({ error: "Erro interno ao deletar Cursa" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor Rodando na porta ${PORT}`);
});
