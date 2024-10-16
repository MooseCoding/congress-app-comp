import brain from "npm:brain.js";

// Data structure representing storm and census data
const trainingData = [
  {
    input: { population: 0.9, income: 0.1, stormRisk: 0.8 },
    output: { helpPriority: 1 },
  },
  {
    input: { population: 0.6, income: 0.3, stormRisk: 0.5 },
    output: { helpPriority: 0.6 },
  },
  {
    input: { population: 0.4, income: 0.8, stormRisk: 0.3 },
    output: { helpPriority: 0.2 },
  },
];

const net = new brain.NeuralNetwork();

net.train(trainingData);

// Predict for a new scenario
const output = net.run({ population: 0.7, income: 0.2, stormRisk: 0.9 });
console.log(output); // Output help priority prediction
