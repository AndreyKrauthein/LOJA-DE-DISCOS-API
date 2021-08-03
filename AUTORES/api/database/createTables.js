const models = [ 
        require('../rotas/autores/AuthorTableModel')
]
       
async function createTables () {
        for (let counter = 0; counter < models.length; counter++) {
                const model = models[counter]
                await model.sync()
        }
}

createTables()