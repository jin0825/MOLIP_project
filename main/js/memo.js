document.querySelectorAll('.toolbar a')
.forEach(aE1 => aE1.addEventListener('click', function(e) {
    e.preventDefault();
    const command = aE1.dataset.command;

    if (command == 'h2' || command == 'h3' || command == 'h4')
    {
        document.execCommand('formatBlock', false, command);
    }
    else
    {
        document.execCommand(command);
    }
}));