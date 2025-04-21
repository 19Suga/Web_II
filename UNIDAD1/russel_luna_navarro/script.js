document.addEventListener('DOMContentLoaded', () => {
    const newItemInput = document.querySelector('#newItem');
    const addBtn = document.querySelector('#addBtn');
    const taskList = document.querySelector('#taskList');
    const toggleBtn = document.querySelector('#toggleBtn');
    const countBtn = document.querySelector('#countBtn');
    const outputDiv = document.querySelector('#output');
    
    addBtn.addEventListener('click', () => {
        const taskText = newItemInput.value.trim();
        if (!taskText) {
            alert('Por favor ingresa una tarea');
            return;
        }
        // aqui agrego elemento
        const newItem = document.createElement('li');
        newItem.className = 'item';
        newItem.textContent = taskText;
        newItem.dataset.completed = 'false'; 
        // se elimina
        newItem.addEventListener('dblclick', (e) => {
            e.target.remove();
        });
        // clase relleno
        newItem.addEventListener('click', (e) => {
            const item = e.target;
            const isCompleted = item.dataset.completed === 'true';
            
            item.dataset.completed = !isCompleted;
            item.classList.toggle('relleno', !isCompleted);
        });
        taskList.appendChild(newItem);
        // limpiar  
        newItemInput.value = '';
    });
    // tachar
    toggleBtn.addEventListener('click', () => {
        }
    );
    // tatal tareas
    countBtn.addEventListener('click', () => {
    });
    newItemInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addBtn.click();
        }
    });
});