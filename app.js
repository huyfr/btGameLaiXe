function Mario(image, width, height, left, top)
{
    this.image=image;
    this.width=width;
    this.height=height;
    this.left=left;
    this.top=top;
    this.speed=70;

    this.getTop=function ()
    {
        return this.top;
    };

    this.getLeft=function ()
    {
        return this.left;
    };

    this.getHeight=function ()
    {
        return this.height;
    };

    this.getWidth=function ()
    {
        return this.width;
    };

    this.moveRight=function ()
    {
        this.left=this.left+this.speed;
    };

    this.moveLeft=function ()
    {
        this.left=this.left-this.speed;
    };

    this.moveUp=function ()
    {
        this.top=this.top-this.speed;
    };

    this.moveDown=function ()
    {
        this.top=this.top+this.speed;
    };

    this.createCharacter=function ()
    {
        return '<img width="'+this.width+'"'+'height="'+this.height+'"'+'src="'+this.image+'"'+'style="top:'+this.top+'px;left:'+this.left+'px;position:absolute;"/>';
    };
}

function Turtle(image, width, height, left, top)
{
    this.image=image;
    this.width=width;
    this.height=height;
    this.left=left;
    this.top=top;

    this.createTurtle=function ()
    {
        return '<img width="'+this.width+'"'+'height="'+this.height+'"'+'src="'+this.image+'"'+'style="top:'+this.top+'px;left:'+this.left+'px;position:absolute;"/>';
    };
}

let turtle=new Turtle("pictures/rua.png",100,100,500,400);
let mario=new Mario("pictures/mario.png",100,100,50,50);

function createMario()
{
    document.getElementById("mario").innerHTML=mario.createCharacter();
}

function createTurtle()
{
    document.getElementById("turtle").innerHTML=turtle.createTurtle();
}

function characterMoves(evt)
{
    switch (evt.keyCode)
    {
        case 37:
            if (mario.getLeft()>0)
            {
                mario.moveLeft();
                createMario();
                checkLose();
            }
            break;
        case 38:
            if (mario.getTop()>0)
            {
                mario.moveUp();
                createMario();
                checkLose();
            }
            break;
        case 39:
            if (mario.getLeft()<1024)
            {
                mario.moveRight();
                createMario();
                checkLose();
            }
            break;
        case 40:
            if (mario.getTop()<768)
            {
                mario.moveDown();
                createMario();
                checkLose();
            }
            break;
    }
}

function checkLose()
{
   if (turtle.left === (mario.left + mario.getWidth()) && turtle.top === mario.getTop())
   {
        console.log("LOSE!");
   }
}

function startGame()
{
    createMario();
    createTurtle();
    window.addEventListener("keydown", characterMoves);
}