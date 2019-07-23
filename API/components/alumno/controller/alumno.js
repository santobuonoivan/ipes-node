const { clients, locations } = require('../../../database/db.postgres.config');
const clientService = require('../services/clientService');
const _ = require('lodash');



exports.all_clients = async function (req, res, next) {
    try{
        const clientsList = await clients.findAll({where:{deleted_at:null}});
        if(clientsList.length > 0)
            return res.send(clientsList);
        return res.send('clients not found');
    }catch (e) {
        return res.status(400).send(e.errors[0].message);
    }
};
/*
exports.insert_client = async function (req, res, next) {
    const { error } = clientService.validateClient(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    let client = await clients.findAll({where:{client_name:req.body.client_name}});
    if(client.length > 0) return res.status(400).send('There is a client with the same name, please assign a different client name');
    let result = null, cont = 0;
    while(result == null && cont <=3){
        try{
            let maxId = await clients.sequelize.query("select max(id_client) from clients");
            maxId = maxId[0][0].max;
            maxId +=1 ;
            req.body.id_client = maxId;
            result = await clients.create(req.body);
        }catch (e) {
            cont += 1;
        }
    }
    if(cont > 3){
        return res.status(400).send("server does not respond please try again");
    }
    if(result){
        console.log(result);
        return res.send(result)
    }
};


exports.update_client = async function (req, res, next) {
    const { error } = clientService.validateClient(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    try {
        let result = await clients.update(req.body,{where: {id_client:req.params.id}});
        return res.send(`${ result } records updated`);
    }catch (e) {
        return res.status(400).send(`can't update record: ${e.errors[0].message}`);
    }
};


exports.delete_client = async function(req, res, next){
    try {
        let result = await clients.destroy({where:{id_client:req.params.id}});
        console.log(result);
        return res.send(`${result} clients deleted`);
    }catch (e) {
        return res.status(400).send(`can't delete record: ${e.errors[0].message}`);
    }
};


exports.show_client = async function (req, res, next) {
    try {
        let result = await clients.findOne({where:{id_client: req.params.id}});
        if(!result) return res.send('Client not found');
        console.log(result);
        return res.send(result);
    }catch (e) {
        return res.status(400).send(e.errors[0].message);
    }
};

exports.client_locations = async function (req, res, next) {
    try {
        const client = await clients.findOne({
            where:{id_client:req.params.id},
            include:['locations']
        });
        if(!client) return res.status(404).send("client nor found");
        return res.send(client);
    }catch (e) {
        return res.status(400).send(e.errors[0].message);
    }
};

exports.client_add_locations = async function (req, res, next) {
    //TODO validacion de los campos
    const client = await clients.findOne(
        {
            where:{id_client:req.params.id}
        }
    )
    let locationList = await locations.findAll({where:{location_name:req.body.location_name}});
    if(locationList.length > 0) return res.status(400).send('There is at least a locations with the same name, please assign a different location name');
    let result = null, cont = 0;
    while(result == null && cont <=3){
        try{
            let maxId = await locations.sequelize.query("select max(id_location) from locations");
            maxId = maxId[0][0].max;
            maxId +=1;
            req.body.id_location = maxId;
            req.body.id_client = client.id_client;
            result = await locations.create(req.body);
        }catch (e) {
            cont += 1;
        }
    }
    if(cont > 3){
        return res.status(400).send("server does not respond please try again");
    }
    if(result){
        return res.send(result)
    }
};

exports.client_remove_locations = async function (req, res, next) {
    try{
        let client = await clients.findOne({
            where:{id_client:req.params.id},
            include:['locations']
        });
        if(!client) return res.status(404).send("client not found");
        if(req.body.locations.length){
            for(let i=0; i<req.body.locations.length; i++)
            {
                let dl = await locations.destroy({
                    where:{
                        id_client: client.id_client,
                        id_location: req.body.locations[i]
                    }
                });
                console.log(dl);
            }
        }
        client = await clients.findOne({
            where:{id_client:req.params.id},
            include:['locations']
        });
        return res.json({message:"locations removed",client:client});
    }catch (e) {
        return res.status(400).send(e.errors[0].message);
    }
};*/
