$(function(){
    var JSTimer;
    var remainingTime;
    function UpdateDescription(){
        if(remainingTime > 0) {
            if(remainingTime == 1)
                $("#txtDescription").html("SECOND LEFT")
            else
                $("#txtDescription").html("SECONDS LEFT")
        } else {
            $("#txtDuration").html("X")
            $("#txtDescription").html("TIME'S UP!")
            clearInterval(JSTimer);

        }
    }
    function Pulsate(){
        if(remainingTime <= 10){
            $("#txtDuration").removeClass('animated bounceIn faster')
            setTimeout(()=>{
                $("#txtDuration").addClass('animated bounceIn faster')
            }, 20)
        }
    }
    function UpdateTime(){
        tmp = $("#duration").val()
        remainingTime = tmp-1
        $("#duration").val(remainingTime)
        $("#txtDuration").html(remainingTime)
        Pulsate()
        UpdateDescription()
    }
    $("#start").click(()=>{
        clearInterval(JSTimer)
        JSTimer = setInterval(UpdateTime, 1000)
    });
    $("#stop").click(()=>{
        clearInterval(JSTimer)
    });
    $("#duration").on('input', ()=>{
        console.log('hello')
        remainingTime = $("#duration").val()
        $("#txtDuration").html($("#duration").val())
        UpdateDescription()
    })
});