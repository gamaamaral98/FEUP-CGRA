/**
 * MyObject
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class Myfloor extends CGFobject
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
			this.scene.translate(4.1,0,3.1);
			this.scene.scale(8, 0.1, 6);
			this.cubequad.display();
		this.scene.popMatrix();
	};
};
