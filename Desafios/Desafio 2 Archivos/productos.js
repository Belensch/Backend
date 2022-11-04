const Contenedor = require('./desafio.js')

const acceder = new Contenedor('./productos.JSON')

async function crear() {
    const prod1 = {
        title: "Camisa",
        price: 5000,
        thumbnail: "http://camisa.../images/",
    }
    const prod2 = {
        title: "Pantalon",
        price: 9500,
        thumbnail: "http://pantalon.../images/",
    }
    const prod3 = {
            title: "Zapatos",
            price: 15500,
            thumbnail: "http://zapatos.../images/",
        }
        /* Dato: al ejecutarse los métodos en este orden, .json aparecera vacío. ya q el último método borra todos. 
          Se puede ejecutar un método a la vez para ver c/ resultado */

    /* 1º guarda los productos */
    await acceder.save(prod1).then(prod => console.log(prod)).catch(err => console.log(err))
    await acceder.save(prod2).then(prod => console.log(prod)).catch(err => console.log(err))
    await acceder.save(prod3).then(prod => console.log(prod)).catch(err => console.log(err))

    /* 2º, accede a un objeto por ID (2 en este caso) */
    await acceder.getId(2).then(prod => console.log(prod)).catch(err => console.log(err))

    /* 3º accede a todos los objetos del .json */
    await acceder.getAll().then(prod => console.log(prod)).catch(err => console.log(err))

    /* 4º Borra el objeto con id 2 */
    await acceder.deleteById(2).then(prod => console.log(prod)).catch(err => console.log(err))

    /* 5º Borra todo */
    await acceder.deleteAll().then(prod => console.log(prod)).catch(err => console.log(err))
}

crear()