#pragma strict
public var ground1 : GameObject;
public var ground2 : GameObject;
public var trigger : GameObject;
public var estado;

function Start () {
	estado=1;
}

function Update () {

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