const mongoose = require("mongoose");

// Abro a conexão com o novo database
mongoose
  .connect("mongodb://localhost:27017/mydatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");

    // Schema de exemplo para popular o db
    const clienteSchema = new mongoose.Schema({
      nome: String,
      email: String,
      idade: Number,
      cpf: Number,
    });

    // Nova model de clientes
    const Cliente = mongoose.model("Cliente", clienteSchema);

    // Primeiro objeto (documento) da coleção
    const novoCliente = new Cliente({
      nome: "Luigi",
      email: "luigi@nintendo.com",
      idade: 35,
      cpf: 12345678910,
    });

    // Persiste novo cliente
    return novoCliente.save();
  })
  .then((clienteRegistrado) => {
    console.log("Cliente registrado no DB com sucesso:", clienteRegistrado);

    // Retorna o Cliente
    return mongoose.model("Cliente").find();
  })
  .then((todosClientes) => {
    console.log("Todos os cliente já registrados:", todosClientes);
  })
  .then(() => {
    return mongoose.disconnect();
  })
  .catch((err) => {
    console.error("\n\n\n\n ***Error:", err, "*** \n\n\n\n");
  });
