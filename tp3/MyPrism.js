/**
 * MyPrism
 * @constructor
 */
class MyPrism extends CGFobject
{
	constructor(scene,slices,stacks) 
	{
		super(scene);

		this.slices = slices;
		this.stacks = stacks;

		this.initBuffers();
	};

	initBuffers() 
	{
		this.vertices = [];
		this.indices = [];
		this.normals = [];
		let verts = 0;
		let normX, normY;

		let i, j;
		var alpha = 0; 
		var ang = 2*Math.PI/this.slices;

		let stack = 0; 

		for(j = 0; j < 1; j++){

			for(i = 0; i < this.slices; i++){

				this.vertices.push(Math.cos(alpha), Math.sin(alpha), stack);
				this.vertices.push(Math.cos(alpha), Math.sin(alpha), stack+1);

				alpha += ang/2;

				normX = Math.cos(alpha);
				normY = Math.sin(alpha);

				alpha += ang/2;

				this.vertices.push(Math.cos(alpha), Math.sin(alpha), stack);
				this.vertices.push(Math.cos(alpha), Math.sin(alpha), stack+1);

				verts += 4;

				this.normals.push(normX, normY, 0);
				this.normals.push(normX, normY, 0);
				this.normals.push(normX, normY, 0);
				this.normals.push(normX, normY, 0);

				this.indices.push(verts-3, verts-2, verts-1);
				this.indices.push(verts-4, verts-2, verts-3);
			}
			stack += 1/this.stacks;	
		}
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};
