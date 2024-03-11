export default class Queue {
	constructor(length) {
		this.que = [];
		this.max_capacity = length;
	}

	push(value) {
		if (this.que.length < this.max_capacity) {
			this.que.push(value);
		} else {
			console.log("Queue is full");
		}
	}

	pop() {
		let value = null;

		if (this.que.length > 0) {
			value = this.que.shift();
		} else {
			console.log("Queue is empty");
		}

		return value;
	}

	print(){
		for (let i = 0; i < this.que.length; i++) {
			console.log(this.que[i]);
		}
	}
}
