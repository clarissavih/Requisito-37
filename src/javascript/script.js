const draggableElement = document.getElementById('draggable-1');

    draggableElement.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', 'Arrastável');
    });

