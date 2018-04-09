$(document).ready(function(){
    'use strict';
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));
    //TO DO
    var c;
    for(var x=25; x<400; x+=50){
        console.log(x);
        for(var y=25; y<400; y+=50){
            
            console.log(y);
            c = Shape.Circle(x, y, 20);
            c.fillColor = 'green';        
        }
    }
    paper.view.draw();
    console.log('main.js loaded');
});