import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelectChange, MatListSubheaderCssMatStyler } from '@angular/material';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-generate-pnj',
  templateUrl: './generate-pnj.component.html',
  styleUrls: ['./generate-pnj.component.css']
})
export class GeneratePnjComponent implements OnInit {

	competences: Array<Competence>;
	masteries: Array<string>;
	competence_1 = new Competence("");
	competence_2 = new Competence("");
	competence_3 = new Competence("");
	name: string;
	cost: number;
	time: string;
	zone: string;
	methode: string;
  constructor() {
		
	}

  ngOnInit() {
		this.cost = 0;
		this.time = "0";

		this.competences = new Array<Competence>();

		var comp = new Competence("Espion");
		var spe_list = new Array<string>();
		spe_list.push("Agent dormant");
		spe_list.push("Agent actif");
		spe_list.push("Propagandiste");
		comp.specialisation_list = spe_list;
		this.competences.push(comp);

		comp = new Competence("Diplomate");
		spe_list = new Array<string>();
		spe_list.push("Courtisan");
		spe_list.push("Ambassadeur");
		spe_list.push("Démagogue");
		comp.specialisation_list = spe_list;
		this.competences.push(comp);

		comp = new Competence("Combattant");
		spe_list = new Array<string>();
		spe_list.push("Garde du corps");
		spe_list.push("Duelliste");
		spe_list.push("Maître d'arme");
		spe_list.push("Archer");
		spe_list.push("Vétéran");
		comp.specialisation_list = spe_list;
		this.competences.push(comp);

		comp = new Competence("Voleur");
		spe_list = new Array<string>();
		spe_list.push("Cambrioleur");
		spe_list.push("Pickpocket");
		spe_list.push("Bandit de grand chemin");
		comp.specialisation_list = spe_list;
		this.competences.push(comp);

		comp = new Competence("Commandant");
		spe_list = new Array<string>();
		spe_list.push("Amiral");
		spe_list.push("Commandant de cavalerie");
		spe_list.push("Commandant d'archerie");
		spe_list.push("Commandant d'infanterie");
		spe_list.push("Stratège");
		comp.specialisation_list = spe_list;
		this.competences.push(comp);

		comp = new Competence("Assassin");
		spe_list = new Array<string>();
		spe_list.push("Empoisonneur");
		spe_list.push("Acrobate");
		spe_list.push("Maître du déguisement");
		comp.specialisation_list = spe_list;
		this.competences.push(comp);

		comp = new Competence("Marchand");
		spe_list = new Array<string>();
		spe_list.push("Négociant");
		spe_list.push("Maître de caravane");
		spe_list.push("Négociant des ombres");
		comp.specialisation_list = spe_list;
		this.competences.push(comp);

		comp = new Competence("Érudit");
		spe_list = new Array<string>();
		spe_list.push("Magicien");
		spe_list.push("Enseignant");
		spe_list.push("Chroniqueur");
		spe_list.push("Ingénieur");
		spe_list.push("Prêtre");
		spe_list.push("Écrivain");
		comp.specialisation_list = spe_list;
		this.competences.push(comp);

		comp = new Competence("Médecin");
		spe_list = new Array<string>();
		spe_list.push("Apothicaire");
		spe_list.push("Chirurgien");
		spe_list.push("Généraliste");
		spe_list.push("Médecin de guerre");
		comp.specialisation_list = spe_list;
		this.competences.push(comp);

		comp = new Competence("Artisan");
		spe_list = new Array<string>();
		spe_list.push("Forgeron");
		spe_list.push("Travailleur de bois");
		spe_list.push("Brasseur");
		spe_list.push("Architecte");
		spe_list.push("Travailleur du cuir");
		comp.specialisation_list = spe_list;
		this.competences.push(comp);

		comp = new Competence("Pisteur");
		spe_list = new Array<string>();
		spe_list.push("Chasseur");
		spe_list.push("Éclaireur");
		spe_list.push("Dresseur");
		comp.specialisation_list = spe_list;
		this.competences.push(comp);

		comp = new Competence("Artiste plasticien");
		spe_list = new Array<string>();
		spe_list.push("Peintre");
		spe_list.push("Sculpteur");
		comp.specialisation_list = spe_list;
		this.competences.push(comp);

		comp = new Competence("Artiste du spectacle");
		spe_list = new Array<string>();
		spe_list.push("Troudabour");
		spe_list.push("Artiste de rue");
		spe_list.push("Poète");
		spe_list.push("Comédien");
		spe_list.push("Compositeur");
		comp.specialisation_list = spe_list;
		this.competences.push(comp);

		comp = new Competence("Administrateur");
		spe_list = new Array<string>();
		spe_list.push("Juriste");
		spe_list.push("Shérif");
		spe_list.push("Maire");
		comp.specialisation_list = spe_list;
		this.competences.push(comp);

		this.masteries = new Array<string>();
		this.masteries.push("Apprenti");
		this.masteries.push("Débutant");
		this.masteries.push("Confirmé");
		this.masteries.push("Expert");
		this.masteries.push("Maître");
	}

	selectCompetence() {

		this.competences.forEach(comp => {
			if(this.competence_1 != null && comp.name == this.competence_1.name)	{
				comp.selected = true;
			} else if(this.competence_2 != null && comp.name == this.competence_2.name) {
				comp.selected = true;
			} else if(this.competence_3 != null && comp.name == this.competence_3.name) {
				comp.selected = true;
			} else {
				comp.selected = false;
			}
		});
	}

}

export class Competence {
	name: string;
	selected: boolean
	mastery: string;
	specialisation_1: string;
	specialisation_2: string;
	specialisation_list: Array<string>;

	constructor(name: string) {
		this.name = name;
		this.specialisation_list = new Array<string>();
		this.selected = false;
	}

}
