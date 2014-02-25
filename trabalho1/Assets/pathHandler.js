#pragma strict
public var ground1 : GameObject;
public var ground2 : GameObject;
public var estado;
function Start () {
	estado=1;
}

function Update () {

}

function teste(){
	if(estado==1){
		estado=2;
		var move=ground1.transform.position.z-ground2.transform.position.z;
		Debug.Log("scale "+ground1.transform.localScale.z);
		Debug.Log("Move "+move);
		ground1.transform.position+=Vector3(0,0,-move*2);
	}else if(estado==2){
		estado=1;
		ground2.transform.position+=Vector3(0,0,100);
	}
	
}