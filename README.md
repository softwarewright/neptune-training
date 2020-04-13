# Neptune

*When you need to handle complexity without losing performance. When the relationships continue to grow and change. 100k queries per second with AWS Neptune.*

## Graph Models

### Property Graph Model

- Both Nodes and Edges can have properties
- Edges are directional
- Edges are effectively separate pieces in the database

### Resource Description Framework (RDF)

- Nodes and Edges
- Nodes can be related to other nodes through literals (string)
- Edges cannot have properties
- All edges are equal in weight

## Apache Tinkerpop + Gremlin

Neptune supports

- OLTP and OLAP queries

Gremlin - functional graph traversal language of apache tinkerpop. It takes advantage of function chaning and composition.

``` gremlin
g.addV('face').property('id', 1)

g.V('1').addE('similarity').to(g.V('2'))
    .property('weight', 0.8)
```

**Running tinkerpop**

``` bash
docker run -it tinkerpop/gremlin-console
```
