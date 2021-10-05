function main() {
    var canvas = document.getElementById('myCanvas');
    var gl = canvas.getContext('webgl');

    const object_aquarium = {
        line_white_color1: [1,1,1],
        line_white_a1: [-1.0, 0.32], //(-1) //-0.46 mundur 54
        line_white_b1: [-0.68, 0.14], //(-0.68) //-0.14
        line_white_c1: [-0.02, 0.51],  // -0.02 //0.52
        line_white_d1: [-0.01, 0.75], //0.02 // 0.56

        line_white_color2: [1,1,1],
        line_white_a2: [0.02, 0.49],
        line_white_b2: [0.13, 0.44],
        line_white_c2: [0.37, 0.57],
        line_white_d2: [0.03, 0.69],

        line_white_color3: [1,1,1],
        line_white_a3: [-0.95, 0.23],
        line_white_b3: [-0.95, 0],
        line_white_c3: [-0.74, 0.12],
        
        line_white_color4: [1,1,1],
        line_white_a4: [0.15, 0.43],
        line_white_b4: [0.37, 0.35],
        line_white_c4: [0.38, 0.54],
       

        line_blue1_color1: [0.84,1.9,2.40],
        line_blue1_a1: [-0.68, 0.15],
        line_blue1_b1: [-0.53, 0.07],
        line_blue1_c1: [0.13, 0.44],
        line_blue1_d1: [-0.02, 0.51],

        line_blue1_color2: [0.84,1.9,2.40],
        line_blue1_a2: [-0.95, 0],
        line_blue1_b2: [-0.54, -0.20],
        line_blue1_c2: [-0.54, 0],
        line_blue1_d2: [-0.74, 0.12 ],


        line_blue1_color3: [0.84,1.9,2.40],
        line_blue1_a3: [-0.54, 0],
        line_blue1_b3: [-0.54, -0.20],
        line_blue1_c3: [0.37 , 0.35],
        line_blue1_d3: [0.18, 0.42],

        
        
        line_blue2_color1:[0, 0, 1],
        line_blue2_a1: [-0.95, -0.21],
        line_blue2_b1: [-0.54, -0.49],
        line_blue2_c1: [-0.54, -0.20],
        line_blue2_d1: [-0.95, 0],

        line_blue2_color2:[0, 0, 1],
        line_blue2_a2: [-0.54, -0.49],
        line_blue2_b2: [0.36, 0.08],
        line_blue2_c2: [0.37 , 0.35],
        line_blue2_d2: [-0.54, -0.20],

        line_yellow1_color1:[0.851,0.788,0.251],
        line_yellow1_a1: [-1.0, 0.32],
        line_yellow1_b1: [-0.95, 0.23],
        line_yellow1_c1: [-0.54, 0],
        line_yellow1_d1: [-0.53, 0.07],

        line_yellow1_color2:[0.851,0.788,0.251],
        line_yellow1_a2: [-0.54, 0],
        line_yellow1_b2: [0.39, 0.54],
        line_yellow1_c2: [0.40, 0.60],
        line_yellow1_d2: [-0.53, 0.07],

        line_yellow1_color3:[0.851,0.788,0.251],
        line_yellow1_a3: [-1.0, 0.32],
        line_yellow1_b3: [-0.95, 0.23],
        line_yellow1_c3: [-0.95, -0.21],
        line_yellow1_d3: [-1.0, -0.22],

        line_yellow1_color4:[0.851,0.788,0.251],
        line_yellow1_a4: [-1.0, -0.22],
        line_yellow1_b4: [-0.54, -0.57],
        line_yellow1_c4: [-0.54, -0.49],
        line_yellow1_d4: [-0.95, -0.21],

        line_yellow1_color5:[0.851,0.788,0.251],
        line_yellow1_a5: [-0.54, -0.57],
        line_yellow1_b5: [0.37, 0.04],
        line_yellow1_c5: [0.36, 0.08],
        line_yellow1_d5: [-0.54, -0.49],

        line_yellow1_color51:[0.851,0.788,0.251],
        line_yellow1_a51: [0.36, 0.08],
        line_yellow1_b51: [0.37, 0.04],
        line_yellow1_c51: [0.37, 0.09],

        line_yellow1_color6:[0.851,0.788,0.251],
        line_yellow1_a6: [-0.02, 0.51],
        line_yellow1_b6: [0.02, 0.49],
        line_yellow1_c6: [0.03, 0.69],
        line_yellow1_d6: [-0.01, 0.75],

        line_yellow1_color7:[0.851,0.788,0.251],
        line_yellow1_a7: [0.03, 0.69],
        line_yellow1_b7: [0.37, 0.57],
        line_yellow1_c7: [0.40, 0.60],
        line_yellow1_d7: [-0.01, 0.75],
        
    };


    const object_aquarium_2 = {
        line_yellow_color: [0.851,0.788,0.251],
        line_yellow_a: [0.42 , 0],
        line_yellow_b: [0.43, 0],
        line_yellow_c: [0.49, 0.22],
        line_yellow_d: [0.48, 0.25],
        line_yellow_e: [0.89, 0.25],
        line_yellow_f: [0.96, 0],
        line_yellow_g: [0.95, 0],
        line_yellow_h: [0.88, 0.22],

        line_blue_color1:[0, 0, 1],
        line_blue_a: [0.42 , 0],
        line_blue_b: [0.45, -0.22],
        line_blue_c: [0.93, -0.22],
        line_blue_d: [0.96, 0],

        line_white_color1:[1, 1, 1],
        line_white_a: [0.42 , 0],
        line_white_b: [0.45, -0.22],
        line_white_c: [0.93, -0.22],
        line_white_d: [0.96,0],

        
    };

    const vertices = [
        ...object_aquarium.line_white_a1, ...object_aquarium.line_white_color1,
        ...object_aquarium.line_white_b1, ...object_aquarium.line_white_color1,
        ...object_aquarium.line_white_c1, ...object_aquarium.line_white_color1,
        ...object_aquarium.line_white_a1, ...object_aquarium.line_white_color1,
        ...object_aquarium.line_white_d1, ...object_aquarium.line_white_color1,
        ...object_aquarium.line_white_c1, ...object_aquarium.line_white_color1,

        ...object_aquarium.line_white_a2, ...object_aquarium.line_white_color2,
        ...object_aquarium.line_white_b2, ...object_aquarium.line_white_color2,
        ...object_aquarium.line_white_c2, ...object_aquarium.line_white_color2,
        ...object_aquarium.line_white_a2, ...object_aquarium.line_white_color2,
        ...object_aquarium.line_white_d2, ...object_aquarium.line_white_color2,
        ...object_aquarium.line_white_c2, ...object_aquarium.line_white_color2,

        ...object_aquarium.line_white_a3, ...object_aquarium.line_white_color3,
        ...object_aquarium.line_white_b3, ...object_aquarium.line_white_color3,
        ...object_aquarium.line_white_c3, ...object_aquarium.line_white_color3,

        ...object_aquarium.line_white_a4, ...object_aquarium.line_white_color4,
        ...object_aquarium.line_white_b4, ...object_aquarium.line_white_color4,
        ...object_aquarium.line_white_c4, ...object_aquarium.line_white_color4,


        ...object_aquarium.line_blue1_a1, ...object_aquarium.line_blue1_color1,
        ...object_aquarium.line_blue1_b1, ...object_aquarium.line_blue1_color1,
        ...object_aquarium.line_blue1_c1, ...object_aquarium.line_blue1_color1,
        ...object_aquarium.line_blue1_a1, ...object_aquarium.line_blue1_color1,
        ...object_aquarium.line_blue1_d1, ...object_aquarium.line_blue1_color1,
        ...object_aquarium.line_blue1_c1, ...object_aquarium.line_blue1_color1,

        ...object_aquarium.line_blue1_a2, ...object_aquarium.line_blue1_color2,
        ...object_aquarium.line_blue1_b2, ...object_aquarium.line_blue1_color2,
        ...object_aquarium.line_blue1_c2, ...object_aquarium.line_blue1_color2,
        ...object_aquarium.line_blue1_a2, ...object_aquarium.line_blue1_color2,
        ...object_aquarium.line_blue1_d2, ...object_aquarium.line_blue1_color2,
        ...object_aquarium.line_blue1_c2, ...object_aquarium.line_blue1_color2,

        ...object_aquarium.line_blue1_a3, ...object_aquarium.line_blue1_color3,
        ...object_aquarium.line_blue1_b3, ...object_aquarium.line_blue1_color3,
        ...object_aquarium.line_blue1_c3, ...object_aquarium.line_blue1_color3,
        ...object_aquarium.line_blue1_a3, ...object_aquarium.line_blue1_color3,
        ...object_aquarium.line_blue1_d3, ...object_aquarium.line_blue1_color3,
        ...object_aquarium.line_blue1_c3, ...object_aquarium.line_blue1_color3,

        
        ...object_aquarium.line_blue1_a1, ...object_aquarium.line_blue1_color1,
        ...object_aquarium.line_blue1_b1, ...object_aquarium.line_blue1_color1,
        ...object_aquarium.line_blue1_c1, ...object_aquarium.line_blue1_color1,
        ...object_aquarium.line_blue1_a1, ...object_aquarium.line_blue1_color1,
        ...object_aquarium.line_blue1_d1, ...object_aquarium.line_blue1_color1,
        ...object_aquarium.line_blue1_c1, ...object_aquarium.line_blue1_color1,

        ...object_aquarium.line_blue2_a1, ...object_aquarium.line_blue2_color1,
        ...object_aquarium.line_blue2_b1, ...object_aquarium.line_blue2_color1,
        ...object_aquarium.line_blue2_c1, ...object_aquarium.line_blue2_color1,
        ...object_aquarium.line_blue2_a1, ...object_aquarium.line_blue2_color1,
        ...object_aquarium.line_blue2_d1, ...object_aquarium.line_blue2_color1,
        ...object_aquarium.line_blue2_c1, ...object_aquarium.line_blue2_color1,

        ...object_aquarium.line_blue2_a2, ...object_aquarium.line_blue2_color2,
        ...object_aquarium.line_blue2_b2, ...object_aquarium.line_blue2_color2,
        ...object_aquarium.line_blue2_c2, ...object_aquarium.line_blue2_color2,
        ...object_aquarium.line_blue2_a2, ...object_aquarium.line_blue2_color2,
        ...object_aquarium.line_blue2_d2, ...object_aquarium.line_blue2_color2,
        ...object_aquarium.line_blue2_c2, ...object_aquarium.line_blue2_color2,

        ...object_aquarium.line_yellow1_a1, ...object_aquarium.line_yellow1_color1,
        ...object_aquarium.line_yellow1_b1, ...object_aquarium.line_yellow1_color1,
        ...object_aquarium.line_yellow1_c1, ...object_aquarium.line_yellow1_color1,
        ...object_aquarium.line_yellow1_a1, ...object_aquarium.line_yellow1_color1,
        ...object_aquarium.line_yellow1_d1, ...object_aquarium.line_yellow1_color1,
        ...object_aquarium.line_yellow1_c1, ...object_aquarium.line_yellow1_color1,

        ...object_aquarium.line_yellow1_a2, ...object_aquarium.line_yellow1_color2,
        ...object_aquarium.line_yellow1_b2, ...object_aquarium.line_yellow1_color2,
        ...object_aquarium.line_yellow1_c2, ...object_aquarium.line_yellow1_color2,
        ...object_aquarium.line_yellow1_a2, ...object_aquarium.line_yellow1_color2,
        ...object_aquarium.line_yellow1_d2, ...object_aquarium.line_yellow1_color2,
        ...object_aquarium.line_yellow1_c2, ...object_aquarium.line_yellow1_color2,

        ...object_aquarium.line_yellow1_a3, ...object_aquarium.line_yellow1_color3,
        ...object_aquarium.line_yellow1_b3, ...object_aquarium.line_yellow1_color3,
        ...object_aquarium.line_yellow1_c3, ...object_aquarium.line_yellow1_color3,
        ...object_aquarium.line_yellow1_a3, ...object_aquarium.line_yellow1_color3,
        ...object_aquarium.line_yellow1_d3, ...object_aquarium.line_yellow1_color3,
        ...object_aquarium.line_yellow1_c3, ...object_aquarium.line_yellow1_color3,

        ...object_aquarium.line_yellow1_a4, ...object_aquarium.line_yellow1_color4,
        ...object_aquarium.line_yellow1_b4, ...object_aquarium.line_yellow1_color4,
        ...object_aquarium.line_yellow1_c4, ...object_aquarium.line_yellow1_color4,
        ...object_aquarium.line_yellow1_a4, ...object_aquarium.line_yellow1_color4,
        ...object_aquarium.line_yellow1_d4, ...object_aquarium.line_yellow1_color4,
        ...object_aquarium.line_yellow1_c4, ...object_aquarium.line_yellow1_color4,

        ...object_aquarium.line_yellow1_a5, ...object_aquarium.line_yellow1_color5,
        ...object_aquarium.line_yellow1_b5, ...object_aquarium.line_yellow1_color5,
        ...object_aquarium.line_yellow1_c5, ...object_aquarium.line_yellow1_color5,
        ...object_aquarium.line_yellow1_a5, ...object_aquarium.line_yellow1_color5,
        ...object_aquarium.line_yellow1_d5, ...object_aquarium.line_yellow1_color5,
        ...object_aquarium.line_yellow1_c5, ...object_aquarium.line_yellow1_color5,

        ...object_aquarium.line_yellow1_a51, ...object_aquarium.line_yellow1_color51,
        ...object_aquarium.line_yellow1_b51, ...object_aquarium.line_yellow1_color51,
        ...object_aquarium.line_yellow1_c51, ...object_aquarium.line_yellow1_color51,

        ...object_aquarium.line_yellow1_a6, ...object_aquarium.line_yellow1_color6,
        ...object_aquarium.line_yellow1_b6, ...object_aquarium.line_yellow1_color6,
        ...object_aquarium.line_yellow1_c6, ...object_aquarium.line_yellow1_color6,
        ...object_aquarium.line_yellow1_a6, ...object_aquarium.line_yellow1_color6,
        ...object_aquarium.line_yellow1_d6, ...object_aquarium.line_yellow1_color6,
        ...object_aquarium.line_yellow1_c6, ...object_aquarium.line_yellow1_color6,

        ...object_aquarium.line_yellow1_a7, ...object_aquarium.line_yellow1_color7,
        ...object_aquarium.line_yellow1_b7, ...object_aquarium.line_yellow1_color7,
        ...object_aquarium.line_yellow1_c7, ...object_aquarium.line_yellow1_color7,
        ...object_aquarium.line_yellow1_a7, ...object_aquarium.line_yellow1_color7,
        ...object_aquarium.line_yellow1_d7, ...object_aquarium.line_yellow1_color7,
        ...object_aquarium.line_yellow1_c7, ...object_aquarium.line_yellow1_color7,
        


        // GAMBAR KANAN
        ...object_aquarium_2.line_yellow_a, ...object_aquarium_2.line_yellow_color,
        ...object_aquarium_2.line_yellow_b, ...object_aquarium_2.line_yellow_color,
        ...object_aquarium_2.line_yellow_c, ...object_aquarium_2.line_yellow_color,
        ...object_aquarium_2.line_yellow_a, ...object_aquarium_2.line_yellow_color,
        ...object_aquarium_2.line_yellow_d, ...object_aquarium_2.line_yellow_color,
        ...object_aquarium_2.line_yellow_c, ...object_aquarium_2.line_yellow_color, // 210

        ...object_aquarium_2.line_yellow_c, ...object_aquarium_2.line_yellow_color,
        ...object_aquarium_2.line_yellow_h, ...object_aquarium_2.line_yellow_color,
        ...object_aquarium_2.line_yellow_e, ...object_aquarium_2.line_yellow_color,
        ...object_aquarium_2.line_yellow_c, ...object_aquarium_2.line_yellow_color,
        ...object_aquarium_2.line_yellow_d, ...object_aquarium_2.line_yellow_color,
        ...object_aquarium_2.line_yellow_e, ...object_aquarium_2.line_yellow_color, // 240

        ...object_aquarium_2.line_yellow_h, ...object_aquarium_2.line_yellow_color,
        ...object_aquarium_2.line_yellow_g, ...object_aquarium_2.line_yellow_color,
        ...object_aquarium_2.line_yellow_f, ...object_aquarium_2.line_yellow_color,
        ...object_aquarium_2.line_yellow_h, ...object_aquarium_2.line_yellow_color,
        ...object_aquarium_2.line_yellow_e, ...object_aquarium_2.line_yellow_color,
        ...object_aquarium_2.line_yellow_f, ...object_aquarium_2.line_yellow_color,  // 270

        ...object_aquarium_2.line_blue_a, ...object_aquarium_2.line_blue_color1,
        ...object_aquarium_2.line_blue_b, ...object_aquarium_2.line_blue_color1,
        ...object_aquarium_2.line_blue_c, ...object_aquarium_2.line_blue_color1,
        ...object_aquarium_2.line_blue_a, ...object_aquarium_2.line_blue_color1,
        ...object_aquarium_2.line_blue_d, ...object_aquarium_2.line_blue_color1,
        ...object_aquarium_2.line_blue_c, ...object_aquarium_2.line_blue_color1, // 300

       

    ];

    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);


    var vertexShaderSource = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying vec3 vColor;
        uniform float uChange;
        void main() {
            gl_Position = vec4(aPosition.x, aPosition.y, 1.0, 1.0);
            vColor = aColor;
        }
    `;

    var fragmentShaderSource = `
        precision mediump float;
        varying vec3 vColor;
        void main() {
            gl_FragColor = vec4(vColor, 1.0);
        }
    `;

    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);


    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);


    var shaderProgram = gl.createProgram();


    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);


    gl.linkProgram(shaderProgram);


    gl.useProgram(shaderProgram);


    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(aPosition,2,gl.FLOAT,false,5 * Float32Array.BYTES_PER_ELEMENT,0);
    gl.enableVertexAttribArray(aPosition);
    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(aColor,3,gl.FLOAT,false,5 * Float32Array.BYTES_PER_ELEMENT,2 * Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aColor);

    var freeze = false;
    // Interactive graphics with mouse
    function onMouseClick(event) {
        freeze = !freeze;
    }
    document.addEventListener("click", onMouseClick);
    // Interactive graphics with keyboard
    function onKeydown(event) {
        if (event.keyCode == 32) freeze = true;
    }

    function onKeyup(event) {
        if (event.keyCode == 32) freeze = false;
    }
    document.addEventListener("keydown", onKeydown);
    document.addEventListener("keyup", onKeyup);

    var speed = 0.0068;
    var change = 0;
    var uChange = gl.getUniformLocation(shaderProgram, "uChange");

    function moveVertices() {

        // if (vertices[201] > 1.0 || vertices[331] < -1.0) {
        //     speed = speed * -1;
        // }

        // for (let i = 181; i < vertices.length; i += 5) {
        //     vertices[i] = vertices[i] + speed;
        // }
    }


    function render() {
        moveVertices();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
        change = change + speed;
        gl.uniform1f(uChange, change);

        gl.clearColor(0,0,0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        var primitive = gl.TRIANGLES;
        var offset = 0;
        var nVertex = 150;
        gl.drawArrays(primitive, offset, nVertex);
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}
