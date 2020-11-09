module​.​exports​ ​=​ ​{​
  ​name​: ​"uptime"​,​
  ​description​: ​"Get bot's uptime"​,​
  ​execute​ ​(​message​)​ ​{​
    ​const​ ​milli​ ​=​ ​message​.​client​.​uptime​;​
    ​let​ ​minutes​ ​=​ ​Math​.​floor​(​milli​ / ​60000​)​;​
    ​let​ ​hours​ ​=​ ​Math​.​round​(​minutes​ / ​60​)​;​
    ​let​ ​days​ ​=​ ​Math​.​round​(​hours​ / ​24​)​;​

    ​return​ ​message​.​channel​.​send​ ​(​days​ ​&&​ ​{​days​: ​days​}​)​ ​||​ ​(​hours​ ​&&​ ​{​hours​: ​hours​}​)​ ​||​ ​{​minutes​: ​minutes​}​)​;​
​}​;