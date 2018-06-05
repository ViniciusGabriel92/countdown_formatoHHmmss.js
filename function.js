<html>
    <head>
        <title>JS</title>
    </head>

    <body>

        <input alt="Tempo" id="txtTempo">

        <script>
           


            function convertMinsToHoursMins(current_minutes, seconds){
                        let h = Math.floor(current_minutes / 60);
                        let m = current_minutes % 60;
                        let s = seconds;

                        h = h < 10 ? "0" + h : h;
                        m = m < 10 ? "0" + m : m;
                        s = s < 10 ? "0" + s : s;

                        return h + ":" + m + ":" + s;
            }

            function countdown(minutes){

                let seconds = 60;
                var mins = minutes;

                    function tick(){

                        let current_minutes = mins -1;
                        seconds--;
                        //console.log(current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + seconds.toString());
                        console.log(convertMinsToHoursMins(current_minutes, seconds));
                        document.getElementById("txtTempo").setAttribute("value", convertMinsToHoursMins(current_minutes, seconds));

                        if(seconds > 0){
                            setTimeout(tick, 1000)
                        }
                        else{
                            if(mins > 1){
                                countdown(mins-1)
                            }
                        }
                    }

                    tick();
            }

            countdown(120);
            
        </script>
    </body>
</html
