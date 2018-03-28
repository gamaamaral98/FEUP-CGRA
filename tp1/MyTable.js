/**
 * MyObject
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyTable extends CGFobject
{
	constructor(scene) 
	{
		super(scene);
		this.cubequad=new MyUnitCubeQuad(scene);
		this.cubequad.initBuffers();
	};

	display()
	{
		//Tampo
		this.scene.pushMatrix();
			this.scene.translate(0,3.6,0);
			this.scene.scale(5, 0.3, 3);
			this.cubequad.display();
		this.scene.popMatrix();

		//Perna da frente esquerda
		this.scene.pushMatrix();
			this.scene.translate(-2.3, 1.75, 1.3);
    		this.scene.scale(0.3, 3.5, 0.3);
    		this.cubequad.display();
		this.scene.popMatrix();

		//Perna da frente direita
		this.scene.pushMatrix();
			this.scene.translate(-2.3,1.75,-1.3);
			this.scene.scale(0.3,3.5,0.3);
			this.cubequad.display();
		this.scene.popMatrix();

		//Perna de trás esquerda
		this.scene.pushMatrix();
			this.scene.translate(2.3,1.75,1.3);
			this.scene.scale(0.3,3.5,0.3);
			this.cubequad.display();
		this.scene.popMatrix();

		//Perna de trás direita
		this.scene.pushMatrix();
			this.scene.translate(2.3,1.75,-1.3);
			this.scene.scale(0.3,3.5,0.3);
			this.cubequad.display();
		this.scene.popMatrix();
	};
};
