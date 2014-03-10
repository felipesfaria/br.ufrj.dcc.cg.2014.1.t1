#pragma strict
public var velocidadeX : float;
public var velocidadeRot : float;
var mooving; //1 = direita, 0 = nada, -1 esquerda
enum Raia {
	Esquerda = 0,
	Meio = 1,
	Direita = 2,
}
var ativo=false;
public var _raiaAtual : Raia;

function Start () {
	_raiaAtual=Raia.Meio;
	transform.position.x=0;
}

function Update () {
	
	if(ativo){ //Personagem esta mudando de faixa
		switch(_raiaAtual){
			case Raia.Esquerda://meio->esquerda
				if(transform.position.x>-2.7){
					transform.position.x-=velocidadeX;
				} else {
					ativo=false;
					transform.rotation *= Quaternion.Euler(0,velocidadeRot,0);
				}
				break;
			case Raia.Meio:
				if(transform.position.x>0){//direita->meio
					transform.position.x-=velocidadeX;
					if(transform.position.x<=0){
						transform.position.x=0;
						ativo=false;
						transform.rotation *= Quaternion.Euler(0,velocidadeRot,0);
					}
				} else {//esquerda->meio
					transform.position.x+=velocidadeX;
					if(transform.position.x>=0){
						transform.position.x=0;
						ativo=false;
						transform.rotation *= Quaternion.Euler(0,-velocidadeRot,0);
					}
				}
				break;
			case Raia.Direita://meio->direita
				if(transform.position.x<2.7){
					transform.position.x+=velocidadeX;
				} else {
					ativo=false;
					transform.rotation *= Quaternion.Euler(0,-velocidadeRot,0);
				}
				break;
			default:
			 break;
		}
		
	} else {//Personagem esta andando reto
		if(Input.GetKey(KeyCode.LeftArrow)){
			switch(_raiaAtual){
				case Raia.Esquerda:
					break;
				case Raia.Meio:
					transform.rotation *= Quaternion.Euler(0,-velocidadeRot,0);
					_raiaAtual=Raia.Esquerda;
					ativo=true;
					break;
				case Raia.Direita:
					transform.rotation *= Quaternion.Euler(0,-velocidadeRot,0);
					_raiaAtual=Raia.Meio;
					ativo=true;
					break;
				default:
				 break;
			}
		}
			//transform.rotation *= Quaternion.Euler(0,-1,0);
			
		if(Input.GetKey(KeyCode.RightArrow)){
			switch(_raiaAtual){
				case Raia.Esquerda:
					transform.rotation *= Quaternion.Euler(0,velocidadeRot,0);	
					_raiaAtual=Raia.Meio;
					ativo=true;
					break;
				case Raia.Meio:
					transform.rotation *= Quaternion.Euler(0,velocidadeRot,0);
					_raiaAtual=Raia.Direita;
					ativo=true;
					break;
				case Raia.Direita:
					break;
				default:
				 break;
			}
		}
			//transform.rotation *= Quaternion.Euler(0,1,0);
	}
}