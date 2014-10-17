




var classSelect = function(userClass) {
	// Second if statement isn't entered until selection is made.
	window.selClass = 0;
	var confirmClass = confirm("Are you sure you want to be a " + userClass + "?");
	
	if (confirmClass) {
		window.selClass = userClass.toUpperCase();
	} else {
		//exit function. Reset on next call.
	}
	
	if (window.selClass != 0) {
	
	document.getElementById("show-class").innerHTML = "Current Class: " + selClass; // turn on display of Choice.

	if (window.selClass === "MONK") {

		var confirmMonk = confirm("Monks get either Improved Grapple or Stunning Fist as a bonus feat. Do you want Improved Grapple?");
		if (confirmMonk) {
			selectFeat("Improved Grapple");
			document.getElementById("feats-remaining").innerHTML = 1;
		} else {
			selectFeat("Stunning Fist");
			document.getElementById("feats-remaining").innerHTML = 1;
		}
	}
	
	if (window.selClass === "RANGER") {
		alert("Rangers get Track as a bonus feat.");
		selectFeat("Track");
		document.getElementById("feats-remaining").innerHTML = 1;
	}

	if (window.selClass === "FIGHTER") {
		var bonusFeat = document.getElementById("feats-remaining").innerHTML;
		var bonusFeatHolder = Number(bonusFeat);
		bonusFeatHolder += 1;
		document.getElementById("feats-remaining").innerHTML = bonusFeatHolder;
	}

	document.getElementById("class-select").style.display="none"; // hide select Class buttons.
	
	document.getElementById("race-select").style.display="block"; // show next block -- select race. 
	} else {
		// exit function. Reset on next call.
	}
}

var raceSelect = function(userRace) {
	// See comments of classSelect function
	window.selRace = 0;
	var confirmRace = confirm("Are you sure you want to be " + userRace + "?");
	
	if (confirmRace) {
		window.selRace = userRace.toUpperCase();
	} else {
		//exit function. Reset on next call.
	}
	
	if (window.selRace != 0) {
		
		document.getElementById("show-race").innerHTML = "Current Race: " + window.selRace;
		
		document.getElementById("race-select").style.display="none";
		
		document.getElementById("dice-sys").style.display="block";
		
		document.getElementById("race-bonus-" + (window.selRace.toLowerCase()) ).style.display="block"; // Display information block for this Race.
		
		if (window.selRace === "HUMAN") {
			var bonusFeat = document.getElementById("feats-remaining").innerHTML;
			var bonusFeatHolder = Number(bonusFeat);
			bonusFeatHolder += 1;
			document.getElementById("feats-remaining").innerHTML = bonusFeatHolder;
		}
	
	} else {
		// exit function. Reset on next call.
	}
}







var rollAttribute = function() {	
	var statValue = [0, 0, 0, 0, 0, 0];
	var totalPoints = 0;
	
	for( var i = 0 ; i < 6 ; i++ ) {
		statValue[i] = Math.floor(Math.random() * 16 + 3);
		document.getElementById("stat-val-" + (i + 1) ).innerHTML = statValue[i];
		document.getElementById("stat-label-" + (i + 1) ).innerHTML = statValue[i];
		totalPoints += statValue[i];
	}
	
	window.attrOne = statValue[0];
	window.attrTwo = statValue[1];
	window.attrThr = statValue[2];
	window.attrFou = statValue[3];
	window.attrFiv = statValue[4];
	window.attrSix = statValue[5];
	
	
	
	// Displays total points
	document.getElementById("total-points").innerHTML = totalPoints;
	// Evaluates total points, assigns a value string and displays.
	if (totalPoints > 90) {
		document.getElementById("playability").innerHTML = "Jedi";
	} else if (totalPoints > 72) {
		document.getElementById("playability").innerHTML = "Strong";
	} else if (totalPoints > 54) {
		document.getElementById("playability").innerHTML = "Average";
	} else if (totalPoints > 36) {
		document.getElementById("playability").innerHTML = "Weak";
	} else {
		document.getElementById("playability").innerHTML = "Useless as Dirt";
	}
	
	document.getElementById("roll-all").style.display = "none"; // disable to "prevent" cheating.
	
	// window.attrClicks = 0; // Declare variable for next function.
}
	
		
// FUNCTION NAMES USED THUS FAR

// Navigation comments 1/1

// classSelect    : stores character class as an All Uppercase String in [---> window.selClass <---]
// raceSelect     : same as above, except for Race choice, stored in     [---> selRace <---]
// buildAttribute : part 1 of an attribute rolling system. Variables:    [---> strVal <---]
//																		 [---> dexVal <---]
//																		 [---> conVal <---]
//																		 [---> wisVal <---]
//																		 [---> intVal <---]
//																		 [---> chaVal <---]
// rollAttribute  : generates six random numbers 3-18. Variables:		 [---> attrOne <---]
//																		 [---> attrTwo <---]
//																		 [---> attrThree <---]
//																		 [---> attrFour <---]
//																		 [---> attrFive <---]
//																		 [---> attrSix <---]
/*
var testResults = function(form) {
	var TestVar = form.attributeOne.value;
    alert ("You typed: " + TestVar);
} */


// -------------------------------------------------------------------
// ASSIGNING YOUR CHARACTER'S BASE ATTRIBUTES TO ROLLED ABILITY SCORES
// -------------------------------------------------------------------

// This array ... has been deleted.  



var logAllModifiers = function() {
	window.strMod = Math.floor( (window.strAttr - 10 ) / 2);
	window.dexMod = Math.floor( (window.dexAttr - 10 ) / 2);
	window.conMod = Math.floor( (window.conAttr - 10 ) / 2);
	window.wisMod = Math.floor( (window.wisAttr - 10 ) / 2);
	window.intMod = Math.floor( (window.intAttr - 10 ) / 2);
	window.chaMod = Math.floor( (window.chaAttr - 10 ) / 2);
}



var assignAttributes = function(form) {
	
	// Take in all form values
	window.nameAttrOne = form.attrOne.value;
	window.nameAttrTwo = form.attrTwo.value;
	window.nameAttrThr = form.attrThr.value;
	window.nameAttrFou = form.attrFou.value;
	window.nameAttrFiv = form.attrFiv.value;
	window.nameAttrSix = form.attrSix.value;
	
	// Store form values AND roll values (from above) in seperate Arrays.
	var allAttrNames = new Array(window.nameAttrOne, window.nameAttrTwo, window.nameAttrThr, window.nameAttrFou, window.nameAttrFiv, window.nameAttrSix);
	var allAttrValus = new Array(window.attrOne, window.attrTwo, window.attrThr, window.attrFou, window.attrFiv, window.attrSix);
	
	// ^ NOTE it's Valus NOT Values. 
	
	// Set to zero.
	window.strAttr = 0;
	window.dexAttr = 0;
	window.conAttr = 0;
	window.wisAttr = 0;
	window.intAttr = 0;
	window.chaAttr = 0;
	
	// Run through each NAME value and assign it the corresponding NUMBER value, so attributes are variables with number values.
	for ( var i = 0 ; i < 6 ; i++ ) {
		switch (allAttrNames[i]) {
		case "STR":
			window.strAttr = allAttrValus[i];
		break;
		case "DEX":
			window.dexAttr = allAttrValus[i];
		break;
		case "CON":
			window.conAttr = allAttrValus[i];
		break;
		case "WIS":
			window.wisAttr = allAttrValus[i];
		break;
		case "INT":
			window.intAttr = allAttrValus[i];
		break;
		case "CHA":
			window.chaAttr = allAttrValus[i];
		break;
		default:
			alert("An error occured. Verify that all Attributes are Allocated.");
			var i = 6; // Exit the function :P
		break;
		}
	}
	
	// Reject Errors, and prompt for confirm, else, throw out of the function to restart. 
	
	if (strAttr != 0 && dexAttr != 0 && conAttr != 0 && wisAttr != 0 && intAttr != 0 && chaAttr != 0) {
		var confAttr = confirm("Are you Sure?\nSTR: " + strAttr + "\nDEX: " + dexAttr + "\nCON: " + conAttr + "\nWIS: " + wisAttr + "\nINT: " + intAttr + "\nCHA: " + chaAttr);
		if (confAttr) {


//                     Tb.          Tb.                                
//                     :$$b.        $$$b.                              
//                     :$$$$b.      :$$$$b.                            
//                     :$$$$$$b     :$$$$$$b                           
//                      $$$$$$$b     $$$$$$$b                          
//                      $$$$$$$$b    :$$$$$$$b                         
//                      :$$$$$$$$b---^$$$$$$$$b                        
//                      :$$$$$$$$$b        ""^Tb                       
//                       $$$$$$$$$$b    __...__`.                      
//                       $$$$$$$$$$$b.g$$$$$$$$$pb                     
//                       $$$$$$$$$$$$$$$$$$$$$$$$$b                    
//                       $$$$$$$$$$$$$$$$$$$$$$$$$$b                   
//                       :$$$$$$$$$$$$$$$$$$$$$$$$$$;                  
//                       :$$$$$$$$$$$$$^T$$$$$$$$$$P;                  
//                       :$$$$$$$$$$$$$b  "^T$$$$P' :           
//                       :$$$$$$$$$$$$$$b._.g$$$$$p.db                 
//                       :$$$$$$$$$$$$$$$$$$$$$$$$$$$$;                
//                       :$$$$$$$$"""^^T$$$$$$$$$$$$P^;            Pay attention.       
//                       :$$$$$$$$       ""^^T$$$P^'  ;         A massive calamity is       
//                       :$$$$$$$$    .'       `"     ;            about to trans-    
//                       $$$$$$$$;   /                :                pire!
//                       $$$$$$$$;           .----,   :                
//                       $$$$$$$$;         ,"          ;               
//                       $$$$$$$$$p.                   |               
//                      :$$$$$$$$$$$$p.                :               
//                      :$$$$$$$$$$$$$$$p.            .'               
//                      :$$$$$$$$$$$$$$$$$$p...___..-"                 
//                      $$$$$$$$$$$$$$$$$$$$$$$$$;                     
//   .db.          bug  $$$$$$$$$$$$$$$$$$$$$$$$$$                     
//  d$$$$bp.            $$$$$$$$$$$$$$$$$$$$$$$$$$;                    
// d$$$$$$$$$$pp..__..gg$$$$$$$$$$$$$$$$$$$$$$$$$$$                    
//d$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$p._            .gp. 
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$p._.cuz._.batman


			
			logAllModifiers();					// Calculates all Ability Modifiers and Logs in Global Variables
			logMscSkModifiers();				// Shows all Racial Skill Misc Modifiers (and other racial bonuses) and re-calculates ability modifiers.
			addAbModifiers();					// Displays all Ability Modifiers in Skills Section
			showClassSkills();					// Shows all Class Skills
			logAllSavingThrows();				// Calculate Saving Throws and Base Attack Bonus. They Don't Display immediately.
			
			
			window.wSlotOne = { wExists: false};
			window.wSlotTwo = { wExists: false};
			window.wSlotThr = { wExists: false};
			window.aSlotOne = { wExists: false};
			window.aSlotTwo = { wExists: false};
			window.aSlotThr = { wExists: false};	// Setting equal to false, so if the user buys no weapons, they don't throw a prase error. 
			

			
			document.getElementById("apply-all").style.display = "none"; // disable to "prevent" cheating.
		} else {
			// Allow for further changes. Exit function.
		}
	} else {
		alert("An error occured. Verify that no Attributes are Duplicated.");
	}
}

// here the selRace function calls on logMscSkModifiers to update Misc Modifiers (and other variables) with Racial Bonuses
var logMscSkModifiers = function() {
	
	switch (window.selRace) {
	case "HUMAN":
		// Humans have no innate misc skill modifiers
	break;
	case "DWARF":
		alert("CON + 2 (Dwarven Racial Trait)\nCHA - 2 (Dwarven Racial Trait)");
		window.conAttr += 2;
		window.chaAttr -= 2;
		logAllModifiers();
	break;
	case "ELF":
		alert("DEX + 2 (Elven Racial Trait)\nCON - 2 (Elven Racial Trait)");
		window.dexAttr += 2;
		window.conAttr -= 2;
		logAllModifiers();
		document.getElementById("ms-list").innerHTML = 2;
		document.getElementById("ms-sear").innerHTML = 2;
		document.getElementById("ms-spot").innerHTML = 2;
	break;
	case "GNOME":
		alert("CON + 2 (Gnome Racial Trait)\nSTR - 2 (Gnome Racial Trait)");
		window.conAttr += 2;
		window.strAttr -= 2;
		logAllModifiers();
		document.getElementById("ms-list").innerHTML = 2;
		document.getElementById("ms-craf").innerHTML = 2;
	break;
	case "HALF-ELF":
		alert("DEX + 1 (Elven Racial Trait)\nCON - 1 (Elven Racial Trait)");
		document.getElementById("ms-list").innerHTML = 1;
		document.getElementById("ms-sear").innerHTML = 1;
		document.getElementById("ms-spot").innerHTML = 1;
		document.getElementById("ms-dipl").innerHTML = 2;
		document.getElementById("ms-gath").innerHTML = 2;
	break;
	case "HALF-ORC":
		alert("STR + 2 (Orcish Racial Trait)\nINT - 2 (Orcish Racial Trait)\nCHA - 2 (Orcish Racial Trait)");
		window.strAttr += 2;
		window.intAttr -= 2;
		window.chaAttr -= 2;
		logAllModifiers();
	break;
	case "HALFLING":
		alert("DEX + 2 (Halfling Racial Trait)\nSTR - 2 (Halfling Racial Trait)");
		window.dexAttr += 2;
		window.strAttr -= 2;
		logAllModifiers();
		document.getElementById("ms-clim").innerHTML = 2;
		document.getElementById("ms-jump").innerHTML = 2;
		document.getElementById("ms-move").innerHTML = 2;
		document.getElementById("ms-list").innerHTML = 2;
	break;
	case "NewBlankRace":
		// A placeholder for future racial additions. 
		//
		// This is the first place (in order of execution) where the value of window.selRace affects subsequent calculations. 
		//
	break;
	}
	
	// Now that the switch is done, and every score is in its final state, let's show them.
	document.getElementById("final-str").innerHTML = window.strAttr;
	document.getElementById("final-str-mod").innerHTML = ("+ " + window.strMod);
	document.getElementById("final-dex").innerHTML = window.dexAttr;
	document.getElementById("final-dex-mod").innerHTML = ("+ " + window.dexMod);
	document.getElementById("final-con").innerHTML = window.conAttr;
	document.getElementById("final-con-mod").innerHTML = ("+ " + window.conMod);
	document.getElementById("final-wis").innerHTML = window.wisAttr;
	document.getElementById("final-wis-mod").innerHTML = ("+ " + window.wisMod);
	document.getElementById("final-int").innerHTML = window.intAttr;
	document.getElementById("final-int-mod").innerHTML = ("+ " + window.intMod);
	document.getElementById("final-cha").innerHTML = window.chaAttr;
	document.getElementById("final-cha-mod").innerHTML = ("+ " + window.chaMod);
	
}

// -------------------------------------------------------------------
// COMPILE SKILL RANKS AND ABILITY SCORES
// -------------------------------------------------------------------

// Comment here.
// These 3 functions calculate and display the Character's Skills data.
// Class Skill status affects Max Ranks and Point Cost per Rank.
// ---

var whichSkillFunction = function(basePoints) {
	if (window.intMod > 0) {
		var skillPoints = ( (basePoints + window.intMod) * 4);
	} else {
		var skillPoints = (basePoints * 4);
	}
	
	if (window.selRace === "HUMAN") {
		var totalSkillPoints = skillPoints + 4;
	} else {
		var totalSkillPoints = skillPoints;
	}
			// "NewBlankRace"
			// A placeholder for future class additions. 
			//
			// This is the SECOND place (in order of execution) where the value of window.selRace affects subsequent calculations. 
			// 
	
	
	
	document.getElementById("sk-points-starting").innerHTML = ("Total Skill Points: " + totalSkillPoints); 
	window.skPts = totalSkillPoints;
	alert("Total Skill Points Calculated: " + window.skPts);
}
	
	
var calculateSkillPoints = function () {
	
	switch (window.selClass) {
		case "CLERIC":
		case "FIGHTER":
		case "PALADIN":
		case "SORCERER":
		case "WIZARD":
			whichSkillFunction(2);
		break;
		case "BARBARIAN":
		case "DRUID":
		case "MONK":
			whichSkillFunction(4);
		break;
		case "BARD":
		case "RANGER":
			whichSkillFunction(6);
		break;
		case "ROGUE":
			whichSkillFunction(8);
		break;
		case "NewBlankClass":
			// A placeholder for future class additions. 
			//
			// This is the SECOND place (in order of execution) where the value of window.selClass affects subsequent calculations. 
			// 
		break;
	}
}

var showClassSkills = function() {
	
	calculateSkillPoints();
	
	//First, basic data input based on class (first function above)
	switch (window.selClass) {
		case "BARBARIAN":
			//align with booleans below --appr---	bala---	bluf---	clim---	conc---	craf---	deci---	dipl---	disa---	disg---	esca---	forg---	gath---	hand---	heal---	hide---	inti---	jump---	know---	list---	move---	open---	perf---	prof---	ride---	sear---	sens---	slei---	spel---	spot---	surv---	swim---	tumb---	usem---	user
			window.allSkillsBool = new Array(false,	false,	false,	true, 	false,	true, 	false,	false,	false,	false,	false,	false,	false,	true, 	false,	false,	true, 	true, 	false,	true, 	false,	false,	false,	false,	true, 	false,	false,	false,	false,	false,	true, 	true, 	false,	false,	false);
		break;
		case "BARD":
			window.allSkillsBool = new Array(true, 	true, 	true, 	true, 	true, 	true, 	true, 	true, 	false,	true, 	true, 	true, 	true, 	false,	false,	true, 	false,	true, 	true, 	true, 	true, 	false,	true, 	true, 	false,	false,	true, 	true, 	true, 	false,	false,	true, 	true, 	true, 	false);
		break;
		case "CLERIC":
			window.allSkillsBool = new Array(false,	false,	false,	false,	true, 	true, 	false,	true, 	false,	false,	false,	false,	false,	false,	true, 	false,	false,	false,	true, 	false,	false,	false,	false,	true, 	false,	false,	false,	false,	true, 	false,	false,	false,	false,	false,	false);
		break;
		case "DRUID":
			window.allSkillsBool = new Array(false,	false,	false,	false,	true, 	true, 	false,	true, 	false,	false,	false,	false,	false,	true, 	true, 	false,	false,	false,	true, 	false,	false,	false,	false,	true, 	true, 	false,	false,	false,	true, 	true, 	true, 	true, 	false,	false,	false);
		break;
		case "FIGHTER":
			// data input was manual for testing rather than from /docs/base%20skills%20booleans.js file, so there are spaces instead of tabs.
			window.allSkillsBool = new Array(false, false, false, true,  false, true,  false, false, false, false, false, false, false, true,  false, false, true,  true,  false, false, false, false, false, false, true,  false, false, false, false, false, false, true,  false, false, false);
		break;
		case "MONK":
			window.allSkillsBool = new Array(false,	true, 	false,	true, 	true, 	true, 	false,	true, 	false,	false,	true, 	false,	false,	false,	false,	true, 	false,	true, 	true, 	true, 	true, 	false,	true, 	true, 	false,	false,	true, 	false,	false,	true, 	false,	true, 	true, 	false,	false);
		break;
		case "PALADIN":
			window.allSkillsBool = new Array(false,	false,	false,	false,	true, 	true, 	false,	true, 	false,	false,	false,	false,	false,	true, 	true, 	false,	false,	false,	true, 	false,	false,	false,	false,	true, 	true, 	false,	true, 	false,	false,	false,	false,	false,	false,	false,	false);
		break;
		case "RANGER":
			window.allSkillsBool = new Array(false,	false,	false,	true, 	true, 	true, 	false,	true, 	false,	false,	false,	false,	false,	true, 	true, 	true, 	false,	true, 	true, 	true, 	true, 	false,	false,	true, 	true, 	true, 	false,	false,	false,	true, 	true, 	true, 	false,	false,	true);
		break;
		case "ROGUE":
			window.allSkillsBool = new Array(true, 	true, 	true, 	true, 	false,	true, 	true, 	true, 	true, 	true, 	true, 	true, 	true, 	false,	false,	true, 	true, 	true, 	true, 	true, 	true, 	true, 	true, 	true, 	false,	true, 	true, 	true, 	false,	true, 	false,	true, 	true, 	true, 	true);
		break;
		case "SORCERER":
			window.allSkillsBool = new Array(false,	false,	true, 	false,	true, 	true, 	false,	false,	false,	false,	false,	false,	false,	false,	false,	false,	false,	false,	true, 	false,	false,	false,	false,	true, 	false,	false,	false,	false,	true, 	false,	false,	false,	false,	false,	false);
		break;
		case "WIZARD":
			window.allSkillsBool = new Array(false,	false,	false,	false,	true, 	true, 	true, 	false,	false,	false,	false,	false,	false,	false,	false,	false,	false,	false,	true, 	false,	false,	false,	false,	true, 	false,	false,	false,	false,	true, 	false,	false,	false,	false,	false,	false);
		break;
		case "NewBlankClass":
			// A placeholder for future class additions. 
			//
			// This is the first place (in order of execution) where the value of window.selClass affects subsequent calculations. 
			// 
		break;
	}

	var allSkillsString = new Array("appr", "bala", "bluf", "clim", "conc", "craf", "deci", "dipl", "disa", "disg", "esca", "forg", "gath", "hand", "heal", "hide", "inti", "jump", "know", "list", "move", "open", "perf", "prof", "ride", "sear", "sens", "slei", "spel", "spot", "surv", "swim", "tumb", "usem", "user");
	
	for ( var i = 0 ; i < 35 ; i++) {
		if (window.allSkillsBool[i]) {
			document.getElementById("c-" + allSkillsString[i]).innerHTML = "CLASS" ;
		} else {
			document.getElementById("c-" + allSkillsString[i]).innerHTML = "-";
		}
	}
}	


var updateSavingThrows = function(fortSave, reflSave, willSave, baseAttack, hitPoints) {
	/*
	window.forSave = (fortSave + window.conMod);
	window.refSave = (reflSave + window.dexMod);
	window.wilSave = (willSave + window.wisMod);
	*/
	window.forSave = (fortSave);
	window.refSave = (reflSave);
	window.wilSave = (willSave);
	window.baseAttackBonus = baseAttack; 
	window.hitPoints = hitPoints + window.conMod;

	alert( "Base Attack Bonus: +" + window.baseAttackBonus + "\nBase Saving Thows: \nFOR: +" + window.forSave + "\nREF: +" + window.refSave + "\nWIL: +" + window.wilSave + "\nHit Points: " + window.hitPoints );
}



var logAllSavingThrows = function() {
	
	switch (window.selClass) {
		case "CLERIC":
		case "DRUID":
			updateSavingThrows(2, 0, 2, 0, 8);
		break;
		case "SORCERER":
		case "WIZARD":
			updateSavingThrows(0, 0, 2, 0, 4);
		break;
		case "BARBARIAN":
			updateSavingThrows(2, 0, 0, 1, 12)
		break;
		case "FIGHTER":
		case "PALADIN":
			updateSavingThrows(2, 0, 0, 1, 10);
		break;
		case "MONK":
			updateSavingThrows(2, 2, 2, 0, 8);
		break;
		case "BARD":
			updateSavingThrows(0, 2, 2, 0, 6);
		break;
		case "RANGER":
			updateSavingThrows(2, 2, 0, 1, 8);
		break;
		case "ROGUE":
			updateSavingThrows(0, 2, 0, 0, 6);
		break;
		case "NewBlankClass":
			// A placeholder for future class additions. 
			//
			// This is the SECOND place (in order of execution) where the value of window.selClass affects subsequent calculations. 
			// 
		break;
	}

	

}


var calcPoints = function(form) {

	window.inappr = form.in_appr.value;
	window.inbala = form.in_bala.value;
	window.inbluf = form.in_bluf.value;
	window.inclim = form.in_clim.value;
	window.inconc = form.in_conc.value;
	window.incraf = form.in_craf.value;
	window.indeci = form.in_deci.value;
	window.indipl = form.in_dipl.value;
	window.indisa = form.in_disa.value;
	window.indisg = form.in_disg.value;
	window.inesca = form.in_esca.value;
	window.inforg = form.in_forg.value;
	window.ingath = form.in_gath.value;
	window.inhand = form.in_hand.value;
	window.inheal = form.in_heal.value;
	window.inhide = form.in_hide.value;
	window.ininti = form.in_inti.value;
	window.injump = form.in_jump.value;
	window.inknow = form.in_know.value;
	window.inlist = form.in_list.value;
	window.inmove = form.in_move.value;
	window.inopen = form.in_open.value;
	window.inperf = form.in_perf.value;
	window.inprof = form.in_prof.value;
	window.inride = form.in_ride.value;
	window.insear = form.in_sear.value;
	window.insens = form.in_sens.value;
	window.inslei = form.in_slei.value;
	window.inspel = form.in_spel.value;
	window.inspot = form.in_spot.value;
	window.insurv = form.in_surv.value;
	window.inswim = form.in_swim.value;
	window.intumb = form.in_tumb.value;
	window.inusem = form.in_usem.value;
	window.inuser = form.in_user.value;
	window.inbla1 = form.in_bla1.value;
	window.inbla2 = form.in_bla2.value;
	window.inbla3 = form.in_bla3.value;

	var skillsList = 	["appr", 	"bala", 	"bluf", 	"clim", 	"conc", 	"craf", 	"deci", 	"dipl", 	"disa", 	"disg", 	"esca", 	"forg", 	"gath", 	"hand", 	"heal", 	"hide", 	"inti", 	"jump", 	"know", 	"list", 	"move", 	"open", 	"perf", 	"prof", 	"ride", 	"sear", 	"sens", 	"slei", 	"spel", 	"spot", 	"surv", 	"swim", 	"tumb", 	"usem", 	"user"]; // 	"bla1", 	"bla2", 	"bla3" 
	var whichModList = 	["int", 	"dex", 		"cha", 		"str", 		"con", 		"int", 		"int", 		"cha", 		"int", 		"cha", 		"dex", 		"int", 		"cha", 		"cha", 		"wis", 		"dex", 		"cha", 		"str", 		"int", 		"wis", 		"dex", 		"dex", 		"cha", 		"wis", 		"dex", 		"int", 		"wis", 		"dex", 		"int", 		"wis", 		"wis", 		"str", 		"dex", 		"cha", 		"dex"];  // 	"none",		"none",		"none"
	// var untrained = [ true, 		true, 		true, 		true, 		true, 		true, 		false, 		true, 		false, 		true, 		true, 		true, 		true, 		false, 		true, 		true, 		true, 		true, 		false, 		true, 		true, 		false, 		false, 		false, 		true, 		true, 		true, 		false, 		false, 		true, 		true, 		true, 		false, 		false, 		true, 			true, 		true, 		true ]

	window.skillPointsSpent = 0;

	for ( i = 0 ; i < skillsList.length ; i++ ) {
		switch (whichModList[i]) {
			case "str": 
				var mod = window.strMod; 
			break;
			case "dex": 
				var mod = window.dexMod; 
			break;
			case "con": 
				var mod = window.conMod; 
			break;
			case "wis": 
				var mod = window.wisMod; 
			break;
			case "int": 
				var mod = window.intMod; 
			break;
			case "cha": 
				var mod = window.chaMod; 
			break;
			case "none":
				var mod = 0;
			break;
		}

		
		if (document.getElementById("ms-" + skillsList[i] ).innerHTML === "-") {
			var misc = 0;
		} else {
			var misc = Number(document.getElementById("ms-" + skillsList[i] ).innerHTML ) ;
		}

		if (window.allSkillsBool[i]) {
			var maths = Number(mod) + Number(misc) + Number(window["in" + skillsList[i] ] );
			document.getElementById("t-" + skillsList[i] ).innerHTML = ("+ " + maths ) ;
		} else {
			var maths = Number(mod) + Number(misc) + ( (Number(window["in" + skillsList[i] ] ) ) / 2 ) ;
			document.getElementById("t-" + skillsList[i] ).innerHTML = ("+ " + maths ) ;
		}

		window.skillPointsSpent += Number(window["in" + skillsList[i] ] ) ;

		// alert("SPENT/Window.skPts: " + window.skillPointsSpent + " " + window.skPts );

	}

	var dispSkillPoints = window.skPts - window.skillPointsSpent;

	document.getElementById("sk-points-starting").innerHTML = "Skill Points Remaining: " + dispSkillPoints ;

}


/*
if (untrained[i] === true) {
			document.getElementById("pr-" + skillsList[i]).innerHTML = document.getElementById("t-" + skillsList[i]).innerHTML ;
		} else if ( (window["in" + skillsList[i] ] ) > 0 ) {
			document.getElementById("pr-" + skillsList[i]).innerHTML = document.getElementById("t-" + skillsList[i]).innerHTML ;
		} else {
			document.getElementById("pr-" + skillsList[i]).innerHTML = " " ;
		}
*/





var addAbModifiers = function() {
	// alert("function begin");
	var listStr = document.getElementsByClassName("am-str");
	for ( var i = 0 ; i < listStr.length ; i++ ) {
		listStr[i].innerHTML = ("+ " + window.strMod);
	}
	var listDex = document.getElementsByClassName("am-dex");
	for ( var i = 0 ; i < listDex.length ; i++ ) {
		listDex[i].innerHTML = ("+ " + window.dexMod);
	}
	var listCon = document.getElementsByClassName("am-con");
	for ( var i = 0 ; i < listCon.length ; i++ ) {
		listCon[i].innerHTML = ("+ " + window.conMod);
	}
	var listWis = document.getElementsByClassName("am-wis");
	for ( var i = 0 ; i < listWis.length ; i++ ) {
		listWis[i].innerHTML = ("+ " + window.wisMod);
	}
	var listInt = document.getElementsByClassName("am-int");
	for ( var i = 0 ; i < listInt.length ; i++ ) {
		listInt[i].innerHTML = ("+ " + window.intMod);
	}
	var listCha = document.getElementsByClassName("am-cha");
	for ( var i = 0 ; i < listCha.length ; i++ ) {
		listCha[i].innerHTML = ("+ " + window.chaMod);
	}
}




var acceptSkills = function() {
	if (window.skPtsRemaining === 0) {
		var confirmAccSk = confirm("Are you sure you are finished allocating skill points?");
	} else if (window.skPtsRemaining > 0) {
		var confirmAccSk = confirm("You have unused skill points\nAre you sure you want to proceed?");
	} else {
		var confirmAccSk = confirm("You have used too many skill points\nAre you sure you want to proceed?");
	}
	
	if (confirmAccSk) {
		// document.getElementById("build").style.display = "none";
	}
}


var featHandler = function() {
	window.numOfFeats;
	if (window.numOfFeats === undefined) {
		window.numOfFeats = 0;
	}
	window.numOfFeats += 1;
}

var selectFeat = function(featName) {
	var confirmF = confirm("Select " + featName + "?");
	if (confirmF) {
		var featsRemaining = document.getElementById("feats-remaining").innerHTML ;
		var featsRemaining = Number(featsRemaining);
		if ( featsRemaining > 0) {
			featsRemaining -= 1;
			document.getElementById("feats-remaining").innerHTML = featsRemaining;
			featHandler();
			document.getElementById("feat-name-" + window.numOfFeats ).innerHTML = featName ;
		} else {
			var confirmR = confirm("You have no more feats available. Suffer the wrath of your DM and continue anyway?");
			if (confirmR) {
				featsRemaining -= 1;
				document.getElementById("feats-remaining").innerHTML = featsRemaining;
				featHandler();
				document.getElementById("feat-name-" + window.numOfFeats ).innerHTML = featName ;
			}
		}			
	}
}

var weaponFeat = function(featName) {
	var confirmW = confirm("Select " + featName + "?");
	if (confirmW) {
		var featsRemaining = document.getElementById("feats-remaining").innerHTML ;
		var featsRemaining = Number(featsRemaining);
		
		if ( featsRemaining > 0) {
			featsRemaining -= 1;
			document.getElementById("feats-remaining").innerHTML = featsRemaining;
			featHandler();
			var featTarget = prompt("Which weapon will this feat affect?");
			document.getElementById("feat-name-" + window.numOfFeats ).innerHTML = ( featName + " (" + featTarget + ") " ) ;
		} else {
			var confirmR = confirm("You have no more feats available. Suffer the wrath of your DM and continue anyway?");
			if (confirmR) {
				featsRemaining -= 1;
				document.getElementById("feats-remaining").innerHTML = featsRemaining;
				featHandler();
				var featTarget = prompt("Which weapon will this feat affect?");
				document.getElementById("feat-name-" + window.numOfFeats ).innerHTML = ( featName + " (" + featTarget + ") " ) ;
			}
		}		
	}
}

var skillFocus = function(featName) {

	var confirmW = confirm("Select Skill Focus?");
	if (confirmW) {
		var featsRemaining = document.getElementById("feats-remaining").innerHTML ;
		var featsRemaining = Number(featsRemaining);
		
		if ( featsRemaining > 0) {
			featsRemaining -= 1;
			document.getElementById("feats-remaining").innerHTML = featsRemaining;
			featHandler();
			alert("In order for the skills calculation to update properly, \n enter the skill name without spaces \n Example: UseRope");
			var featTarget = prompt("Which skill will this feat affect?");
			document.getElementById("feat-name-" + window.numOfFeats ).innerHTML = ( featName + " (" + featTarget + ") " ) ;
			decodeSkillFocus(featTarget);
		} else {
			var confirmR = confirm("You have no more feats available. Suffer the wrath of your DM and continue anyway?");
			if (confirmR) {
				featsRemaining -= 1;
				document.getElementById("feats-remaining").innerHTML = featsRemaining;
				featHandler();
				alert("In order for the skills calculation to update properly, \n enter the skill name without spaces \n Example: UseRope");
				var featTarget = prompt("Which skill will this feat affect?");

				document.getElementById("feat-name-" + window.numOfFeats ).innerHTML = ( featName + " (" + featTarget + ") " ) ;
				
				decodeSkillFocus(featTarget);
			}
		}		
	}
}


var decodeSkillFocus = function(featTarget) {

	var skName = featTarget.toLowerCase().substring(0,4);

	if (skName == "appr" || skName == "bala" || skName == "bluf" || skName == "clim" || skName == "conc" || skName == "craf" || skName == "deci" || skName == "dipl" || skName == "disa" || skName == "disg" || skName == "esca" || skName == "forg" || skName == "gath" || skName == "hand" || skName == "heal" || skName == "hide" || skName == "inti" || skName == "jump" || skName == "know" || skName == "list" || skName == "move" || skName == "open" || skName == "perf" || skName == "prof" || skName == "ride" || skName == "sear" || skName == "sens" || skName == "slei" || skName == "spel" || skName == "spot" || skName == "surv" || skName == "swim" || skName == "tumb" || skName == "usem" || skName == "user" ) {
		
		var msVariable = document.getElementById("ms-" + skName).innerHTML;

		if (msVariable === "-") {
			document.getElementById("ms-" + skName).innerHTML = 3;
		} else {
			var skillMisc = Number(document.getElementById("ms-" + skName).innerHTML);
			skillMisc += 3;
			document.getElementById("ms-" + skName).innerHTML = skillMisc;
		}
		

		// document.getElementById("ms-" + skName).innerHTML = 3;
	} else {
		var tryAgain = confirm(featTarget + " was not recognized. Press Okay to log it as a write-in. Press cancel to try again.");
		if (tryAgain) {
			// Log it as a write in. 
			alert("The code to do this has not been written.");
		} else {

			skillFocus("Skill Focus");
		}
	}

}






// OK OK I KNOW. THIS IS OVERLY COMPLEX. I'M TRYING TO TAKE INTO ACCOUNT WHETHER OTHER MISC. MODIFIERS 
// WILL BE ADDED LATER. MAYBE 1'S OR 3'S. HALF ELFS EVEN HAVE SOME ONES. SO ITS EXPANDABLE. 

var featUpdateSkill = function(featName) {


	var confirmF = confirm("Select " + featName + "?");
	if (confirmF) {
		var featsRemaining = document.getElementById("feats-remaining").innerHTML ;
		var featsRemaining = Number(featsRemaining);
		if ( featsRemaining > 0) {
			featsRemaining -= 1;
			var confirmR = true;
			document.getElementById("feats-remaining").innerHTML = featsRemaining;
			featHandler();
			document.getElementById("feat-name-" + window.numOfFeats ).innerHTML = featName ;
		} else {
			var confirmR = confirm("You have no more feats available. Suffer the wrath of your DM and continue anyway?");
			if (confirmR) {
				featsRemaining -= 1;
				document.getElementById("feats-remaining").innerHTML = featsRemaining;
				featHandler();
				document.getElementById("feat-name-" + window.numOfFeats ).innerHTML = featName ;
			}
		}			
	}

	if (confirmF || confirmR) {

		switch(featName) {
			case "Acrobatic":
				featUpdateSkillTwin("jump");
				featUpdateSkillTwin("tumb");
			break;
			case "Agile":
				featUpdateSkillTwin("bala");
				featUpdateSkillTwin("esca");
			break;
			case "Alertness":
				featUpdateSkillTwin("list");
				featUpdateSkillTwin("spot");
			break;
			case "Animal Affinity":
				featUpdateSkillTwin("hand");
				featUpdateSkillTwin("ride");
			break;
			case "Athletic":
				featUpdateSkillTwin("clim");
				featUpdateSkillTwin("swim");
			break;
			case "Deceitful":
				featUpdateSkillTwin("disg");
				featUpdateSkillTwin("forg");
			break;
			case "Deft Hands":
				featUpdateSkillTwin("slei");
				featUpdateSkillTwin("user");
			break;
			case "Diligent":
				featUpdateSkillTwin("appr");
				featUpdateSkillTwin("deci");
			break;
			case "Investigator":
				featUpdateSkillTwin("gath");
				featUpdateSkillTwin("sear");
			break;
			case "Magical Aptitude":
				featUpdateSkillTwin("spel");
				featUpdateSkillTwin("usem");
			break;
			case "Negotiator":
				featUpdateSkillTwin("dipl");
				featUpdateSkillTwin("sens");
			break;
			case "Nimble Fingers":
				featUpdateSkillTwin("disa");
				featUpdateSkillTwin("open");
			break;
			case "Persuasive":
				featUpdateSkillTwin("bluf");
				featUpdateSkillTwin("inti");
			break;
			case "Self-Sufficient":
				featUpdateSkillTwin("heal");
				featUpdateSkillTwin("surv");
			break;
			case "Stealthy":
				featUpdateSkillTwin("hide");
				featUpdateSkillTwin("move");
			break;
			case "Weapon Finesse":
				alert("Melee Attack Modifier has been changed to DEX.");
				window.weaponFinesse = true;
			break;
			case "Improved Initiative":
				window.improvedInitiative = true;
			break;

		}
		// document.getElementById("ms-clim").innerHTML = 2;
		
	}
}

var featUpdateSkillTwin = function(featShortCode) {
	var featUpdateMiscMod = document.getElementById("ms-" + featShortCode).innerHTML;
	if (featUpdateMiscMod === "-") { document.getElementById("ms-" + featShortCode).innerHTML = 2; } else {
		featUpdateMiscMod = Number(featUpdateMiscMod);
		featUpdateMiscMod += 2;
		document.getElementById("ms-jump").innerHTML = featUpdateMiscMod; 
	}
}







//	Treat	PLATINUM		=	1000
// 			GOLD 		= 	100
// 			SILVER 		= 	10
//			COPPER		=	1
//	

var calculateGold = function(mxFactor, fMonks) {	
	var startingGold = 0;
	for ( i = 0 ; i < mxFactor ; i++ ) {	// Roll a d4 [mxFactor] times.
		startingGold += ( Math.floor( Math.random() * 4 + 1) * fMonks ) * 100; // Calculate Number of Coppers in Possession. 
	}
	document.getElementById("copper-remaining").innerHTML = startingGold; // Display.
	document.getElementById("roll-starting-gold").style.display = "none" ; // Remove button to prevent repeats. 
}




var rollStartingGold = function () {
	switch (window.selClass) {
		
		case "DRUID":
			calculateGold(2, 10);
		break;
		
		case "SORCERER":
		case "WIZARD":
			calculateGold(3, 10);
		break;
		case "BARD":
		case "BARBARIAN":
			calculateGold(4, 10);
		break;
		case "CLERIC":
		case "ROGUE":
			calculateGold(5, 10);
		break;
		
		case "FIGHTER":
		case "PALADIN":
		case "RANGER":
			calculateGold(6, 10);
		break;
		case "MONK":
			calculateGold(5, 1);
		break;
		case "NewBlankClass":
			// A placeholder for future class additions. 
			//
			// This is the SECOND place (in order of execution) where the value of window.selClass affects subsequent calculations. 
			// 
		break;
	}
}


var buyItem = function(itemName, itemCost, itemWeight) {

	// alert("window item item-purchase-no :" + window.itemPurchaseNo);
	
	var goldRemaining = Number( document.getElementById("copper-remaining").innerHTML ) ;

	if (itemCost <= goldRemaining) {
		goldRemaining = goldRemaining - itemCost ;
		document.getElementById("copper-remaining").innerHTML = goldRemaining ;

		window.itemPurchaseNo;

		if (window.itemPurchaseNo === undefined) {
			window.itemPurchaseNo = 1;
			document.getElementById("item-purchase-no-" + window.itemPurchaseNo).innerHTML = itemName ;
			document.getElementById("item-purchase-no-" + window.itemPurchaseNo).style.display = "block" ;
			
			var totalWeight = Number(document.getElementById("total-weight").innerHTML);
			totalWeight += itemWeight;
			document.getElementById("total-weight").innerHTML = totalWeight;
						
			buySpecialItem(itemName, window.itemPurchaseNo);

		} else {
			window.itemPurchaseNo += 1;
			document.getElementById("item-purchase-no-" + window.itemPurchaseNo).innerHTML = itemName ;
			document.getElementById("item-purchase-no-" + window.itemPurchaseNo).style.display = "block" ;
			
			var totalWeight = Number(document.getElementById("total-weight").innerHTML);
			totalWeight += itemWeight;
			document.getElementById("total-weight").innerHTML = totalWeight;
			
			buySpecialItem(itemName, window.itemPurchaseNo);
		}		
	} else {
		alert("You cannot afford this item.") ;
	}
}

var buyItemStack = function(itemQty, itemName, itemCost, itemWeight) {
	var goldRemaining = Number( document.getElementById("copper-remaining").innerHTML ) ;

	if (itemCost <= goldRemaining) {
		goldRemaining = goldRemaining - itemCost ;
		document.getElementById("copper-remaining").innerHTML = goldRemaining ;
		
		var itemQuantity = Number(document.getElementById("qty-" + itemName).innerHTML );
				
		itemQuantity += itemQty ;

		document.getElementById("item-" + itemName).innerHTML = itemName ;
		document.getElementById("item-" + itemName).style.display = "block" ;
		
		document.getElementById("qty-" + itemName).innerHTML = itemQuantity ;
		document.getElementById("qty-" + itemName).style.display = "block" ;
			
		var totalWeight = Number(document.getElementById("total-weight").innerHTML);
		totalWeight += itemWeight;
		document.getElementById("total-weight").innerHTML = totalWeight;
		
	} else {
		alert("You cannot afford this item.") ;
	}
}


var buySpecialItem = function(itemName, itemNumber) {
	switch (itemName) { 
	case "Composite Longbow":			
		var confirmBow = prompt("Composite bows take a STR bonus. \n Input desired STR bonus. Cost is +100gp (10,000 CP) per point. \n Input a number.") ;
		goldRemaining = Number( document.getElementById("copper-remaining").innerHTML ) ;
		goldRemaining = goldRemaining - ( Number(confirmBow) * 10000 ) ;
		document.getElementById("item-purchase-no-" + itemNumber ).innerHTML = itemName + " (+" + confirmBow + ")" ;		
		document.getElementById("copper-remaining").innerHTML = goldRemaining ;
		
	break;		
	case "Composite Shortbow":
		var confirmBow = prompt("Composite bows take a STR bonus. \n Input desired STR bonus. Cost is +75gp (7,500 CP) per point. \n Input a number.") ;
		goldRemaining = Number( document.getElementById("copper-remaining").innerHTML ) ;
		goldRemaining = goldRemaining - ( Number(confirmBow) * 7500 ) ;
		document.getElementById("item-purchase-no-" + itemNumber ).innerHTML = itemName + " (+" + confirmBow + ")" ;		
		document.getElementById("copper-remaining").innerHTML = goldRemaining ;
	break;	
	}
}

var buyWeapon = function(weaponName, itemCost, itemWeight, dmg, crit, rang, type, size, reach, hardness, hp, saves, exs) {
	
	buyItem(weaponName, itemCost, itemWeight);

	window.weaponSlotOne;
	window.weaponSlotTwo;
	window.weaponSlotThree;


	if (window.weaponSlotOne === undefined) {
		var confirmW = confirm("Do you want to equip this weapon in slot one?");
	} else if (window.weaponSlotTwo === undefined) {
		var confirmX = confirm("Do you want to equip this weapon in slot two?");
	} else if (window.weaponSlotThree === undefined) {
		var confirmY = confirm("Do you want to equip this weapon in slot three?");
	} else {
		alert("You have no more open weapon slots. User added weapon slots are not supported in this version.");
	}

	function weaponSlot(paramone, paramtwo, paramthr, paramfou, paramfiv, paramsix, paramsev, parameig, paramnin, paramten, paramele, paramtwe) {
		this.wName = paramone;
		this.iWeight = paramtwo;
		this.damage = paramthr;
		this.critical = paramfou;
		this.range = paramfiv;
		this.wType = paramsix;
		this.wSize = paramsev;
		this.wReach = parameig;
		this.hardness = paramnin;
		this.hitPoints = paramten;
		this.wSaves = paramele;
		this.wExists = paramtwe;
	}
	
	if (confirmW) {
		window.wSlotOne = new weaponSlot(weaponName, itemWeight, dmg, crit, rang, type, size, reach, hardness, hp, saves, exs);
		window.weaponSlotOne = true;
	} 
	if (confirmX) {
		window.wSlotTwo = new weaponSlot(weaponName, itemWeight, dmg, crit, rang, type, size, reach, hardness, hp, saves, exs);
		window.weaponSlotTwo = true;
	} 
	if (confirmY) {
		window.wSlotThr = new weaponSlot(weaponName, itemWeight, dmg, crit, rang, type, size, reach, hardness, hp, saves, exs);
		window.weaponSlotThree = true;
	} 

}












var populateCharacterSheet = function() {
	
	var formName = document.getElementById("form-name").value;
	var formPlayer = document.getElementById("form-player").value;
	var formAlignment = document.getElementById("form-alignment").value;
	
	var formAppearance = document.getElementById("form-appearance").value;
	
	
	// document.getElementById("print-appearance").innerHTML = formAppearance ;
	
	document.getElementById("print-name").innerHTML = formName ;
	document.getElementById("print-player").innerHTML = formPlayer ;
	document.getElementById("print-alignment").innerHTML = formAlignment ;
	document.getElementById("print-class").innerHTML = window.selClass ;
	document.getElementById("print-level").innerHTML = 1 ;
	document.getElementById("print-experience").innerHTML = 0 ;
	document.getElementById("print-levelup").innerHTML = 1000 ;
	
	document.getElementById("print-ab-str").innerHTML = window.strAttr ;
	document.getElementById("print-ab-dex").innerHTML = window.dexAttr ;
	document.getElementById("print-ab-con").innerHTML = window.conAttr ;
	document.getElementById("print-ab-wis").innerHTML = window.wisAttr ;
	document.getElementById("print-ab-int").innerHTML = window.intAttr ;
	document.getElementById("print-ab-cha").innerHTML = window.chaAttr ;

	document.getElementById("print-sav-for").innerHTML = window.forSave ;
	document.getElementById("print-sav-ref").innerHTML = window.refSave ;
	document.getElementById("print-sav-wil").innerHTML = window.wilSave ;

	document.getElementById("print-sav-for-tot").innerHTML = ( window.forSave + window.conMod ) ;
	document.getElementById("print-sav-ref-tot").innerHTML = ( window.refSave + window.dexMod ) ;
	document.getElementById("print-sav-wil-tot").innerHTML = ( window.wilSave + window.wisMod ) ;
	// Because the totals are logged as the innerHTML of ID's, they can be accessed later
	// and updated if misc or magic modifiers affect them due to feat or other future rule additions
	// This should be done with a function calling this update to compile after this funciton
	// is finished executing. 

	document.getElementById("hit-points").innerHTML = window.hitPoints;

	
	
	var listStr = document.getElementsByClassName("print-mod-str");
	for ( var i = 0 ; i < listStr.length ; i++ ) {
		listStr[i].innerHTML = ("+ " + window.strMod); }

	var listDex = document.getElementsByClassName("print-mod-dex");
	for ( var i = 0 ; i < listDex.length ; i++ ) {
		listDex[i].innerHTML = ("+ " + window.dexMod); }

	var listCon = document.getElementsByClassName("print-mod-con");
	for ( var i = 0 ; i < listCon.length ; i++ ) {
		listCon[i].innerHTML = ("+ " + window.conMod);
	}
	var listWis = document.getElementsByClassName("print-mod-wis");
	for ( var i = 0 ; i < listWis.length ; i++ ) {
		listWis[i].innerHTML = ("+ " + window.wisMod);
	}
	var listInt = document.getElementsByClassName("print-mod-int");
	for ( var i = 0 ; i < listInt.length ; i++ ) {
		listInt[i].innerHTML = ("+ " + window.intMod);
	}
	var listCha = document.getElementsByClassName("print-mod-cha");
	for ( var i = 0 ; i < listCha.length ; i++ ) {
		listCha[i].innerHTML = ("+ " + window.chaMod);
	}




	var listBab = document.getElementsByClassName("print-bab-one");
	for ( var i = 0 ; i < listBab.length ; i++ ) {
		listBab[i].innerHTML = ("+ " + window.baseAttackBonus);
	}
	



	if (window.weaponFinesse === true) {
		document.getElementById("melee-attack-mod-title").innerHTML = ( "DEX<br>MODIFIER") ;
		document.getElementById("melee-attack-mod").innerHTML = window.dexMod ;
		document.getElementById("print-attack-first-one").innerHTML = ( window.baseAttackBonus + window.dexMod ) ;
	} else {
		document.getElementById("print-attack-first-one").innerHTML = ( window.baseAttackBonus + window.strMod ) ;
		document.getElementById("melee-attack-mod").innerHTML = window.strMod ;
	}

	document.getElementById("print-ranged-first-one").innerHTML = ( window.baseAttackBonus + window.dexMod ) ;
	document.getElementById("print-grapple-tot").innerHTML = ( window.baseAttackBonus + window.strMod ) ;


	if (window.improvedInitiative === true) {
		window.iniMiscMod = 4; // This is so it can be modified later if need be. 
		document.getElementById("print-ini-misc").innerHTML = window.iniMiscMod ;
		document.getElementById("print-ini-tot").innerHTML = ( window.iniMiscMod + window.dexMod ) ;
	} else {
		document.getElementById("print-ini-tot").innerHTML = window.dexMod ;
	}
	


	

	// Now watch as I print all the skill totals
	var skillsList = ["appr", "bala", "bluf", "clim", "conc", "craf", "deci", "dipl", "disa", "disg", "esca", "forg", "gath", "hand", "heal", "hide", "inti", "jump", "know", "list", "move", "open", "perf", "prof", "ride", "sear", "sens", "slei", "spel", "spot", "surv", "swim", "tumb", "usem", "user" ];
	var untrained =  [true, true, true, true, true, true, false, true, false, true, true, true, true, false, true, true, true, true, false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, false, true ];
	for ( i = 0 ; i < skillsList.length ; i++ ) {
		if (untrained[i] === true) {
			document.getElementById("pr-" + skillsList[i] ).innerHTML = document.getElementById("t-" + skillsList[i] ).innerHTML ;
		} else if ( (window["in" + skillsList[i] ] ) > 0 ) {
			document.getElementById("pr-" + skillsList[i] ).innerHTML = document.getElementById("t-" + skillsList[i] ).innerHTML ;
		} else {
			document.getElementById("pr-" + skillsList[i] ).innerHTML = " " ;
		}

	}


	// alert(window.strAttr);

	// calculateCarryingCapacity(window.strAttr);

	// window.weaponSlotOne = [weaponName, itemCost, itemWeight, dmg, crit, rang, type, size, reach, hardness, hp, saves];
	
	// alert("object value: " + window.wSlotOne.wExists);
	
	
	if (window.wSlotOne.wExists) {
		alert("it found it true");
		document.getElementById("pr-w-s1-name").innerHTML = window.wSlotOne.wName;
		document.getElementById("pr-w-s1-weight").innerHTML = window.wSlotOne.iWeight;
		document.getElementById("pr-w-s1-dmg").innerHTML = window.wSlotOne.damage;
		document.getElementById("pr-w-s1-crit").innerHTML = window.wSlotOne.critical;
		document.getElementById("pr-w-s1-rang").innerHTML = window.wSlotOne.range;
		document.getElementById("pr-w-s1-type").innerHTML = window.wSlotOne.wType;
		document.getElementById("pr-w-s1-size").innerHTML = window.wSlotOne.wSize;
		document.getElementById("pr-w-s1-reach").innerHTML = window.wSlotOne.wReach;
		document.getElementById("pr-w-s1-hardn").innerHTML = window.wSlotOne.hardness;
		document.getElementById("pr-w-s1-hp").innerHTML = window.wSlotOne.hitPoints;
		document.getElementById("pr-w-s1-saves").innerHTML = window.wSlotOne.wSaves;
	}
	
	if (window.wSlotTwo.wExists) {
		alert("it found TWO true");
		document.getElementById("weapon-slot-two").style.display = "block";
		document.getElementById("pr-w-s2-name").innerHTML = window.wSlotTwo.wName;
		document.getElementById("pr-w-s2-weight").innerHTML = window.wSlotTwo.iWeight;
		document.getElementById("pr-w-s2-dmg").innerHTML = window.wSlotTwo.damage;
		document.getElementById("pr-w-s2-crit").innerHTML = window.wSlotTwo.critical;
		document.getElementById("pr-w-s2-rang").innerHTML = window.wSlotTwo.range;
		document.getElementById("pr-w-s2-type").innerHTML = window.wSlotTwo.wType;
		document.getElementById("pr-w-s2-size").innerHTML = window.wSlotTwo.wSize;
		document.getElementById("pr-w-s2-reach").innerHTML = window.wSlotTwo.wReach;
		document.getElementById("pr-w-s2-hardn").innerHTML = window.wSlotTwo.hardness;
		document.getElementById("pr-w-s2-hp").innerHTML = window.wSlotTwo.hitPoints;
		document.getElementById("pr-w-s2-saves").innerHTML = window.wSlotTwo.wSaves;
	}
	
	if (window.wSlotThr.wExists) {
		alert("it found Three true");
		document.getElementById("weapon-slot-thr").style.display = "block";
		document.getElementById("pr-w-s3-name").innerHTML = window.wSlotThr.wName;
		document.getElementById("pr-w-s3-weight").innerHTML = window.wSlotThr.iWeight;
		document.getElementById("pr-w-s3-dmg").innerHTML = window.wSlotThr.damage;
		document.getElementById("pr-w-s3-crit").innerHTML = window.wSlotThr.critical;
		document.getElementById("pr-w-s3-rang").innerHTML = window.wSlotThr.range;
		document.getElementById("pr-w-s3-type").innerHTML = window.wSlotThr.wType;
		document.getElementById("pr-w-s3-size").innerHTML = window.wSlotThr.wSize;
		document.getElementById("pr-w-s3-reach").innerHTML = window.wSlotThr.wReach;
		document.getElementById("pr-w-s3-hardn").innerHTML = window.wSlotThr.hardness;
		document.getElementById("pr-w-s3-hp").innerHTML = window.wSlotThr.hitPoints;
		document.getElementById("pr-w-s3-saves").innerHTML = window.wSlotThr.wSaves;
	}
	
	alert("it got through them all.");

}


var calculateCarryingCapacity = function(strengthScore) {
	/*

	Carrying Capacity (for a human):
	If your Strength score is 10 or less, your heavy load limit is 10 lbs. * Strength.
	If your Strength score is 10 or greater, your heavy load limit is 25 lbs. * 2^(0.2 * Strength).

	(Both formulas give the same result for a Strength of 10.)

	Your light load limit is 1/3 your heavy load limit.
	Your medium load limit is 2/3 your heavy load limit.
	Apply appropriate multipliers for different sizes, body types, etc
	
	*/
	
	if (strengthScore <= 10) {
		window.heavyLoad = Math.floor(strengthScore * 10);
	} else if (strengthScore <= 20) {
		window.heavyLoad = Math.floor(25 * Math.pow(2, (0.2 * strengthScore) ) ) ;
	} else {
		alert("The code for this strength condition has not been written.");
		window.heavyLoad = 6;
	}
	window.mediumLoad = Math.floor((2 * heavyLoad) / 3);
	window.lightLoad =  Math.floor(heavyLoad / 3);

	document.getElementById("print-weight-total").innerHTML = document.getElementById("total-weight").innerHTML;
	document.getElementById("print-heavy-load").innerHTML = window.heavyLoad;
	document.getElementById("print-medium-load").innerHTML = window.mediumLoad;
	document.getElementById("print-light-load").innerHTML = window.lightLoad;
	document.getElementById("print-lift-load").innerHTML = ( window.heavyLoad * 2 );
	document.getElementById("print-push-load").innerHTML = ( window.heavyLoad * 5 );

}













































