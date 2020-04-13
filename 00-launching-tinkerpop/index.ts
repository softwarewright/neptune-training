import gremlin from 'gremlin';

const DriverRemoteConnection = gremlin.driver.DriverRemoteConnection;
const Graph = gremlin.structure.Graph;

const connection = new DriverRemoteConnection('wss://localhost:8182/gremlin', {});

const graph = new Graph();
const g = graph.traversal().withRemote(connection);


const setUpGraph = async () => {
    // await g.addV('person').property('id', 2).property('name', 'Keionne').next();
    const values = await g.V();
    console.log("Values:", values);
    connection.close();
}

setUpGraph();

