$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault();

        const nomeTarefaNova = $('#nome-tarefa').val();
        const novaTarefa = $('<li id="task"></li>');

        $(`<td id="task_p">${nomeTarefaNova}</td>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
        $('#nome-tarefa').val('');

})
    $(document).on('click', function() {
        if ($(task_p).css('text-decoration-line') == "none")
            $(task_p).css('text-decoration-line', 'line-through');
        else
            $(task_p).css('text-decoration-line', 'none');
    })
})