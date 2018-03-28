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

		//exercício adicional
		this.materialMadeira = new CGFappearance(this.scene);
		this.materialMadeira.setAmbient(0.3,0.3,0.3,1);
		this.materialMadeira.setDiffuse(0.5,0.25,0.25,1);
		this.materialMadeira.setSpecular(0.1,0.1,0.1,1);
		this.materialMadeira.setShininess(120);

		this.materialMetal = new CGFappearance(this.scene);
		this.materialMetal.setAmbient(0.3,0.3,0.3,1);
		this.materialMetal.setDiffuse(0.5,0.5,0.5,1);
		this.materialMetal.setSpecular(12,12,12,1);
		this.materialMetal.setShininess(120);
	};	

	display()
	{
		//Tampo
		this.scene.pushMatrix();
			this.scene.translate(0,3.6,0);
			this.scene.scale(5, 0.3, 3);
			this.materialMadeira.apply();
			this.cubequad.display();
		this.scene.popMatrix();

		//Perna da frente esquerda
		this.scene.pushMatrix();
			this.scene.translate(-2.3, 1.75, 1.3);
    		this.scene.scale(0.3, 3.5, 0.3);
    		this.materialMetal.apply();
    		this.cubequad.display();
		this.scene.popMatrix();

		//Perna da frente direita
		this.scene.pushMatrix();
			this.scene.translate(-2.3,1.75,-1.3);
			this.scene.scale(0.3,3.5,0.3);
			this.materialMetal.apply();
			this.cubequad.display();
		this.scene.popMatrix();

		//Perna de trás esquerda
		this.scene.pushMatrix();
			this.scene.translate(2.3,1.75,1.3);
			this.scene.scale(0.3,3.5,0.3);
			this.materialMetal.apply();
			this.cubequad.display();
		this.scene.popMatrix();

		//Perna de trás direita
		this.scene.pushMatrix();
			this.scene.translate(2.3,1.75,-1.3);
			this.scene.scale(0.3,3.5,0.3);
			this.materialMetal.apply();
			this.cubequad.display();
		this.scene.popMatrix();
	};
};
