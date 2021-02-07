//index.js
(async () => {
    const database = require('./db');
    const Produto = require('./produto');

    try {
        const resultado = await database.sync();
        console.log(resultado);

        //CREATE
        const resultadoCreate = await Produto.create({
            nome: 'mouse gamer',
            preco: 50,
            descricao: 'Um mouse com luzes'
        })
        console.log(resultadoCreate);

        //UPDATE
        const produto = await Produto.findByPk(1);
        produto.nome = "Mouse Top";
        
        const resultadoSave = await produto.save();
        console.log(resultadoSave);

        //DELETE
        Produto.destroy({ where: { id: 1 }});

        //SELECT
        const produtos = await Produto.findAll(); 
        console.log(produtos);
    } catch (error) {
        console.log(error);
    }
})();
