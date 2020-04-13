# Tinkerpop

## Launching Tinkerpop Console

``` bash
# Run the tinkerpop console using docker
docker run -it tinkerpop/gremlin-console
```

## Getting started

``` gremlin
// create sample graph
graph = TinkerFactory.createModern()

// get the TraversalSource
g = graph.traversal() 

g.V()
g.V(1)
g.V(1).values()
// who does node 1 know
g.V(1).out('knows').values()
// software created by node 4
 g.V(4).out('created').values('name')
```


*Create edges between vertices*
``` gremlin
graph = TinkerGraph.open()
g = graph.traversal()
v1 = g.addV("person").property(id, "1").property("name", "marko")
v2 = g.addV("software").property(id, "3").property("name", "lop").property("lang", "java")

g.addE("created").from(v1).to(v2).property(id, "9").property("name", "lop").property("lang", "java")
```

*Search for for vertices that contain software created by marko*
``` gremlin
g.V().has("person", "name", "marko").out("software","created").values("name")
```

*Get the ages of 'vadas' and 'marko'*
``` gremlin
g.V().has('person', 'name', within('marko', 'vadas')).values('age')
```

*Get the mean age of 'vadas' and 'marko'*
```gremlin
g.V().has('person', 'name', within('vadas', 'marko')).values('age').mean()
```

*Get marko and his collaborators on software that he has created*
```gremlin
 g.V().has('person', 'name', 'marko').out('software', 'created').in("software","created").values('name')
```

*Only get marko's collaborators on software*
```gremlin
g.V().has('person', 'name', 'marko').as('exclude').out('software', 'created').in("software","created").where(neq('exclude')).values('name')
```

*Group vertices by vertex label*
```gremlin
g.V().group().by(label)
```


*Group vertices by vertex label, then name*
```gremlin
g.V().group().by(label).by('name')
```