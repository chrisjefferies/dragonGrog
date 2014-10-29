// All handling for item buying

var buyWeapon = function(weaponName, itemCost, itemWeight, dmg, crit, rang, type, size, reach, hardness, hp, saves, exs) {
	
	var goldRemaining = Number( document.getElementById("copper-remaining").innerHTML ) ;

	if (itemCost <= goldRemaining) {
		goldRemaining = goldRemaining - itemCost ;
		document.getElementById("copper-remaining").innerHTML = goldRemaining ;

		window.itemPurchaseNo += 1;
		document.getElementById("item-purchase-no-" + window.itemPurchaseNo).innerHTML = weaponName ;
		document.getElementById("item-purchase-no-" + window.itemPurchaseNo).style.display = "block" ;
		
		var totalWeight = Number(document.getElementById("total-weight").innerHTML);
		totalWeight += itemWeight;
		document.getElementById("total-weight").innerHTML = totalWeight;
	

		if (window.weaponSlotOne === undefined) {
			var confirmWa = confirm("Do you want to equip this weapon in slot one?");
		} else if (window.weaponSlotTwo === undefined) {
			var confirmWb = confirm("Do you want to equip this weapon in slot two?");
		} else if (window.weaponSlotThree === undefined) {
			var confirmWc = confirm("Do you want to equip this weapon in slot three?");
		} else {
			alert("You have no more open weapon slots. User-added weapon slots are not supported in this version.");
		}

		if (confirmWa) {
			window.wSlotOne = new weaponSlot(weaponName, itemWeight, dmg, crit, rang, type, size, reach, hardness, hp, saves, exs);
			window.weaponSlotOne = true;
		} 
		if (confirmWb) {
			window.wSlotTwo = new weaponSlot(weaponName, itemWeight, dmg, crit, rang, type, size, reach, hardness, hp, saves, exs);
			window.weaponSlotTwo = true;
		} 
		if (confirmWc) {
			window.wSlotThr = new weaponSlot(weaponName, itemWeight, dmg, crit, rang, type, size, reach, hardness, hp, saves, exs);
			window.weaponSlotThree = true;
		} 

		invDisplay();

	} else {
		alert("You cannot afford this item.") ;
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
	document.getElementById("inventory").style.display = "block";
	document.getElementById("equip-variable-buffer").style.display = "block" ;
}




var rollStartingGold = function (input) {

	if (input === "first") {
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
			break;
		}
	}
	if (input === "leveled") {
		/*
		var gold = 0;
		for ( i = 0 ; i < window.levelAdvance ; i++ ) {
			gold += ( 9 * i ) * 10;
		} */

		switch (Number(window.levelAdvance) ) {
			case 2:
				var gold = 900;
			break;
			case 3:
				var gold = 2700;
			break;
			case 4:
				var gold = 5400;
			break;
			case 5:
				var gold = 9000;
			break;
			case 6:
				var gold = 13000;
			break;
			case 7:
				var gold = 19000;
			break;
			case 8:
				var gold = 27000;
			break;
			case 9:
				var gold = 36000;
			break;
			case 10:
				var gold = 49000;
			break;
			case 11:
				var gold = 66000;
			break;
			case 12:
				var gold = 88000;
			break;
			case 13:
				var gold = 110000;
			break;
			case 14:
				var gold = 150000;
			break;
			case 15:
				var gold = 200000;
			break;
			case 16:
				var gold = 260000;
			break;
			case 17:
				var gold = 340000;
			break;
			case 18:
				var gold = 440000;
			break;
			case 19:
				var gold = 580000;
			break;
			case 20:
				var gold = 760000;
			break;
		}


		document.getElementById("copper-remaining").innerHTML = (gold * 100);
		document.getElementById("roll-starting-gold").style.display = "none" ; // Remove button to prevent repeats. 
		document.getElementById("inventory").style.display = "block";
		document.getElementById("equip-variable-buffer").style.display = "block" ;
	}
	if (input === "input") {
		document.getElementById("copper-remaining").innerHTML = document.getElementById("gold-input").value;
		document.getElementById("roll-starting-gold").style.display = "none" ; // Remove button to prevent repeats. 
		document.getElementById("inventory").style.display = "block";
		document.getElementById("equip-variable-buffer").style.display = "block" ;
	}
}

var invDisplay = function() {
	if (window.itemPurchaseNo < 26 ) {
		document.getElementById("equip-variable-buffer").style.height = ( 300 - (window.itemPurchaseNo * 11 ) ).toString() + "px" ;
		if (window.itemPurchaseNo === 25 ) {
			document.getElementById("inventory-2").style.display = "block" ;
		}
	}
	if (26 < window.itemPurchaseNo < 50 ) {
		document.getElementById("equip-variable-buffer-2").style.height = ( 600 - (window.itemPurchaseNo * 11 ) ).toString() + "px" ;
	}

	if (window.itemPurchaseNo > 60 ) {
		alert("Capacity Reached");
	}
}


var buyItem = function(itemName, itemCost, itemWeight) {

	// alert("window item item-purchase-no :" + window.itemPurchaseNo);
	
	var goldRemaining = Number( document.getElementById("copper-remaining").innerHTML ) ;

	if (itemCost <= goldRemaining) {
		goldRemaining = goldRemaining - itemCost ;
		document.getElementById("copper-remaining").innerHTML = goldRemaining ;

		window.itemPurchaseNo += 1;
		document.getElementById("item-purchase-no-" + window.itemPurchaseNo).innerHTML = itemName ;
		document.getElementById("item-purchase-no-" + window.itemPurchaseNo).style.display = "block" ;
		
		var totalWeight = Number(document.getElementById("total-weight").innerHTML);
		totalWeight += itemWeight;
		document.getElementById("total-weight").innerHTML = totalWeight;
		
		buySpecialItem(itemName, window.itemPurchaseNo);
		invDisplay();
		
		
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
		
		invDisplay();

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




var buyArmor = function(armorName, itemCost, itemWeight, armorBonus, maxDex, check, spFail, maxSp, hardn, hp, saves, donning, exs ) {

	var goldRemaining = Number( document.getElementById("copper-remaining").innerHTML ) ;

	if (itemCost <= goldRemaining) {
		goldRemaining = goldRemaining - itemCost ;
		document.getElementById("copper-remaining").innerHTML = goldRemaining ;

		window.itemPurchaseNo += 1;
		document.getElementById("item-purchase-no-" + window.itemPurchaseNo).innerHTML = armorName ;
		document.getElementById("item-purchase-no-" + window.itemPurchaseNo).style.display = "block" ;
		
		var totalWeight = Number(document.getElementById("total-weight").innerHTML);
		totalWeight += itemWeight;
		document.getElementById("total-weight").innerHTML = totalWeight;

		if (window.armorSlot) {
			var changeArmor = confirm("You already have armor equipped. Replace " + window.aSlot.armorName + " with this?");
			if (changeArmor) {
				window.aSlot = new armor(armorName, itemWeight, armorBonus, maxDex, check, spFail, maxSp, hardn, hp, saves, donning, exs);
			}
		} else if (window.armorSlot === undefined) {
			var confirmAr = confirm("Do you want to equip this armor?");
		}

		if (confirmAr) {
			window.aSlot = new armor(armorName, itemWeight, armorBonus, maxDex, check, spFail, maxSp, hardn, hp, saves, donning);
			window.armorSlot = true;
		} 

		if (window.armorSlot) {
			document.getElementById("print-armor-bonus").innerHTML = window.aSlot.arBonus;
			// Update AC on character sheet. So it ca be relied upon later for calculations during population. 
		}	

		invDisplay();

	} else {
		alert("You cannot afford this item.") ;
	}
}




var buyShield = function(shieldName, itemCost, itemWeight, armorBonus, maxDex, check, spFail, maxSp, hardn, hp, saves, donning ) {

	var goldRemaining = Number( document.getElementById("copper-remaining").innerHTML ) ;

	if (itemCost <= goldRemaining) {
		goldRemaining = goldRemaining - itemCost ;
		document.getElementById("copper-remaining").innerHTML = goldRemaining ;

		window.itemPurchaseNo += 1;
		document.getElementById("item-purchase-no-" + window.itemPurchaseNo).innerHTML = shieldName ;
		document.getElementById("item-purchase-no-" + window.itemPurchaseNo).style.display = "block" ;
		
		var totalWeight = Number(document.getElementById("total-weight").innerHTML);
		totalWeight += itemWeight;
		document.getElementById("total-weight").innerHTML = totalWeight;
		
		if (window.shieldSlot) {
			var changeArmor = confirm("You already have a shield equipped. Replace " + window.sSlot.shieldName + " with this?");
			if (changeArmor) {
				window.sSlot = new shield(shieldName, itemWeight, armorBonus, maxDex, check, spFail, maxSp, hardn, hp, saves, donning);
			}
		}

		if (window.shieldSlot === undefined) {
			var confirmSh = confirm("Do you want to equip this shield?");
		}

		if (confirmSh) {
			window.sSlot = new shield(shieldName, itemWeight, armorBonus, maxDex, check, spFail, maxSp, hardn, hp, saves, donning);
			window.shieldSlot = true;
		} 

		if (window.sSlot) {
			document.getElementById("print-shield-bonus").innerHTML = window.sSlot.arBonus;
			// Update AC on character sheet.
		}
		
		invDisplay();

	} else {
		alert("You cannot afford this item.") ;
	}

}




//
//
// Next generation item generation
//
//

var updateCustomForm = function(kindOfItem) {
	switch (kindOfItem) {
		case "weapon":
			// Print total enhancement bonus from enchantments.
			var base = Number(document.getElementById("cu-w-basecost").value) * 100;
			var qual = Number(document.getElementById("cu-w-qual").value);
			document.getElementById("cu-w-qual-disp").innerHTML = qual;

			var en1 = document.getElementById("cu-w-enhan-val-1").value;
			switch (en1) {
				case "none":
					var enchant1 = 0;
				break;
				case "anar":
				case "axio":
				case "disr":
				case "flbu":
				case "icbu":
				case "holy":
				case "shbu":
				case "unho":
				case "woun":
					var enchant1 = 2;
				break;
				case "spee":
					var enchant1 = 3;
				break;
				case "bril":
				case "danc":
					var enchant1 = 4;
				break;
				case "vorp":
					var enchant1 = 5;
				break;
				default:
					var enchant1 = 1;
				break;
			}
			var en2 = document.getElementById("cu-w-enhan-val-2").value;
			switch (en2) {
				case "none":
					var enchant2 = 0;
				break;
				case "anar":
				case "axio":
				case "disr":
				case "flbu":
				case "icbu":
				case "holy":
				case "shbu":
				case "unho":
				case "woun":
					var enchant2 = 2;
				break;
				case "spee":
					var enchant2 = 3;
				break;
				case "bril":
				case "danc":
					var enchant2 = 4;
				break;
				case "vorp":
					var enchant2 = 5;
				break;
				default:
					var enchant2 = 1;
				break;
			}
			var en3 = document.getElementById("cu-w-enhan-val-3").value;
			switch (en3) {
				case "none":
					var enchant3 = 0;
				break;
				case "anar":
				case "axio":
				case "disr":
				case "flbu":
				case "icbu":
				case "holy":
				case "shbu":
				case "unho":
				case "woun":
					var enchant3 = 2;
				break;
				case "spee":
					var enchant3 = 3;
				break;
				case "bril":
				case "danc":
					var enchant3 = 4;
				break;
				case "vorp":
					var enchant3 = 5;
				break;
				default:
					var enchant3 = 1;
				break;
			}

			document.getElementById("cu-w-enhan").innerHTML = enchant1 + enchant2 + enchant3;
			
			document.getElementById("cu-w-bonus").innerHTML = qual;
			

			if (enchant1 + enchant2 + enchant3 > 0) {
				document.getElementById("cu-w-qual-disp").innerHTML = 1;
				document.getElementById("cu-w-bonus").innerHTML = enchant1 + enchant2 + enchant3;
				if (enchant1 + enchant2 + enchant3 > 5) {
					document.getElementById("cu-w-bonus").innerHTML = 5;
				}
			}

			var enhan = Number(document.getElementById("cu-w-enhan").innerHTML);
			
			if (qual === 1 && enhan < 1) {
				var masterwork = 30000;
			} else {
				var masterwork = 0;
			}
			
			var enhanPrice = (2000 * Math.pow(enhan, 2) ) * 100 ;

			document.getElementById("cu-w-cost").innerHTML = base + enhanPrice + masterwork;

			var critRan = Number(document.getElementById("cu-w-crit-rang").value);
			var critMult = Number(document.getElementById("cu-w-crit-mult").value);
			document.getElementById("cu-w-crit").innerHTML = critRan + "+/x" + critMult;

			if ( document.getElementById("cu-w-type").value === "ranged" || document.getElementById("cu-w-type").value === "throwing" ) {
				document.getElementById("cu-w-rang-base").style.display = "block";
			}
			if ( document.getElementById("cu-w-type").value === "melee") {
				document.getElementById("cu-w-rang-base").style.display = "none";
			}
			
		break;
	}

}

var equipSubMenu = function(whichSubMenu) {
	var allSubMenus = ["simpweap", "martweap", "exotweap", "armor", "gear", "substances", "tools", "custom"] ;
	for ( i = 0 ; i < allSubMenus.length ; i++ ) {
		if (allSubMenus[i] === whichSubMenu ) {
			document.getElementById("equip-" + whichSubMenu).style.display = "block" ;
		} else {
			document.getElementById("equip-" + allSubMenus[i] ).style.display = "none" ;
		}
	}
	window.scrollTo(0,0);
}

var customItemSubMenu = function() {
	var kind = document.getElementById("custom-select").value;
	document.getElementById("custom" + kind).style.display = "block";
	document.getElementById("custom-kind").style.display = "none";
}

var createCustomItem = function(itemKind) {
	if (itemKind === "weapon") {
		window.customItemNo += 1;

		var currentItemNo = window.customItemNo;

		var weaponName = document.getElementById("cu-w-name").value;
		var itemWeight = document.getElementById("cu-w-weig").value;

		var dmg = document.getElementById("cu-w-dama").value;
		var crit = document.getElementById("cu-w-crit").value;
		var rang = document.getElementById("cu-w-rang").value;
		var type = document.getElementById("cu-w-type").value;
		var size = document.getElementById("cu-w-size").value;
		var reach = document.getElementById("cu-w-reac").value;
		var hardness = document.getElementById("cu-w-hard").value;
		var hp = document.getElementById("cu-w-hitp").value;
		var saves = document.getElementById("cu-w-save").value;

		window[ "customItem" + currentItemNo ] = new customWeapon(weaponName, itemWeight, dmg, crit, rang, type, size, reach, hardness, hp, saves);
	}

	
}









































