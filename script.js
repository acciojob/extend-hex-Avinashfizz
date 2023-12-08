const extendHex = (shortHex) => {
  // write your code here

  let i = shortHex.length()-3;
  let isCapital = false; 
  let ans ="#";
	for( i=0; i<shortHex.length){
		if(shortHex[i].charAtCode()>=65 && shortHex[i].charAtCode()<=90)isCapital=true;
		
		ans+=shortHex[i]+shortHex[i];
		i++;
	}
  
	if(isCapital===true)ans=ans.toUpperCase();
	return ans;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
