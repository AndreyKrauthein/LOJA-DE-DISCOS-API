const models = [ 
        require('../rotas/usuarios/UserTableModel'),
]
       
async function createTables () {
        for (let counter = 0; counter < models.length; counter++) {
                const model = models[counter]
                await model.sync()
        }
}

createTables()