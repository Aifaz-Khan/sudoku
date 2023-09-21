var numselector=null;
var tileselector=null;

var errors=0;

var board=[
    "-3--8---1",
    "--74-1-5-",
    "9---5-2--",
    "--2--5-1-",
    "3--21-5--",
    "59--6---2",
    "--65-2---",
    "--96---27",
    "-----8-65"
]

var solution=[
    "235986741",
    "687421953",
    "914357286",
    "472835619",
    "368219574",
    "591764832",
    "146572398",
    "859643127",
    "723198465"
]
window.onload=function(){
    setgame();
}
function setgame(){
    for(let i=1; i<=9; i++){
        let number=document.createElement("div");
        number.id=i
        number.addEventListener("click",selectnumber);
        number.innerText=i;
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);

    }
        // board 9x9
        for(let r = 0; r < 9;r++){
            for(let c=0; c<9; c++){
                let tile=document.createElement("div");
                tile.id = r.toString() + "-" + c.toString();
               if(board[r][c] !="-"){
                tile.innerText = board[r][c];
                tile.classList.add("tile-star");
               }
               if(r==2 || r==5){
                tile.classList.add("horizontal-line");
               }
               if(c==2 || c==5){
                tile.classList.add("vertical-line");
               }
                tile.addEventListener("click",selecttile);
                tile.classList.add("tile");
                document.getElementById("board").append(tile);
            }
        }
    }
    let numselected=null;
    function selectnumber(){
        if(numselected !== null) {
            numselected.classList.remove("number-selected");
        }
        numselected = this;
        numselected.classList.add("number-selected");
    }
    function selecttile(){
        if(numselected){
            if(this.innerText != ""){
                return;
            }
           this.innerText=numselected.id ;

           let coords=this.id.split("-");
           let r=parseInt(coords[0]);
           let c=parseInt(coords[1]);
           if(solution[r][c]==numselected.id){
            this.innerText==numselected.id;
           }
           else{
            errors+=1;
            document.getElementById("errors").innerText=errors;

           }
        }
    }
