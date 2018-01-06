							var number;
							var count=0;
							var correct=0;
							var myVar;
							var flag;
							function start()
							{
								count=0;
								correct=0;
								document.getElementById("button1").disabled = true;

								document.getElementById("text1").value="0";
								document.getElementById("text2").value="0";

								myVar = setInterval(function(){ startGame() }, 1000);

							}
							function end()
							{
								document.getElementById("text1").value="0";
								document.getElementById("text2").value="0";
								document.getElementById("num").innerHTML ="";
								document.getElementById("button1").disabled = false;
								document.getElementById("result").innerHTML ="&nbsp &nbsp You got: "+correct+"/"+count;

								clearInterval(myVar);
							}
							function startGame()
							{
								//alert(parseInt(Math.random()*10)+1);
								flag=true;
								number=parseInt(Math.random()*10);
								document.getElementById("num").innerHTML =number;
								count=count+1;
								document.getElementById("text2").value=count;
							}

							function displayunicode(e)
							{
							
								
							var char = event.which || event.keyCode;
							console.log(char);
							if(flag==true)
							{
							switch(char)
							{
								case 48:
									
									if(number==0)
									{
										correct+=1;
										document.getElementById("text1").value=correct;
										flag=false;
									}
									break;
								case 49:
									if(number==1)
									{
										correct+=1;
										document.getElementById("text1").value=correct;
										flag=false;
									}
									break;
								case 50:
									if(number==2)
									{
										correct+=1;
										document.getElementById("text1").value=correct;
										flag=false;
									}
									break;
								case 51:
									if(number==3)
									{
										correct+=1;
										document.getElementById("text1").value=correct;
										flag=false;
									}
									break;
								case 52:
									if(number==4)
									{
										correct+=1;
										document.getElementById("text1").value=correct;
										flag=false;
									}
									break;
								case 53:
									if(number==5)
									{
										correct+=1;
										document.getElementById("text1").value=correct;
										flag=false;
									}
									break;
								case 54:
									if(number==6)
									{
										correct+=1;
										document.getElementById("text1").value=correct;
										flag=false;
									}
									break;
								case 55:
									if(number==7)
									{
										correct+=1;
										document.getElementById("text1").value=correct;
										flag=false;
									}
									break;
								case 56:
									if(number==8)
									{
										correct+=1;
										document.getElementById("text1").value=correct;
										flag=false;
									}
									break;
								case 57:
									if(number==9)
									{
										correct+=1;
										document.getElementById("text1").value=correct;
										flag=false;
									}
									break;
								default:
									flag=false;
											
							}  
							}  
							}