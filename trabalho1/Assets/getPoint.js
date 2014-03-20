#pragma strict
var startX : float;
private var player : GameObject;
function Start () {
	startX=transform.position.x;
 	player = GameObject.Find("player");
}

function OnTriggerEnter(Collider){
	this.gameObject.transform.parent.gameObject.SendMessage("getPoint");
}
var x1=13.85611;
var x2=10.62703;
var x3=16.96642;
function OnTriggerExit(Collider){
	transform.position.z+=7;
	transform.position.x=startX+Random.Range(0,2)*2.5;
}
function Update () {
	if(transform.position.z<player.transform.position.z){
		transform.position.z+=7;
		transform.position.x=startX+Random.Range(0,3)*3;
		
	}

}