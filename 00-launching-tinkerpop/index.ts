import gremlin from 'gremlin';

const DriverRemoteConnection = gremlin.driver.DriverRemoteConnection;
const Graph = gremlin.structure.Graph;

console.log('Attempting to connect: ');

const connection = new DriverRemoteConnection('wss://localhost:8182/gremlin', {});

console.log('Connected: ', connection);

const graph = new Graph();
const g = graph.traversal().withRemote(connection);

console.log('G: ', g);

const setUpGraph = async () => {
    console.log("Setting up the graph");
    await g.addV('face').property('id', '1').property('name', 'darrius');
    console.log("Created the Node");

    const valueMap = await g.V().valueMap();

    console.log("The value map: ", valueMap);
}

setUpGraph();

