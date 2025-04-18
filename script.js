//your JS code here. If required.
 function manipulateArray() {
      new Promise((resolve) => {
        setTimeout(() => {
          resolve([1, 2, 3, 4]);
        }, 3000);
      })
      .then((array) => {
        return new Promise((resolve) => {
          const evens = array.filter(num => num % 2 === 0);
          setTimeout(() => {
            document.getElementById('output').textContent = evens.join(',');
            resolve(evens);
          }, 1000);
        });
      })
      .then((evens) => {
        return new Promise((resolve) => {
          const doubled = evens.map(num => num * 2);
          setTimeout(() => {
            document.getElementById('output').textContent = doubled.join(',');
            resolve(doubled);
          }, 2000);
        });
      });
    }

    window.onload = manipulateArray;

