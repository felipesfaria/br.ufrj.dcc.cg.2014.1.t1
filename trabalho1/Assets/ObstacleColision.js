#pragma strict

private var path : GameObject;

function Start () {
 path = GameObject.Find("path");
}

function OnTriggerEnter(Collider){
	Debug.Log("Colidi!");
	path.gameObject.SendMessage("die");
}

function Update () {

}