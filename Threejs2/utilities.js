const numberInRange = (from, to, increment = 1) => {
    let arr = [];
    for (let i = from; i <= to; i += increment) {
        arr.push(i);
    }
    return arr;
};

const randomInRange = (from, to, convertInt = false) => {
    let x = Math.random() * (to - from);

    if (convertInt) return Math.floor(x + from);
    return x + from;
};

const searchIndex = (arr, num) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == num) return i;
    }
};

const selectObject = (intersect, selected) => {
    let selectFirstItem = true;
    intersect.forEach((item) => {
        if (item.object.visible && !item.object.click && selectFirstItem) {
            selected.push(item.object);
            item.object.material.color.set(0xffffff);
            item.object.click = true;
            selectFirstItem = false;
        }
    });
};

const checkCouple = (selected, visibles, notVisibles) => {
    if (selected[0].coupleColor == selected[1].coupleColor) {
        console.log("cocok");
        selected.forEach((item) => {
            item.visible = false;
            item.material.color.set(item.coupleColor);
            item.click = false;
            notVisibles.push(
                ...visibles.splice(searchIndex(visibles, item.sceneIndex), 1)
            );
        });
        return true;
    } else {
        console.log("salah");
        selected.forEach((item) => {
            item.material.color.set(item.coupleColor);
            item.click = false;
        });
        return false;
    }
};

const createCone = (color = Math.random() * 0xffffff) => {
    const cone = new THREE.Mesh(
        new THREE.TetrahedronGeometry(5),
        new THREE.MeshPhongMaterial({ color: color })
    );
    cone.click = false;
    cone.name = "cone";
    cone.visible = false;
    cone.coupleColor = color;
    cone.position.x = randomInRange(-20, 20);
    cone.position.y = randomInRange(-20, 20);
    cone.position.z = randomInRange(-20, 20);
    return cone;
};

//  createCone = function() {
//     const geometry = new THREE.ConeGeometry(1, 2, 100);
//     const material = new THREE.MeshBasicMaterial({
//         color: 0xf5a84,
//         shininess: 100,
//         wireframe: true
//     });
//     cone = new THREE.Mesh(geometry, material);
//     scene.add(cone);
// };

const OBJECT_TOTAL = 50;
let colorSet = numberInRange(0, 1, 1 / (OBJECT_TOTAL / 2));
let currentColor = 0;

const createCouple = () => {
    const randomColor = colorSet[currentColor] * 0xffffff;
    currentColor++;
    const couple = [];
    couple.push(createCone(randomColor), createCone(randomColor));
    return couple;
};