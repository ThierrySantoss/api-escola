ALTER TABLE "Disciplina" ADD CONSTRAINT chk_disciplina_periodo CHECK (in_periodo >= 1),
ADD CONSTRAINT chk_disciplina_carga_horaria CHECK (in_carga_horaria >= 40);

ALTER TABLE "Cursa" ADD CONSTRAINT chk_cursa_validacoes CHECK (
    nm_nota1 >= 0.00
    AND nm_nota1 <= 10.00
    AND nm_nota2 >= 0.00
    AND nm_nota2 <= 10.00
    AND nm_nota3 >= 0.00
    AND nm_nota3 <= 10.00
    AND in_faltas >= 0
);