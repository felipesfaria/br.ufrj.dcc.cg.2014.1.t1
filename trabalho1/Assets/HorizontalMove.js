#pragma strict

var mooving; //1 = direita, 0 = nada, -1 esquerda
var raia; // da esquerda para direita: 1, 2 e 3

function Start () {

}

function Update () {
	
	if(mooving == 1 && (transform.position.x >= 2.5 || transform.position.x <= -2.5 || transform.position.x == 0))
	
	if(mooving == 1)
		transform.position.x += Time.deltaTime;
	
	if(Input.GetKey(KeyCode.UpArrow))
		transform.position += transform.forward*Time.deltaTime;
	if(Input.GetKey(KeyCode.DownArrow))
		transform.position -= transform.forward*Time.deltaTime;
	if(Input.GetKey(KeyCode.LeftArrow))
		transform.rotation *= Quaternion.Euler(0,-1,0);
	if(Input.GetKey(KeyCode.RightArrow))
		transform.rotation *= Quaternion.Euler(0,1,0);
}