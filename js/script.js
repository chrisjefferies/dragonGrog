




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


			
			logAllModifiers();			// Calculates all Ability Modifiers and Logs in Global Variables
			logMscSkModifiers();		// Shows all Racial Skill Misc Modifiers (and other racial bonuses) and re-calculates ability modifiers.
			addAbModifiers();			// Displays all Ability Modifiers in Skills Section
			showClassSkills();			// Shows all Class Skills
			
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
			var allSkillsBool = new Array(false,	false,	false,	true, 	false,	true, 	false,	false,	false,	false,	false,	false,	false,	true, 	false,	false,	true, 	true, 	false,	true, 	false,	false,	false,	false,	true, 	false,	false,	false,	false,	false,	true, 	true, 	false,	false,	false);
		break;
		case "BARD":
			var allSkillsBool = new Array(true, 	true, 	true, 	true, 	true, 	true, 	true, 	true, 	false,	true, 	true, 	true, 	true, 	false,	false,	true, 	false,	true, 	true, 	true, 	true, 	false,	true, 	true, 	false,	false,	true, 	true, 	true, 	false,	false,	true, 	true, 	true, 	false);
		break;
		case "CLERIC":
			var allSkillsBool = new Array(false,	false,	false,	false,	true, 	true, 	false,	true, 	false,	false,	false,	false,	false,	false,	true, 	false,	false,	false,	true, 	false,	false,	false,	false,	true, 	false,	false,	false,	false,	true, 	false,	false,	false,	false,	false,	false);
		break;
		case "DRUID":
			var allSkillsBool = new Array(false,	false,	false,	false,	true, 	true, 	false,	true, 	false,	false,	false,	false,	false,	true, 	true, 	false,	false,	false,	true, 	false,	false,	false,	false,	true, 	true, 	false,	false,	false,	true, 	true, 	true, 	true, 	false,	false,	false);
		break;
		case "FIGHTER":
			// data input was manual for testing rather than from /docs/base%20skills%20booleans.js file, so there are spaces instead of tabs.
			var allSkillsBool = new Array(false, false, false, true,  false, true,  false, false, false, false, false, false, false, true,  false, false, true,  true,  false, false, false, false, false, false, true,  false, false, false, false, false, false, true,  false, false, false);
		break;
		case "MONK":
			var allSkillsBool = new Array(false,	true, 	false,	true, 	true, 	true, 	false,	true, 	false,	false,	true, 	false,	false,	false,	false,	true, 	false,	true, 	true, 	true, 	true, 	false,	true, 	true, 	false,	false,	true, 	false,	false,	true, 	false,	true, 	true, 	false,	false);
		break;
		case "PALADIN":
			var allSkillsBool = new Array(false,	false,	false,	false,	true, 	true, 	false,	true, 	false,	false,	false,	false,	false,	true, 	true, 	false,	false,	false,	true, 	false,	false,	false,	false,	true, 	true, 	false,	true, 	false,	false,	false,	false,	false,	false,	false,	false);
		break;
		case "RANGER":
			var allSkillsBool = new Array(false,	false,	false,	true, 	true, 	true, 	false,	true, 	false,	false,	false,	false,	false,	true, 	true, 	true, 	false,	true, 	true, 	true, 	true, 	false,	false,	true, 	true, 	true, 	false,	false,	false,	true, 	true, 	true, 	false,	false,	true);
		break;
		case "ROGUE":
			var allSkillsBool = new Array(true, 	true, 	true, 	true, 	false,	true, 	true, 	true, 	true, 	true, 	true, 	true, 	true, 	false,	false,	true, 	true, 	true, 	true, 	true, 	true, 	true, 	true, 	true, 	false,	true, 	true, 	true, 	false,	true, 	false,	true, 	true, 	true, 	true);
		break;
		case "SORCERER":
			var allSkillsBool = new Array(false,	false,	true, 	false,	true, 	true, 	false,	false,	false,	false,	false,	false,	false,	false,	false,	false,	false,	false,	true, 	false,	false,	false,	false,	true, 	false,	false,	false,	false,	true, 	false,	false,	false,	false,	false,	false);
		break;
		case "WIZARD":
			var allSkillsBool = new Array(false,	false,	false,	false,	true, 	true, 	true, 	false,	false,	false,	false,	false,	false,	false,	false,	false,	false,	false,	true, 	false,	false,	false,	false,	true, 	false,	false,	false,	false,	true, 	false,	false,	false,	false,	false,	false);
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
		if (allSkillsBool[i]) {
			document.getElementById("c-" + allSkillsString[i]).innerHTML = "CLASS: 4" ;
		} else {
			document.getElementById("c-" + allSkillsString[i]).innerHTML = "2";
		}
	}
}	


var updateSkillPoints = function(form) {
	// $('.sk-input').change(function(){
	// var allInputVariables = {in_appr: , in_bala: , in_bluf: , in_clim: , in_conc: , in_craf: , in_deci: , in_dipl: , in_disa: , in_disg: , in_esca: , in_forg: , in_gath: , in_hand: , in_heal: , in_hide: , in_inti: , in_jump: , in_know: , in_list: , in_move: , in_open: , in_perf: , in_prof: , in_ride: , in_sear: , in_sens: , in_slei: , in_spel: , in_spot: , in_surv: , in_swim: , in_tumb: , in_usem: , in_user: , in_bla1: , in_bla2: , in_bla3: };
	
	// Take in all form data
	var inappr = form.in_appr.value;
	var inbala = form.in_bala.value;
	var inbluf = form.in_bluf.value;
	var inclim = form.in_clim.value;
	var inconc = form.in_conc.value;
	var incraf = form.in_craf.value;
	var indeci = form.in_deci.value;
	var indipl = form.in_dipl.value;
	var indisa = form.in_disa.value;
	var indisg = form.in_disg.value;
	var inesca = form.in_esca.value;
	var inforg = form.in_forg.value;
	var ingath = form.in_gath.value;
	var inhand = form.in_hand.value;
	var inheal = form.in_heal.value;
	var inhide = form.in_hide.value;
	var ininti = form.in_inti.value;
	var injump = form.in_jump.value;
	var inknow = form.in_know.value;
	var inlist = form.in_list.value;
	var inmove = form.in_move.value;
	var inopen = form.in_open.value;
	var inperf = form.in_perf.value;
	var inprof = form.in_prof.value;
	var inride = form.in_ride.value;
	var insear = form.in_sear.value;
	var insens = form.in_sens.value;
	var inslei = form.in_slei.value;
	var inspel = form.in_spel.value;
	var inspot = form.in_spot.value;
	var insurv = form.in_surv.value;
	var inswim = form.in_swim.value;
	var intumb = form.in_tumb.value;
	var inusem = form.in_usem.value;
	var inuser = form.in_user.value;
	var inbla1 = form.in_bla1.value;
	var inbla2 = form.in_bla2.value;
	var inbla3 = form.in_bla3.value;
	
	//var skPts = ( inappr + inbala + inbluf + inclim + inconc + incraf + indeci + indipl + indisa + indisg + inesca + inforg + ingath + inhand + inheal + inhide + ininti + injump + inknow + inlist + inmove + inopen + inperf + inprof + inride + insear + insens + inslei + inspel + inspot + insurv + inswim + intumb + inusem + inuser + inbla1 + inbla2 + inbla3 );
	
	var skPtsUsed = ( Number(inappr) + Number(inbala) + Number(inbluf) + Number(inclim) + Number(inconc) + Number(incraf) + Number(indeci) + Number(indipl) + Number(indisa) + Number(indisg) + Number(inesca) + Number(inforg) + Number(ingath) + Number(inhand) + Number(inheal) + Number(inhide) + Number(ininti) + Number(injump) + Number(inknow) + Number(inlist) + Number(inmove) + Number(inopen) + Number(inperf) + Number(inprof) + Number(inride) + Number(insear) + Number(insens) + Number(inslei) + Number(inspel) + Number(inspot) + Number(insurv) + Number(inswim) + Number(intumb) + Number(inusem) + Number(inuser) + Number(inbla1) + Number(inbla2) + Number(inbla3) );
	// alert("inappr " + inappr + "\ninbluf " + inbluf + "\nskPts = " + skPts);
		
	window.skPtsRemaining = window.skPts - skPtsUsed;
	
	document.getElementById("sk-points-starting").innerHTML = ("Skill Points Remaining: " + (window.skPts - skPtsUsed )) ; 	
	
	if (skPtsRemaining === 0) {
		document.getElementById("skills-finish").style.display = "block";
	} else {}
	
	//____________________________________________________________________________________
	// --- This First one, Appraise, is written Un-Minified for ease of later editing. 
	//
	// --- Each function relies on a 4 character string ( here: "appr" ) which appears
	//	   17 times in each. 
	//
	// --- It also relies on two occurances of the relevant modifier's 3 letter string
	// 	   ("str", "dex", etc) which appear without quotes as part of a window.XXXMod 
	//	   variable. 
	//____________________________________________________________________________________
	var apprInClass = document.getElementById("c-appr").innerHTML;
	var apprMscMod = document.getElementById("ms-appr").innerHTML;
	if (apprMscMod === "-") {
		var apprMscMod = 0;						// set equal to zero if element value is "-" (default)
	} else {
		var apprMscMod = Number(apprMscMod);	// else, try to convert to a number
	}
	if (apprInClass === "CLASS: 4") {			// If it is a class skill
		var tappr = (window.intMod) + ( Number(inappr) ) + (apprMscMod);
	} else {
		var tappr = (window.intMod) + ( Number(inappr) / 2 ) + (apprMscMod);
	}
	document.getElementById("t-appr").innerHTML = ("+ " + (tappr)) ;
	//____________________________________________________________________________________
	var balaInClass = document.getElementById("c-bala").innerHTML;
	var balaMscMod = document.getElementById("ms-bala").innerHTML;
	if (balaMscMod === "-") { var balaMscMod = 0;} else {var balaMscMod = Number(balaMscMod);}	// set equal to zero if element value is "-" (default)else, try to convert to a number
	if (balaInClass === "CLASS: 4") { var tbala = (window.dexMod) + ( Number(inbala) ) + (balaMscMod); } else { var tbala = (window.dexMod) + ( Number(inbala) / 2 ) + (balaMscMod); } // Whether or not it is a class skill
	document.getElementById("t-bala").innerHTML = ("+ " + (tbala)) ;
	//____________________________________________________________________________________
	var blufInClass = document.getElementById("c-bluf").innerHTML;
	var blufMscMod = document.getElementById("ms-bluf").innerHTML;
	if (blufMscMod === "-") { var blufMscMod = 0;} else {var blufMscMod = Number(blufMscMod);}	// set equal to zero if element value is "-" (default)else, try to convert to a number
	if (blufInClass === "CLASS: 4") { var tbluf = (window.chaMod) + ( Number(inbluf) ) + (blufMscMod); } else { var tbluf = (window.chaMod) + ( Number(inbluf) / 2 ) + (blufMscMod); } // Whether or not it is a class skill
	document.getElementById("t-bluf").innerHTML = ("+ " + (tbluf)) ;
	//____________________________________________________________________________________
	var climInClass = document.getElementById("c-clim").innerHTML;
	var climMscMod = document.getElementById("ms-clim").innerHTML;
	if (climMscMod === "-") { var climMscMod = 0;} else {var climMscMod = Number(climMscMod);}	// set equal to zero if element value is "-" (default)else, try to convert to a number
	if (climInClass === "CLASS: 4") { var tclim = (window.strMod) + ( Number(inclim) ) + (climMscMod); } else { var tclim = (window.strMod) + ( Number(inclim) / 2 ) + (climMscMod); } // Whether or not it is a class skill
	document.getElementById("t-clim").innerHTML = ("+ " + (tclim)) ;
	//____________________________________________________________________________________
	var concInClass = document.getElementById("c-conc").innerHTML;
	var concMscMod = document.getElementById("ms-conc").innerHTML;
	if (concMscMod === "-") { var concMscMod = 0;} else {var concMscMod = Number(concMscMod);}	// set equal to zero if element value is "-" (default)else, try to convert to a number
	if (concInClass === "CLASS: 4") { var tconc = (window.conMod) + ( Number(inconc) ) + (concMscMod); } else { var tconc = (window.conMod) + ( Number(inconc) / 2 ) + (concMscMod); } // Whether or not it is a class skill
	document.getElementById("t-conc").innerHTML = ("+ " + (tconc)) ;
	//____________________________________________________________________________________
	var crafInClass = document.getElementById("c-craf").innerHTML;
	var crafMscMod = document.getElementById("ms-craf").innerHTML;
	if (crafMscMod === "-") { var crafMscMod = 0;} else {var crafMscMod = Number(crafMscMod);}	// set equal to zero if element value is "-" (default)else, try to convert to a number
	if (crafInClass === "CLASS: 4") { var tcraf = (window.intMod) + ( Number(incraf) ) + (crafMscMod); } else { var tcraf = (window.intMod) + ( Number(incraf) / 2 ) + (crafMscMod); } // Whether or not it is a class skill
	document.getElementById("t-craf").innerHTML = ("+ " + (tcraf)) ;
	//____________________________________________________________________________________
	var deciInClass = document.getElementById("c-deci").innerHTML;
	var deciMscMod = document.getElementById("ms-deci").innerHTML;
	if (deciMscMod === "-") { var deciMscMod = 0;} else {var deciMscMod = Number(deciMscMod);}	// set equal to zero if element value is "-" (default)else, try to convert to a number
	if (deciInClass === "CLASS: 4") { var tdeci = (window.intMod) + ( Number(indeci) ) + (deciMscMod); } else { var tdeci = (window.intMod) + ( Number(indeci) / 2 ) + (deciMscMod); } // Whether or not it is a class skill
	document.getElementById("t-deci").innerHTML = ("+ " + (tdeci)) ;
	//____________________________________________________________________________________
	var diplInClass = document.getElementById("c-dipl").innerHTML;
	var diplMscMod = document.getElementById("ms-dipl").innerHTML;
	if (diplMscMod === "-") { var diplMscMod = 0;} else {var diplMscMod = Number(diplMscMod);}	// set equal to zero if element value is "-" (default)else, try to convert to a number
	if (diplInClass === "CLASS: 4") { var tdipl = (window.chaMod) + ( Number(indipl) ) + (diplMscMod); } else { var tdipl = (window.chaMod) + ( Number(indipl) / 2 ) + (diplMscMod); } // Whether or not it is a class skill
	document.getElementById("t-dipl").innerHTML = ("+ " + (tdipl)) ;
	//____________________________________________________________________________________
	var disaInClass = document.getElementById("c-disa").innerHTML;
	var disaMscMod = document.getElementById("ms-disa").innerHTML;
	if (disaMscMod === "-") { var disaMscMod = 0;} else {var disaMscMod = Number(disaMscMod);}	// set equal to zero if element value is "-" (default)else, try to convert to a number
	if (disaInClass === "CLASS: 4") { var tdisa = (window.intMod) + ( Number(indisa) ) + (disaMscMod); } else { var tdisa = (window.intMod) + ( Number(indisa) / 2 ) + (disaMscMod); } // Whether or not it is a class skill
	document.getElementById("t-disa").innerHTML = ("+ " + (tdisa)) ;
	//____________________________________________________________________________________
	var disgInClass = document.getElementById("c-disg").innerHTML;
	var disgMscMod = document.getElementById("ms-disg").innerHTML;
	if (disgMscMod === "-") { var disgMscMod = 0;} else {var disgMscMod = Number(disgMscMod);}	// set equal to zero if element value is "-" (default)else, try to convert to a number
	if (disgInClass === "CLASS: 4") { var tdisg = (window.chaMod) + ( Number(indisg) ) + (disgMscMod); } else { var tdisg = (window.chaMod) + ( Number(indisg) / 2 ) + (disgMscMod); } // Whether or not it is a class skill
	document.getElementById("t-disg").innerHTML = ("+ " + (tdisg)) ;
	//____________________________________________________________________________________
	var escaInClass = document.getElementById("c-esca").innerHTML;
	var escaMscMod = document.getElementById("ms-esca").innerHTML;
	if (escaMscMod === "-") { var escaMscMod = 0;} else {var escaMscMod = Number(escaMscMod);}	// set equal to zero if element value is "-" (default)else, try to convert to a number
	if (escaInClass === "CLASS: 4") { var tesca = (window.dexMod) + ( Number(inesca) ) + (escaMscMod); } else { var tesca = (window.dexMod) + ( Number(inesca) / 2 ) + (escaMscMod); } // Whether or not it is a class skill
	document.getElementById("t-esca").innerHTML = ("+ " + (tesca)) ;
	//____________________________________________________________________________________
	var forgInClass = document.getElementById("c-forg").innerHTML;
	var forgMscMod = document.getElementById("ms-forg").innerHTML;
	if (forgMscMod === "-") { var forgMscMod = 0;} else {var forgMscMod = Number(forgMscMod);}	// set equal to zero if element value is "-" (default)else, try to convert to a number
	if (forgInClass === "CLASS: 4") { var tforg = (window.intMod) + ( Number(inforg) ) + (forgMscMod); } else { var tforg = (window.intMod) + ( Number(inforg) / 2 ) + (forgMscMod); } // Whether or not it is a class skill
	document.getElementById("t-forg").innerHTML = ("+ " + (tforg)) ;
	//____________________________________________________________________________________
	var gathInClass = document.getElementById("c-gath").innerHTML;
	var gathMscMod = document.getElementById("ms-gath").innerHTML;
	if (gathMscMod === "-") { var gathMscMod = 0;} else {var gathMscMod = Number(gathMscMod);}	// set equal to zero if element value is "-" (default)else, try to convert to a number
	if (gathInClass === "CLASS: 4") { var tgath = (window.chaMod) + ( Number(ingath) ) + (gathMscMod); } else { var tgath = (window.chaMod) + ( Number(ingath) / 2 ) + (gathMscMod); } // Whether or not it is a class skill
	document.getElementById("t-gath").innerHTML = ("+ " + (tgath)) ;
	//____________________________________________________________________________________
	var handInClass = document.getElementById("c-hand").innerHTML;
	var handMscMod = document.getElementById("ms-hand").innerHTML;
	if (handMscMod === "-") { var handMscMod = 0;} else {var handMscMod = Number(handMscMod);}	// set equal to zero if element value is "-" (default)else, try to convert to a number
	if (handInClass === "CLASS: 4") { var thand = (window.chaMod) + ( Number(inhand) ) + (handMscMod); } else { var thand = (window.chaMod) + ( Number(inhand) / 2 ) + (handMscMod); } // Whether or not it is a class skill
	document.getElementById("t-hand").innerHTML = ("+ " + (thand)) ;
	//____________________________________________________________________________________
	var healInClass = document.getElementById("c-heal").innerHTML;
	var healMscMod = document.getElementById("ms-heal").innerHTML;
	if (healMscMod === "-") { var healMscMod = 0;} else {var healMscMod = Number(healMscMod);}	// set equal to zero if element value is "-" (default)else, try to convert to a number
	if (healInClass === "CLASS: 4") { var theal = (window.wisMod) + ( Number(inheal) ) + (healMscMod); } else { var theal = (window.wisMod) + ( Number(inheal) / 2 ) + (healMscMod); } // Whether or not it is a class skill
	document.getElementById("t-heal").innerHTML = ("+ " + (theal)) ;
	//____________________________________________________________________________________
	var hideInClass = document.getElementById("c-hide").innerHTML;
	var hideMscMod = document.getElementById("ms-hide").innerHTML;
	if (hideMscMod === "-") { var hideMscMod = 0;} else {var hideMscMod = Number(hideMscMod);}	// set equal to zero if element value is "-" (default)else, try to convert to a number
	if (hideInClass === "CLASS: 4") { var thide = (window.dexMod) + ( Number(inhide) ) + (hideMscMod); } else { var thide = (window.dexMod) + ( Number(inhide) / 2 ) + (hideMscMod); } // Whether or not it is a class skill
	document.getElementById("t-hide").innerHTML = ("+ " + (thide)) ;
	//____________________________________________________________________________________
	var intiInClass = document.getElementById("c-inti").innerHTML;
	var intiMscMod = document.getElementById("ms-inti").innerHTML;
	if (intiMscMod === "-") { var intiMscMod = 0;} else {var intiMscMod = Number(intiMscMod);}	// set equal to zero if element value is "-" (default)else, try to convert to a number
	if (intiInClass === "CLASS: 4") { var tinti = (window.chaMod) + ( Number(ininti) ) + (intiMscMod); } else { var tinti = (window.chaMod) + ( Number(ininti) / 2 ) + (intiMscMod); } // Whether or not it is a class skill
	document.getElementById("t-inti").innerHTML = ("+ " + (tinti)) ;
	//____________________________________________________________________________________
	var jumpInClass = document.getElementById("c-jump").innerHTML;
	var jumpMscMod = document.getElementById("ms-jump").innerHTML;
	if (jumpMscMod === "-") { var jumpMscMod = 0;} else {var jumpMscMod = Number(jumpMscMod);}	// set equal to zero if element value is "-" (default)else, try to convert to a number
	if (jumpInClass === "CLASS: 4") { var tjump = (window.strMod) + ( Number(injump) ) + (jumpMscMod); } else { var tjump = (window.strMod) + ( Number(injump) / 2 ) + (jumpMscMod); } // Whether or not it is a class skill
	document.getElementById("t-jump").innerHTML = ("+ " + (tjump)) ;
	//____________________________________________________________________________________
	var knowInClass = document.getElementById("c-know").innerHTML;
	var knowMscMod = document.getElementById("ms-know").innerHTML;
	if (knowMscMod === "-") { var knowMscMod = 0;} else {var knowMscMod = Number(knowMscMod);}	// set equal to zero if element value is "-" (default)else, try to convert to a number
	if (knowInClass === "CLASS: 4") { var tknow = (window.intMod) + ( Number(inknow) ) + (knowMscMod); } else { var tknow = (window.intMod) + ( Number(inknow) / 2 ) + (knowMscMod); } // Whether or not it is a class skill
	document.getElementById("t-know").innerHTML = ("+ " + (tknow)) ;
	//____________________________________________________________________________________
	var listInClass = document.getElementById("c-list").innerHTML;
	var listMscMod = document.getElementById("ms-list").innerHTML;
	if (listMscMod === "-") { var listMscMod = 0;} else {var listMscMod = Number(listMscMod);}	// set equal to zero if element value is "-" (default)else, try to convert to a number
	if (listInClass === "CLASS: 4") { var tlist = (window.wisMod) + ( Number(inlist) ) + (listMscMod); } else { var tlist = (window.wisMod) + ( Number(inlist) / 2 ) + (listMscMod); } // Whether or not it is a class skill
	document.getElementById("t-list").innerHTML = ("+ " + (tlist)) ;
	//____________________________________________________________________________________
	var moveInClass = document.getElementById("c-move").innerHTML;
	var moveMscMod = document.getElementById("ms-move").innerHTML;
	if (moveMscMod === "-") { var moveMscMod = 0;} else {var moveMscMod = Number(moveMscMod);}	// set equal to zero if element value is "-" (default)else, try to convert to a number
	if (moveInClass === "CLASS: 4") { var tmove = (window.dexMod) + ( Number(inmove) ) + (moveMscMod); } else { var tmove = (window.dexMod) + ( Number(inmove) / 2 ) + (moveMscMod); } // Whether or not it is a class skill
	document.getElementById("t-move").innerHTML = ("+ " + (tmove)) ;
	//____________________________________________________________________________________
	var openInClass = document.getElementById("c-open").innerHTML;
	var openMscMod = document.getElementById("ms-open").innerHTML;
	if (openMscMod === "-") { var openMscMod = 0;} else {var openMscMod = Number(openMscMod);}	// set equal to zero if element value is "-" (default)else, try to convert to a number
	if (openInClass === "CLASS: 4") { var topen = (window.dexMod) + ( Number(inopen) ) + (openMscMod); } else { var topen = (window.dexMod) + ( Number(inopen) / 2 ) + (openMscMod); } // Whether or not it is a class skill
	document.getElementById("t-open").innerHTML = ("+ " + (topen)) ;
	//____________________________________________________________________________________
	var perfInClass = document.getElementById("c-perf").innerHTML;
	var perfMscMod = document.getElementById("ms-perf").innerHTML;
	if (perfMscMod === "-") { var perfMscMod = 0;} else {var perfMscMod = Number(perfMscMod);}	// set equal to zero if element value is "-" (default)else, try to convert to a number
	if (perfInClass === "CLASS: 4") { var tperf = (window.chaMod) + ( Number(inperf) ) + (perfMscMod); } else { var tperf = (window.chaMod) + ( Number(inperf) / 2 ) + (perfMscMod); } // Whether or not it is a class skill
	document.getElementById("t-perf").innerHTML = ("+ " + (tperf)) ;
	//____________________________________________________________________________________
	var profInClass = document.getElementById("c-prof").innerHTML;
	var profMscMod = document.getElementById("ms-prof").innerHTML;
	if (profMscMod === "-") { var profMscMod = 0;} else {var profMscMod = Number(profMscMod);}	// set equal to zero if element value is "-" (default)else, try to convert to a number
	if (profInClass === "CLASS: 4") { var tprof = (window.wisMod) + ( Number(inprof) ) + (profMscMod); } else { var tprof = (window.wisMod) + ( Number(inprof) / 2 ) + (profMscMod); } // Whether or not it is a class skill
	document.getElementById("t-prof").innerHTML = ("+ " + (tprof)) ;
	//____________________________________________________________________________________
	var rideInClass = document.getElementById("c-ride").innerHTML;
	var rideMscMod = document.getElementById("ms-ride").innerHTML;
	if (rideMscMod === "-") { var rideMscMod = 0;} else {var rideMscMod = Number(rideMscMod);}	// set equal to zero if element value is "-" (default)else, try to convert to a number
	if (rideInClass === "CLASS: 4") { var tride = (window.dexMod) + ( Number(inride) ) + (rideMscMod); } else { var tride = (window.dexMod) + ( Number(inride) / 2 ) + (rideMscMod); } // Whether or not it is a class skill
	document.getElementById("t-ride").innerHTML = ("+ " + (tride)) ;
	//____________________________________________________________________________________
	var searInClass = document.getElementById("c-sear").innerHTML;
	var searMscMod = document.getElementById("ms-sear").innerHTML;
	if (searMscMod === "-") { var searMscMod = 0;} else {var searMscMod = Number(searMscMod);}	// set equal to zero if element value is "-" (default)else, try to convert to a number
	if (searInClass === "CLASS: 4") { var tsear = (window.intMod) + ( Number(insear) ) + (searMscMod); } else { var tsear = (window.intMod) + ( Number(insear) / 2 ) + (searMscMod); } // Whether or not it is a class skill
	document.getElementById("t-sear").innerHTML = ("+ " + (tsear)) ;
	//____________________________________________________________________________________
	var sensInClass = document.getElementById("c-sens").innerHTML;
	var sensMscMod = document.getElementById("ms-sens").innerHTML;
	if (sensMscMod === "-") { var sensMscMod = 0;} else {var sensMscMod = Number(sensMscMod);}	// set equal to zero if element value is "-" (default)else, try to convert to a number
	if (sensInClass === "CLASS: 4") { var tsens = (window.wisMod) + ( Number(insens) ) + (sensMscMod); } else { var tsens = (window.wisMod) + ( Number(insens) / 2 ) + (sensMscMod); } // Whether or not it is a class skill
	document.getElementById("t-sens").innerHTML = ("+ " + (tsens)) ;
	//____________________________________________________________________________________
	var sleiInClass = document.getElementById("c-slei").innerHTML;
	var sleiMscMod = document.getElementById("ms-slei").innerHTML;
	if (sleiMscMod === "-") { var sleiMscMod = 0;} else {var sleiMscMod = Number(sleiMscMod);}	// set equal to zero if element value is "-" (default)else, try to convert to a number
	if (sleiInClass === "CLASS: 4") { var tslei = (window.dexMod) + ( Number(inslei) ) + (sleiMscMod); } else { var tslei = (window.dexMod) + ( Number(inslei) / 2 ) + (sleiMscMod); } // Whether or not it is a class skill
	document.getElementById("t-slei").innerHTML = ("+ " + (tslei)) ;
	//____________________________________________________________________________________
	var spelInClass = document.getElementById("c-spel").innerHTML;
	var spelMscMod = document.getElementById("ms-spel").innerHTML;
	if (spelMscMod === "-") { var spelMscMod = 0;} else {var spelMscMod = Number(spelMscMod);}	// set equal to zero if element value is "-" (default)else, try to convert to a number
	if (spelInClass === "CLASS: 4") { var tspel = (window.intMod) + ( Number(inspel) ) + (spelMscMod); } else { var tspel = (window.intMod) + ( Number(inspel) / 2 ) + (spelMscMod); } // Whether or not it is a class skill
	document.getElementById("t-spel").innerHTML = ("+ " + (tspel)) ;
	//____________________________________________________________________________________
	var spotInClass = document.getElementById("c-spot").innerHTML;
	var spotMscMod = document.getElementById("ms-spot").innerHTML;
	if (spotMscMod === "-") { var spotMscMod = 0;} else {var spotMscMod = Number(spotMscMod);}	// set equal to zero if element value is "-" (default)else, try to convert to a number
	if (spotInClass === "CLASS: 4") { var tspot = (window.wisMod) + ( Number(inspot) ) + (spotMscMod); } else { var tspot = (window.wisMod) + ( Number(inspot) / 2 ) + (spotMscMod); } // Whether or not it is a class skill
	document.getElementById("t-spot").innerHTML = ("+ " + (tspot)) ;
	//____________________________________________________________________________________
	var survInClass = document.getElementById("c-surv").innerHTML;
	var survMscMod = document.getElementById("ms-surv").innerHTML;
	if (survMscMod === "-") { var survMscMod = 0;} else {var survMscMod = Number(survMscMod);}	// set equal to zero if element value is "-" (default)else, try to convert to a number
	if (survInClass === "CLASS: 4") { var tsurv = (window.wisMod) + ( Number(insurv) ) + (survMscMod); } else { var tsurv = (window.wisMod) + ( Number(insurv) / 2 ) + (survMscMod); } // Whether or not it is a class skill
	document.getElementById("t-surv").innerHTML = ("+ " + (tsurv)) ;
	//____________________________________________________________________________________
	var swimInClass = document.getElementById("c-swim").innerHTML;
	var swimMscMod = document.getElementById("ms-swim").innerHTML;
	if (swimMscMod === "-") { var swimMscMod = 0;} else {var swimMscMod = Number(swimMscMod);}	// set equal to zero if element value is "-" (default)else, try to convert to a number
	if (swimInClass === "CLASS: 4") { var tswim = (window.strMod) + ( Number(inswim) ) + (swimMscMod); } else { var tswim = (window.strMod) + ( Number(inswim) / 2 ) + (swimMscMod); } // Whether or not it is a class skill
	document.getElementById("t-swim").innerHTML = ("+ " + (tswim)) ;
	//____________________________________________________________________________________
	var tumbInClass = document.getElementById("c-tumb").innerHTML;
	var tumbMscMod = document.getElementById("ms-tumb").innerHTML;
	if (tumbMscMod === "-") { var tumbMscMod = 0;} else {var tumbMscMod = Number(tumbMscMod);}	// set equal to zero if element value is "-" (default)else, try to convert to a number
	if (tumbInClass === "CLASS: 4") { var ttumb = (window.dexMod) + ( Number(intumb) ) + (tumbMscMod); } else { var ttumb = (window.dexMod) + ( Number(intumb) / 2 ) + (tumbMscMod); } // Whether or not it is a class skill
	document.getElementById("t-tumb").innerHTML = ("+ " + (ttumb)) ;
	//____________________________________________________________________________________
	var usemInClass = document.getElementById("c-usem").innerHTML;
	var usemMscMod = document.getElementById("ms-usem").innerHTML;
	if (usemMscMod === "-") { var usemMscMod = 0;} else {var usemMscMod = Number(usemMscMod);}	// set equal to zero if element value is "-" (default)else, try to convert to a number
	if (usemInClass === "CLASS: 4") { var tusem = (window.chaMod) + ( Number(inusem) ) + (usemMscMod); } else { var tusem = (window.chaMod) + ( Number(inusem) / 2 ) + (usemMscMod); } // Whether or not it is a class skill
	document.getElementById("t-usem").innerHTML = ("+ " + (tusem)) ;
	//____________________________________________________________________________________
	var userInClass = document.getElementById("c-user").innerHTML;
	var userMscMod = document.getElementById("ms-user").innerHTML;
	if (userMscMod === "-") { var userMscMod = 0;} else {var userMscMod = Number(userMscMod);}	// set equal to zero if element value is "-" (default)else, try to convert to a number
	if (userInClass === "CLASS: 4") { var tuser = (window.dexMod) + ( Number(inuser) ) + (userMscMod); } else { var tuser = (window.dexMod) + ( Number(inuser) / 2 ) + (userMscMod); } // Whether or not it is a class skill
	document.getElementById("t-user").innerHTML = ("+ " + (tuser)) ;
	//____________________________________________________________________________________
	
}	// );

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

	if (confirmF && confirmR) {

		switch(featName) {
			case "Acrobatic":
				var jumpMiscMod = document.getElementById("ms-jump").innerHTML;
				var tumbMiscMod = document.getElementById("ms-tumb").innerHTML;
			
				if (jumpMiscMod === "-") {
					document.getElementById("ms-jump").innerHTML = 2;
				} else {
					jumpMiscMod = Number(jumpMiscMod);
					jumpMiscMod += 2;
					document.getElementById("ms-jump").innerHTML = jumpMiscMod;
				}
			
				if (tumbMiscMod === "-") {
					document.getElementById("ms-tumb").innerHTML = 2;
				} else {
					tumbMiscMod = Number(tumbMiscMod);
					tumbMiscMod += 2;
					document.getElementById("ms-tumb").innerHTML = tumbMiscMod;
				}
			break;


		}
		// document.getElementById("ms-clim").innerHTML = 2;
		
	}
}





/*
var vacuumUpAttr = function(form) {
	var whichAttrClass = (form.attributeOne.value.toLowerCase() + "-option");
	var list = document.getElementsByClassName(whichAttrClass);
	for (var i = 0; i < list.length; i++) {
    	list[i].style.display = "none";	// list[i] is a node with the desired class name
    }
}
*/


























