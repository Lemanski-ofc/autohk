const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const app = express();

app.use(express.json());

// Rota para criar um novo veículo
app.post('/veiculos', async (req, res) => {
  const { vehicle, marca, ano, descricao, vendido } = req.body;
  const newVehicle = await prisma.vehicle.create({
    data: {
      vehicle,
      marca,
      ano,
      descricao,
      vendido,
    },
  });
  res.json(newVehicle);
});

// Rota para retornar todos os veículos
app.get('/veiculos', async (req, res) => {
  const vehicles = await prisma.vehicle.findMany();
  res.json(vehicles);
});

// Rota para modificar um veículo pelo ID
app.put('/veiculos/:id', async (req, res) => {
  const { id } = req.params;
  const { vehicle, marca, ano, descricao, vendido } = req.body;
  const updatedVehicle = await prisma.vehicle.update({
    where: {
      id: parseInt(id),
    },
    data: {
      vehicle,
      marca,
      ano,
      descricao,
      vendido,
    },
  });
  res.json(updatedVehicle);
});

//Deleta um veiculo pelo seu ID
app.delete('/veiculos/:id', async (req, res) => {
    const { id } = req.params;
    
    try {
      const deletedVehicle = await prisma.vehicle.delete({
        where: { id: parseInt(id) }
      });
      res.status(200).json(deletedVehicle);
    } catch (error) {
      res.status(500).json({ error: 'Error deleting vehicle' });
    }
  });
  //Rota para pesquisar por parametro
  app.get('/veiculos/:marca', async (req, res) => {
    const { marca } = req.params;
  
    const vehicles = await prisma.vehicle.findMany({
      where: {
        marca: marca
      }
    });
  
    res.json(vehicles);
  });
  
  //Rota para alterar algo especifico
  app.patch('/veiculos/:id', async (req, res) => {
    const { id } = req.params;
    const { vehicle, marca, ano, descricao, vendido } = req.body;
    
    try {
      const updatedVehicle = await prisma.vehicle.update({
        where: { id: parseInt(id) },
        data: {
          vehicle,
          marca,
          ano: parseInt(ano),
          descricao,
          vendido: vendido === 'true', // converter para booleano
        },
      });
      
      res.json(updatedVehicle);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao atualizar veículo');
    }
  });

  //Rota para visualizar um veiculo pelo id
  app.get('/veiculos/:id', async (req, res) => {
    const { id } = req.params;
    const veiculo = await prisma.veiculo.findUnique({
      where: { id: parseInt(id) }
    });
    res.json(veiculo);
  });
  
app.listen(4002, () => {
  console.log('Servidor esta rodando');
});
