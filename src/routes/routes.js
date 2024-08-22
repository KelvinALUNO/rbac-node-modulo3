const { Router } = require("express");
const alunoRoutes = require("./alunos.route");
const cursoRoutes = require("./cursos.route");
const loginRoutes = require("./login.route");
const matriculaRoutes = require("./matricula.route");
const rbacRoutes = require("./rbac.routes");
const authRoutes = require('./auth.routes');
const userRoutes = require('./usuarios.routes');

const routes = Router()

routes.use('/matriculas', matriculaRoutes)
routes.use('/alunos', alunoRoutes)
routes.use('/cursos', cursoRoutes)
routes.use('/user', userRoutes)
// routes.use('/login', loginRoutes)
routes.use('/login', authRoutes)
routes.use('/rbac', rbacRoutes)

module.exports = routes