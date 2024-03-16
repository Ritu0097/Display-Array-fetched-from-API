document.getElementById('fetchDataButton').addEventListener('click', () => {
    PromiseAPI1()
        .then(data => {
            displayData(data);
            return PromiseAPI2(); 
        })
        .then(data => {
            displayData(data);
            return PromiseAPI3(); 
        })
        .then(data => {
            displayData(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
function displayData(data) {
    const dataDisplay = document.getElementById('dataDisplay');
    const table = document.createElement('table');

    if (Array.isArray(data)) {
        data.forEach(element => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${element.id}</td>
                <td>${element.title || element.name || element.text}</td>
                <td>${element.body || element.description}</td>
                <td>${element.userId || element.ownerId||element.price}</td>
                <td>${element.tags || element.categories||element.discountPercentage}</td>
                <td>${element.reactions || element.likes}</td>
            `;
            table.appendChild(row);
        });
    } else {
        Object.keys(data).forEach(key => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${key}</td>
                <td>${data[key]}</td>
            `;
            table.appendChild(row);
        });
    }

    dataDisplay.appendChild(table);
}
function PromiseAPI1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch('https://dummyjson.com/posts')
                .then(response => response.json())
                .then(data => {
                    resolve(data);
                })
                .catch(error => {
                    console.error('Error fetching posts:', error);
                    reject(error);
                });
        }, 1000);
    });
}
function PromiseAPI2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch('https://dummyjson.com/products')
                .then(response => response.json())
                .then(data => {
                    resolve(data);
                })
                .catch(error => {
                    console.error('Error fetching products:', error);
                    reject(error);
                });
        }, 2000);
    });
}
function PromiseAPI3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch('https://dummyjson.com/todos')
                .then(response => response.json())
                .then(data => {
                    resolve(data);
                })
                .catch(error => {
                    console.error('Error fetching todos:', error);
                    reject(error);
                });
        }, 3000);
    });
}
