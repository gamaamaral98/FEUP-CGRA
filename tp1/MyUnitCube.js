/**
 * MyObject
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyUnitCube extends CGFobject
{
	constructor(scene) 
	{
		super(scene);
		this.initBuffers();
	};

	initBuffers() 
	{
		this.vertices = [
		//4 vértices que tem Z positivo
			0.5, 0.5, 0.5, //0
			-0.5, 0.5, 0.5, //1
			0.5, -0.5, 0.5, //2
			-0.5, -0.5, 0.5, //3
		//4 vértices com Z negativo
			0.5, 0.5, -0.5, //4
			-0.5, 0.5, -0.5, //5
			0.5, -0.5, -0.5, //6
			-0.5, -0.5, -0.5, //7
			];

		this.indices = [
				5, 4, 6,
				6, 7, 5, //Face de Z negativo

				2, 0, 1,
				1, 3, 2, //Face de Z positivo

				1, 0, 4,
				4, 5, 1, //Face de Y positivo

				6, 2, 3,
				3, 7, 6, //Face de Y negativo

				4, 0, 2,
				2, 6, 4, //Face positiva de X

				3, 1, 5,
				5, 7, 3, //Face negativa de X

			];
			
		this.primitiveType=this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};
