const ArraysDS = (arr, animations, event) => {
  switch (event) {
    case 'INSERT_FRONT':
      animations = insertFront(arr, animations);
      break;
    case 'INSERT_BACK':
      break;
    case 'INSERT_MID':
      break;
    case 'DELETE_FRONT':
      break;
    case 'DELETE_BACK':
      break;
    case 'DELETE_MID':
      break;
    default:
  }

  return animations;
};

const insertFront = (arr, animations) => {
  data = Math.floor(Math.random());
  if (arr.length === 0) {
    animations.push([0, 0]);
    animations.push([0, 0]);
    animations.push([0, 0]);
  } else {
    arr.push(-2000000);
    animations.push([arr.length, arr.length]);
    animations.push([arr.length, arr.length]);
    animations.push([arr.length, arr.length]);
    for (let i = arr.length - 2; i >= 0; i--) {
      animations.push([i, i + 1]);
      animations.push([i, i + 1]);
      animations.push([i, i + 1]);
      arr[i + 1] = arr[i];
    }

    animations.push([0, 0]);
    animations.push([0, 0]);
    animations.push([0, 0]);
    arr[0] = data;
  }
};
