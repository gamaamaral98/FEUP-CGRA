/**
 * MyCilinder
 * @constructor
 */
class MyCilinder extends CGFobject
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
		let normX1, normY1;
		let normX2, normY2;

		let i, j;
		var alpha = 0; 
		var ang = 2*Math.PI/this.slices;

		let stack = 0; 

		for(j = 0; j < 1; j++){

			for(i = 0; i < this.slices; i++){

				this.vertices.push(Math.cos(alpha), Math.sin(alpha), stack);
				this.vertices.push(Math.cos(alpha), Math.sin(alpha), stack+1);

				normX1 = Math.cos(alpha);
				normY1 = Math.sin(alpha);

				alpha += ang;

				this.vertices.push(Math.cos(alpha), Math.sin(alpha), stack);
				this.vertices.push(Math.cos(alpha), Math.sin(alpha), stack+1);

				normX2 = Math.cos(alpha);
				normY2 = Math.sin(alpha);
				
				verts += 4;

				this.normals.push(normX1, normY1, 0);
				this.normals.push(normX1, normY1, 0);
				this.normals.push(normX2, normY2, 0);
				this.normals.push(normX2, normY2, 0);

				if( j > 0 ){
					this.indices.push(verts-3, verts-2, verts-1);
				}else{
					this.indices.push(verts-3, verts-2, verts-1);
					this.indices.push(verts-4, verts-2, verts-3);
				}
			}
			stack += 1/this.stacks;	
		}
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};
