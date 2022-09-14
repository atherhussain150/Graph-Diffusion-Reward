var images = ["examples/img/a.png",
"examples/img/b.png",
"examples/img/c.png",
"examples/img/d.png",
"examples/img/e.png",
"examples/img/f.png",
"examples/img/g.png",
"examples/img/h.png",
"examples/img/i.png",
"examples/img/j.png",
"examples/img/k.png",
"examples/img/l.png",
"examples/img/m.png",
"examples/img/n.png",
"examples/img/o.png",] // array with list of images, array is loaded from file depending on participant id

//func get_graph(partiticpant_id){

// load csv

// get the line of the csv for the participant id

// array.forEach(element => {
//   examples/img/a.png
// });

  var Graph = {
      a: null,
      b: null,
      c: null,
      d: null,
      e: null,
      f: null,
      g: null,
      h: null,
      i: null,
      j: null,
      k: null,
      l: null,
      m: null,
      n: null,
      o: null,
    };

    Object.keys(Graph).forEach(key => {
      var randElement = images[Math.floor(Math.random() * images.length)];
      //console.log(images.indexOf(randElement));
      images.splice(images.indexOf(randElement),1);
     // console.log("randElement: "+ randElement);
      //Graph[key] = images[randElement];
      //console.log("randElement: "+ randElement);
      Graph[key] = randElement;
      console.log("key: "+Graph[key]);

      
      console.log(key, Graph[key]);
    });

// var arrStr = ['Mehvish', 'Tahir', 'John', 'Sania', 'Thomas']
// var randElement = arrStr[Math.floor(Math.random() * arrStr.length)];
// console.log(randElement);

//}