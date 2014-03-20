#pragma strict
public var e : float;
function Start () {

}

function OnTriggerEnter(Collider){
	this.gameObject.transform.parent.gameObject.SendMessage("enterOil");
}

function OnTriggerExit(Collider){
	this.gameObject.transform.parent.gameObject.SendMessage("exitOil");
}
function Update () {

}