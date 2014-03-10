public var ground1 : GameObject;
public var ground2 : GameObject;
public var trigger : GameObject;
public var player : GameObject;

public var blackTexture : Texture2D;

//Qual cenario esta embaixo do personagem
public var estado;


//Variaveis para placar
var points : int=0;
var pointsPerUnit : int=1;
var pointsPerToken : int=5;

//Variaveis de Controle de execuçao
private var vivo = true;

//Variaveis de inicializaçao
private var startPosPlayer;


function Start () {
	estado=1;
}

function Update () {
	if(Input.GetKeyDown("f")){
		Debug.Log("Fim!");
		vivo=false;
		player.SendMessage("parar");
	}
}

function enterWater(){
	player.SendMessage("enterWater");
}

function exitWater(){
	player.SendMessage("exitWater");
}

function moveGround(){
	var planeSize = ground1.transform.localScale.z*10;

	if(estado==1){
		estado=2;
		ground1.transform.position+=Vector3(0,0,planeSize*2);
		trigger.transform.position+=Vector3(0,0,planeSize*2);
	}else if(estado==2){
		estado=1;
		ground2.transform.position+=Vector3(0,0,planeSize*2);
		trigger.transform.position+=Vector3(0,0,planeSize*2);
	}
	
}

function pontuarPasso(){
	if(vivo)
		points+=pointsPerUnit;
}

function OnGUI(){
	if(vivo){
    	GUI.Label(Rect(10,10,Screen.width,Screen.height),"Pontos:"+points);
    }else{
    
    	GUI.DrawTexture(new Rect(0,0,Screen.width,Screen.height), blackTexture); 
		GUI.color = Color.red;
    	GUI.Label(Rect(Screen.width/2-20,Screen.height/2-20,Screen.width,Screen.height),"Voce morreu!\nMas nao fique triste,\nvoce fez "+points+" pontos!");
		if(GUI.Button(Rect(Screen.width/2-20,Screen.height/2+50,100,30), "Recomeçar")){
			Debug.Log("Recomeçar!!");
			reset();
		}
    	
    }
}

function reset(){
	points=0;
	vivo=true;
	player.SendMessage("comecar");
}