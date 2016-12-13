var question1 = document.getElementsByName("question1");
var question2 = document.getElementsByName("question2");
var question3 = document.getElementsByName("question3");
var question4 = document.getElementsByName("question4");
var question5 = document.getElementsByName("question5");
var question6 = document.getElementsByName("question6");
var question7 = document.getElementsByName("question7");
var question8 = document.getElementsByName("question8");
var question9 = document.getElementsByName("question9");
var question10 = document.getElementsByName("question10");
var question11 = document.getElementsByName("question11");
var question12 = document.getElementsByName("question12");
var question13 = document.getElementsByName("question13");
var question14 = document.getElementsByName("question14");
var question15 = document.getElementsByName("question15");
var question16 = document.getElementsByName("question16");
var question17 = document.getElementsByName("question17");
var question18 = document.getElementsByName("question18");
var question19 = document.getElementsByName("question19");
var question20 = document.getElementsByName("question20");
var question21 = document.getElementsByName("question21");
var question22 = document.getElementsByName("question22");
var question23 = document.getElementsByName("question23");
var question24 = document.getElementsByName("question24");
var question25 = document.getElementsByName("question25");
var question26 = document.getElementsByName("question26");
var question27 = document.getElementsByName("question27");
var question28 = document.getElementsByName("question28");
var question29 = document.getElementsByName("question29");
var question30 = document.getElementsByName("question30");
var question31 = document.getElementsByName("question31");
var question32 = document.getElementsByName("question32");
var question33 = document.getElementsByName("question33");
var question34 = document.getElementsByName("question34");
var question35 = document.getElementsByName("question35");
var question36 = document.getElementsByName("question36");
var question37 = document.getElementsByName("question37");
var question38 = document.getElementsByName("question38");
var question39 = document.getElementsByName("question39");
var question40 = document.getElementsByName("question40");
var question41 = document.getElementsByName("question41");
var question42 = document.getElementsByName("question42");
var question43 = document.getElementsByName("question43");
var question44 = document.getElementsByName("question44");
var question45 = document.getElementsByName("question45");
var question46 = document.getElementsByName("question46");
var question47 = document.getElementsByName("question47");
var question48 = document.getElementsByName("question48");
var question49 = document.getElementsByName("question49");
var question50 = document.getElementsByName("question50");
var question51 = document.getElementsByName("question51");
var question52 = document.getElementsByName("question52");
var question53 = document.getElementsByName("question53");
var question54 = document.getElementsByName("question54");
var question55 = document.getElementsByName("question55");
var question56 = document.getElementsByName("question56");
var question57 = document.getElementsByName("question57");
var question58 = document.getElementsByName("question58");
var question59 = document.getElementsByName("question59");
var question60 = document.getElementsByName("question60");
var question61 = document.getElementsByName("question61");
var question62 = document.getElementsByName("question62");
var question63 = document.getElementsByName("question63");
var question64 = document.getElementsByName("question64");
var question65 = document.getElementsByName("question65");
var question66 = document.getElementsByName("question66");
var question67 = document.getElementsByName("question67");
var question68 = document.getElementsByName("question68");
var question69 = document.getElementsByName("question69");
var question70 = document.getElementsByName("question70");
var question71 = document.getElementsByName("question71");
var question72 = document.getElementsByName("question72");
var question73 = document.getElementsByName("question73");
var question74 = document.getElementsByName("question74");
var question75 = document.getElementsByName("question75");
var question76 = document.getElementsByName("question76");
var question77 = document.getElementsByName("question77");
var question78 = document.getElementsByName("question78");
var question79 = document.getElementsByName("question79");
var question80 = document.getElementsByName("question80");
var question81 = document.getElementsByName("question81");
var question82 = document.getElementsByName("question82");
var question83 = document.getElementsByName("question83");
var question84 = document.getElementsByName("question84");
var question85 = document.getElementsByName("question85");
var question86 = document.getElementsByName("question86");
var question87 = document.getElementsByName("question87");
var question88 = document.getElementsByName("question88");
var question89 = document.getElementsByName("question89");
var question90 = document.getElementsByName("question90");
var question91 = document.getElementsByName("question91");
var question92 = document.getElementsByName("question92");
var question93 = document.getElementsByName("question93");
var question94 = document.getElementsByName("question94");
var question95 = document.getElementsByName("question95");
var question96 = document.getElementsByName("question96");
var question97 = document.getElementsByName("question97");
var question98 = document.getElementsByName("question98");
var question99 = document.getElementsByName("question99");

var myArr = [question1,question2,question3,question4,question5,question6,question7,question8,question9,question10,question11,question12,question13,question14,question15,question16,question17,question18,question19,question20,question21,question22,question23,question24,question25,question26,question27,question28,question29,question30,question31,question32,question33,question34,question35,question36,question37,question38,question39,question40,question41,question42,question43,question44,question45,question46,question47,question48,question49,question50,question51,question52,question53,question54,question55,question56,question57,question58,question59,question60,question61,question62,question63,question64,question65,question66,question67,question68,question69,question70,question71,question72,question73,question74,question75,question76,question77,question78,question79,question80,question81,question82,question83,question84,question85,question86,question87,question88,question89,question90,question91,question92,question93,question94,question95,question96,question97,question98,question99];
var score = 0;
var firstPara = document.getElementById("firstPara");
var secondPara = document.getElementById("secondPara");

function submitted() {
	for(var i=0;i<myArr.length;i++) {
		for(var o=0;o<question1.length;o++) {
			if(myArr[i][o].value == "true"  && myArr[i][o].checked) {
                firstPara.innerHTML += "you got question " + (i+1) + " correct!";
			    score++; 
		}
	}

    }

    var showScore = Math.round((score/99)*100);
    secondPara.innerHTML += showScore;

}





