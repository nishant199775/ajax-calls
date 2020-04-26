$(()=>
{
    $("#addbtn").click(()=>
    {
        $.post("/todos/",{task:$("task").val()},(data)=>
        {
            for(todo of data)
            {
                $("#tasklist").append("<li>"+data.task+"</li>")
            }
        })
    })
})