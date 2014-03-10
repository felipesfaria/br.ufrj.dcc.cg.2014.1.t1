#pragma strict

function Start () {

}

function OnTriggerEnter(Collider){
	this.gameObject.transform.parent.gameObject.SendMessage("enterWater");
}

function OnTriggerExit(Collider){
	this.gameObject.transform.parent.gameObject.SendMessage("exitWater");
}
function Update () {

}