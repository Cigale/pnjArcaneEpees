import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material';

@Component({
  selector: 'app-generate-pnj',
  templateUrl: './generate-pnj.component.html',
  styleUrls: ['./generate-pnj.component.css']
})
export class GeneratePnjComponent implements OnInit {

	name: string;
	cost: number;
	pnjXp: string;

  constructor() { }

  ngOnInit() {
		this.cost = 0;
		this.pnjXp = "apprenti";
		this.updateCost(null);
	}

	updateCost(event: MatSelectChange) {
		switch(this.pnjXp) {
			case "apprenti" : this.cost = 5;
			break;
			case "debutant" : this.cost = 10;
			break;
			case "confirme" : this.cost = 20;
			break;
			case "expert" : this.cost = 50;
			break;
			case "maitre" : this.cost = 100;
			break;
			default : this.cost = 0;
			break;
		}

		console.log("change pnjXp to : " + this.pnjXp);
	}

}
