export class Todo {

	public id: number;
	public text: string;
	public complete: boolean;

	constructor( text: string ) {

		this.text = text;
		this.id = Math.floor(Math.random() * 1000000000000000) + 1;
		this.complete = false;

	}
	
}