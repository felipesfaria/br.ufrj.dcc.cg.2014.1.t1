#pragma strict

function Start () {

}

function OnTriggerExit(Collider) {
	this.gameObject.transform.parent.gameObject.SendMessage("moveGround");
}

function Update () {
	
}