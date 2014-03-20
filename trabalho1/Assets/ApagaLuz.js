#pragma strict
private var luz : GameObject;

function Start () {
	luz = GameObject.Find("Directional light");
}

function OnTriggerEnter(Collider){
	Debug.Log("apaga luz!");
	luz.light.intensity = 0.08;
}

function OnTriggerExit(Collider){
	luz.light.intensity = 0.24;
}

function Update () {

}