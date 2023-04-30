const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagen: 'Retorna postagem'
    });
});

router.post('/', (req, res, next) => {
    const postagem = {
        id_postagem: req.body.id_postagem,
        titulo: req.body.titulo,
        imagem: req.body.imagem
    }
    res.status(201).send({
        mensagem:'A postagem foi criada',
        postagemCriada: id_postagem
    });
});

router.get('/:id_postagem', (req,res,next) =>{
    const id = req.params.id_postagem
        res.status(200).send({
            mensagem: "Detalhe do pedido",
            id_postagem:id
    });
});

router.patch('/', (req, res, next) => {
    res.status(200).send({
        mensagen: 'Usando path dentro da rota postagem'
    });
});
router.delete('/', (req,res,next) => {
    res.status(200).send({
        mensagen: 'deletar postagem'
    });
})

module.exports = router;