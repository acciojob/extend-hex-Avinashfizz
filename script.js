const extendHex = (shortHex) => {
  // write your code here

  let i = shortHex.length()-3;
  let isCapital = false;
	for(int j=0; j<shortHex.length()){
		if(shortHex[i]>=65 && shortHex[i]<=90)isCapital=true;
		j++;
	}
  let ans="#"+"shortHex[i]"+"shortHex[i]"+"shortHex[i+1]"+"shortHex[i+1]"+"shortHex[i+2]"+"shortHex[i+2]";
	if(isCapital===true)ans=ans.toUpperCase();
	return ans;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
