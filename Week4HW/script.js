// Include the Following HTML
//    Updated title tag DONE
//    Header, Main, and Footer sections DONE
//    2+ lists DONE
//    2+ headings DONE
//    1+ paragraph DONE
//    1+ image DONE
//    2+ links DONE
// Include the Following CSS
//    utilize the CSS Box Model for padding, margin, and border DONE
//    utilize a color scheme (max. 4 colors) DONE
//    1+ class selector DONE
//    1+ ID selector DONE
//    1+ complex selector DONE
// Bonus Challenge
// GOAL: Use JavaScript DOM methods to populate some to "all" of your HTML from a .js file instead of "hard coding" your HTML into your index.html file. SOMEWHAT DONE...

document.querySelector(`header > h1`).innerHTML = "What is Cryptocurrency?";

document.querySelector("header > h1").style.cssText =
  "color: darkslategray; border: 1px solid black; padding: 10px; text-align: center";


document.querySelector('.box').style.backgroundColor = '#c7cac1' ;
document.querySelector('.box').style.borderRadius = "10px";


//Content Overview
document.querySelector('.mainDiv').style.backgroundColor = '#63887E' ;
document.querySelector(".mainDiv").style.cssText =
  "background-color: #c7cac1; color: darkslategray; border: 1px solid black; padding: 5px;"

  document.querySelector('.mainDiv').style.borderRadius = "10px";
document.querySelector('#firstH').innerHTML = "Cryptocurrency is...";

//Digital Money
document.querySelector('.digitalMoney').style.cssText =
  "background-color: #c7cac1; color: darkslategray; border: 1px solid black; padding: 1px; margin: 10px 20%; text-align: center"
  document.querySelector('.digitalMoney').style.borderRadius = "10px";
  document.querySelector('.firstP').innerHTML = "Bitcoin (the first Cryptocurrency), was created in 2008 as an alternative to fiat currency. It can be transferred to anywhere in the world in a matter of minutes and the supply is fixed and dictated by an encrypted code. Since Bitcoin's creation, thousands of cryptocurrencies have emerged";

//Investment
document.querySelector('.investment').style.cssText =
  "background-color: #c7cac1; color: darkslategray; border: 1px solid black; padding: 10px; margin: 10px 20%; text-align: center"
  document.querySelector('.investment').style.borderRadius = "10px";
  document.querySelector('.p2').innerHTML = "Cryptocurrency presents a unique opporunity as an investment. Becuase it has not faced major regulation (yet), many of the largest financial instutions are not allowed to invest in the space. Regulation is certainly coming, and many large institutions have expressed interest in investing. This means that there is an opporunity to invest before the largest instutions, which is virtually impossible in the stock market.";

//RevTech
document.querySelector('.revTech').style.cssText =
  "background-color: #c7cac1; color: darkslategray; border: 1px solid black; padding: 1px; margin: 10px 20%; text-align: center"
  document.querySelector('.revTech').style.borderRadius = "10px";
  document.querySelector('.p3').innerHTML = "Cryptocurrency has the power to change the world as we know it. There are thousands of use cases; imagine a world in which people get paid each day that they work, instead of once every two weeks. Banks collect billions of dollars in overdraft fees from people who are waiting for their bi-weekly paychecks to land in their accounts, Cryptocurrency could put an end to this. Although, the importance of cryptocurrencies goes much further than overdraft fees..."

//Final Section
document.querySelector('.lastDiv').style.backgroundColor = '#63887E' ;
document.querySelector(".lastDiv").style.cssText =
  "background-color: #c7cac1; color: darkslategray; border: 1px solid black; padding: 5px;"

  document.querySelector('.lastDiv').style.borderRadius = "10px";
document.querySelector('#lastH').innerHTML = "Other important use cases...";
document.querySelector('.p4').innerHTML = "As stated above, there are thousands of cryptocurrencies, so there are thousands of use cases as well, the use cases below apply to the two largest, most popular cryptocurrencies: Bitcoin and Ethereum."


