var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})
router.post("/cadastrar_musica", function (req, res) {
    usuarioController.cadastrar_musica(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.get('/buscar_avaliacao/:idUsuario', function (req, res) {
    usuarioController.buscarAvaliacao(req, res);
});

router.put("/votar", function (req, res) {
    usuarioController.votar(req, res);
});

router.get("/imprimir", function (req, res) {
    usuarioController.imprimir(req, res);
});

router.get("/metricas", function (req, res) {
    usuarioController.metricas(req, res);
});
router.post("/avaliando", function (req, res) {
    usuarioController.avaliando(req, res);
});


module.exports = router;