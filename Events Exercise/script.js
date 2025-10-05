document.addEventListener('DOMContentLoaded' , function() {
    const boxContainer = document.getElementById('box-container');
    const newBoxButton = document.getElementById('new-box-button');
    const colorForm = document.getElementById('color-form');
    const colorInput = document.getElementById('color-input');

    let boxColor = null;
    let boxCounter = 0;

    function addNewBox ()
    {
        const box = document.createElement('div');
        box.setAttribute('box-id', boxCounter.toString());
        box.textContent = `Box ${boxCounter}`;
        box.className = "box";
        box.style.backgroundColor = boxColor;
        boxContainer.appendChild(box);

        boxCounter++;
    }

    colorForm.addEventListener('submit', function(event)
    {
        event.preventDefault();

        const newColor = colorInput.value.trim();
        const boxes = document.querySelectorAll('.box');
        for (const box of boxes)
        {
            box.style.backgroundColor = newColor;
        }

        colorInput.value = '';

        boxColor = newColor;
    });

    newBoxButton.addEventListener('click', function()
    {
        addNewBox();
    });

    document.addEventListener('dblclick', function(event)
    {
        if (event.target.classList.contains('box'))
        {event.target.remove()};
    });

    document.addEventListener('mouseover', function(event) 
    {
        if (event.target.classList.contains('box'))
        { event.target.textContent = `x: ${event.pageX}, y: ${event.pageY}`}
    });

    document.addEventListener('mouseout', function(event) 
    {
        if (event.target.classList.contains('box'))
        {
            const boxID = event.target.getAttribute('box-id');
            event.target.textContent = `Box ${boxID}`;
        }
    });

    window.addEventListener('keydown', function()
    {  
        if( event.target.id === 'color-input')
        {
            return;
        }

        if ( event.key === 'n' || event.key === 'N')
        {
            addNewBox();
        }
    });
});