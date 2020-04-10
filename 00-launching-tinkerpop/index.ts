import gremlin from 'gremlin';

const DriverRemoteConnection = gremlin.driver.DriverRemoteConnection;
const Graph = gremlin.structure.Graph;

console.log('Attempting to connect: ');

const connection = new DriverRemoteConnection('wss://localhost:8182/gremlin', {});

console.log('Connected: ', connection);

const graph = new Graph();
const node = graph.traversal().withRemote(connection);

console.log('Node: ', node);

node.V().limit(1).count().next()
    .then(data => {
        console.log('Data:', data)
        connection.close();
    }).catch(error => {
        console.log('Error: ', error);
        connection.close();
    })


