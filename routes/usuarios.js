const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagen: 'retornar todos usuarios'
    });
});

router.post('/', (req, res, next) => {
    const usuario = {
        nome: req.body.nome,
        email: req.body.email
    }
    res.status(201).send({
        mensagem:'insere um usuario',
        usuarioCriado: usuario
    });
});

router.get('/:id_usuario', (req,res,next) =>{
    const id = req.params.id_usuario
    if(id === 'especial'){
        res.status(200).send({
            mensagem: "Você descobriu um ID especial",
            id:id
        });
    } else{
        res.status(200).send({
            mensagem: "Você passou um ID"
        });
    }
})

router.patch('/', (req, res, next) => {
    res.status(200).send({
        mensagen: 'Alterar usuario'
    });
});
router.delete('/', (req,res,next) => {
    res.status(200).send({
        mensagen: 'Deletar usuario'
    });
})

module.exports = router;